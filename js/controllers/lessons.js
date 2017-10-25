var models = null;
var cb = null;
var self = {
	_init: function(DB, cbCtrl) {
		models = DB;
		cb = cbCtrl
	},
	
	_getByID: function(lessonID, resp) {
		console.log('[CONTROLLERS] LESSONS _getByID:' + lessonID);

        models.Lesson.findOne({
            include: [models.Professor],
            where: { id: lessonID }
        }).then(function (lesson) {
			if(lesson) {
				cb(resp, JSON.stringify(lesson.dataValues));
			} else {
				//Lesson not created.
				cb(resp, '{"ERROR_CODE": 32,"Description": "Lesson not found. Create lesson to proceed."}');
			}
		});
	},

	_getAllLessons: function(resp) {
		console.log('[CONTROLLERS] LESSONS _getAll.');

		models.Lesson.findAll({
            include: [models.Professor]
            //Filter travels by deleted and by date
        }).then(function (lessons) {
			cb(resp, JSON.stringify(lessons));
		});
	},
	
	_getAllStudentsByLesson: function(lessonID, resp) {
		console.log('[CONTROLLERS] LESSONS _getAllStudentsByLesson. ID: ' + lessonID);
		
		models.Travel.findAll({
			include: [models.Professor, models.StudentLesson],
			where: { id: lessonID }
		}).then(function (studentsByLesson) {
			cb(resp, JSON.stringify(studentsByLesson));
		});
	},

	_createLesson: function(data, resp) {
		const professorId = data.professorid;
        const subjectId = data.subjectid;
        const lessonPrice = data.price;
        const lessonDescription = data.description;
        const lessonAddress = data.address;
        const lessonAvailability = data.availability;

		console.log('[CONTROLLERS] LESSONS _createLesson. ProfessorID:' + professorId);



        models.Professor.findOne({
            where: { id: professorId }
        }).then(function (professor) {
            professorID = professor.dataValues.id;
            models.Subject.findOne({
                where: { id: subjectId }
            }).then(function (subject) {
                subjectID = subject.dataValues.id;
                models.Lesson.create({

                }).then(function (lesson) {
                    cb(resp, JSON.stringify(lesson.dataValues));
                });
            });
        });
	}
};

module.exports = self;