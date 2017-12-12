var models = null;
var cb = null;
var self = {
	_init: function(DB, cbCtrl) {
		models = DB;
		cb = cbCtrl
	},

	_getByID: function(professorID, resp) {
		console.log('[CONTROLLERS] PROFESSORS _getByID:' + professorID);

        models.Professor.findOne({
            include: [
                models.User,
                {
                    model: models.SubjectProfessor,
                    include: [models.Subject]
                }
            ],
            where: { id: professorID }
        }).then(function (professor) {
			if(professor) {
				cb(resp, JSON.stringify(professor.dataValues));
			} else {
				//Professor not created.
				cb(resp, '{"ERROR_CODE":  401,"Description": "Professor not found. Create professor to proceed."}');
			}
		});
	},
	
	_createProfessor: function(data, resp) {
		const userid = data.userid;
		
		console.log('[CONTROLLERS] PROFESSORS _createProfessor:' + userid);
		
		models.Professor.create({
				userid: userid
		}).then(function (professor) {
			cb(resp, JSON.stringify(professor.dataValues));
		});
	},

	_getAll: function(resp) {
		console.log('[CONTROLLERS] PROFESSORS _getAll');

		models.Professor.findAll({
            include: [
                models.User,
                models.SubjectProfessor
            ]
        }).then(function (professors) {
			if(professors.length > 0) {
				cb(resp, JSON.stringify(professors));
			} else {
				//Any student created.
				cb(resp, '{"ERROR_CODE": 402,"Description": "Professor list is empty. Create an professor to proceed."}');
			}
		});
	},
	
	_getAllLessonsByProfessor: function(professorID, resp) {
		console.log('[CONTROLLERS] PROFESSORS _getAllLessonsByProfessor.');
		
		models.Professor.findAll({
			include: [models.Lesson],
			where: { id: professorID }
		}).then(function (lessonsPerProfessor) {
			cb(resp, JSON.stringify(lessonsPerProfessor));
		});
	}

};

module.exports = self;