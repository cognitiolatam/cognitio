var models = null;
var cb = null;
var self = {
	_init: function(DB, cbCtrl) {
		models = DB;
		cb = cbCtrl
	},

	_getByID: function(studentID, resp) {
		console.log('[CONTROLLERS] STUDENTS _getByID:' + studentID);

        models.Student.findOne({
            where: { id: studentID }
        }).then(function (student) {
			if(student) {
				cb(resp, JSON.stringify(student.dataValues));
			} else {
				//Student not created.
				cb(resp, '{"ERROR_CODE": 603,"Description": "Student not found. Create student to proceed."}');
			}
		});
	},
	
	_createStudent: function(data, resp) {
		const userid = data.userid;
		
		console.log('[CONTROLLERS] STUDENTS _createStudent:' + userid);
		
		models.Student.create({
				userid: userid
		}).then(function (student) {
			cb(resp, JSON.stringify(student.dataValues));
		});
	},
	
	_getAllStudents: function(resp) {
		console.log('[CONTROLLERS] STUDENTS _getAllStudents.');
		
		models.Student.findAll().then(function (students) {		
			if(students.length > 0) {
				cb(resp, JSON.stringify(students));
			} else {
				//Any student created.
				cb(resp, '{"ERROR_CODE": 604,"Description": "Student list is empty. Create an student to proceed."}');
			}
		});
	},
	
	_getAllLessonsByStudent: function(studentID, resp) {
		console.log('[CONTROLLERS] STUDENTS _getAllLessonsByStudent.');
		
		models.Student.findAll({
			include: [models.StudentLesson],
			where: { id: studentID }
		}).then(function (lessonsPerStudent) {
			cb(resp, JSON.stringify(lessonsPerStudent));
		});
	}

};

module.exports = self;