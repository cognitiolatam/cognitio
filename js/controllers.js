var db = async = null, log = false;
var Controllers = {};

var self = {
	User: null,
	Student: null,
	Professor: null,
	Lesson: null,
	StudentLesson: null,
	Review: null,
	Notification: null,
	Subject: null,
	SubjectProfessor: null,
	
	_callback : function(response, json) {
		response.writeHead(200, {"Content-Type": "application/json"});
		response.end(json);
	},
	
	_setupControllers: function (database, ayc, logg) {
		db = database;
		async =  ayc;

		self.User = Controllers.User = require('./controllers/users');
		self.Lesson = Controllers.Lesson = require('./controllers/lessons');
		self.Student = Controllers.Student = require('./controllers/students');
		self.Professor = Controllers.Professor = require('./controllers/professors');
		self.StudentLesson = Controllers.StudentLesson = require('./controllers/studentlessons');
		self.Review = Controllers.Review = require('./controllers/reviews');
		self.Notification = Controllers.Notification = require('./controllers/notifications');
		self.Subject = Controllers.Subject = require('./controllers/subjects');
		self.SubjectProfessor = Controllers.SubjectProfessor = require('./controllers/subjectsprofessor');

		for (property in Controllers) {
			Controllers[property]._init(db, self._callback);
		} 
	}
};

module.exports = self;