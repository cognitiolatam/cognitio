var client = null, log = false, testData = false;
// connection to db
var connection = null;
//Sequelize
var Sequelize = null;
//Models
var Models = {};

var self = {
	User: null,
	Student: null,
	Professor: null,
	Lesson: null,
	StudentLesson: null,
	Review: null,
	Notification: null,

	_setupDB: function (pg, seq, logg, testFlag) {
		pg.defaults.ssl = true;
		log = logg;
		Sequelize = seq;
		testData = testFlag;
		var connectionString = "postgres://mysjqcspdayiot:10c408d1d6ca5a01833e1045f47704f473035b31f2928c0b29515a7d2f32a0a1@ec2-54-243-185-123.compute-1.amazonaws.com:5432/dcuu33hrl51ij9";
		connection = new Sequelize(connectionString);
		connection.authenticate()
		.then(function(err) {
			console.log('Connection has been established successfully. Setting up models.');
			self._setupModels();
		})
		.catch(function (err) {
			console.log('Unable to connect to the database:', err);
		});
		/*pg.connect(connectionString, function(err, cli) {if (err) {throw err;} else {if(log) console.log('Connected to DB! Getting schemas...');client = cli;}});*/		
	},

	_setupModels: function () {
		Models.user = require('./models/users');
		Models.student = require('./models/students');
		Models.professor = require('./models/professors');
		Models.lesson = require('./models/lessons');
		Models.studentlesson = require('./models/studentlessons');
		Models.review = require('./models/reviews');
		Models.notification = require('./models/notifications');
		
		for (property in Models) {
			Models[property]._init(connection, Sequelize, self);
		}
		
		//Relations
		//User
		self.User.hasMany(self.Notification, {foreignKey: 'userid'});
		
		//Student
		self.Student.hasOne(self.User, {foreignKey: 'userid'});		
		self.Student.hasMany(self.StudentLesson, {foreignKey: 'studentid'});		
		
		//Professor
		self.Professor.hasOne(self.User, {foreignKey: 'userid'});		
		self.Professor.hasMany(self.Lesson, {foreignKey: 'professorid'});		
		
		//Lesson
		self.Lesson.belongsTo(self.Professor, {foreignKey: 'professorid'});
		self.Lesson.hasMany(self.StudentLesson, {foreignKey: 'lessonid'});
		self.Lesson.hasMany(self.Notification, {foreignKey: 'lessonid'});
		
		
		//StudentLesson
		self.StudentLesson.belongsTo(self.Lesson, {foreignKey: 'lessonid'});
		self.StudentLesson.belongsTo(self.Student, {foreignKey: 'studentid'});	

		//Notification
		self.Notification.belongsTo(self.User, {foreignKey: 'userid'});
		self.Notification.belongsTo(self.Lesson, {foreignKey: 'lessonid'});

		if(testData) self._createTestData(connection);
	},
	
	_setUserModel: function (model) {
		self.User = model;
		if(log) console.log('\x1b[32m', "[MODELS] USER: Table ready.",'\x1b[0m');
	},
	
	_setLessonModel: function (model) {
		self.Lesson = model;
		if(log) console.log('\x1b[32m', "[MODELS] LESSON: Table ready.",'\x1b[0m');
	},
	
	_setStudentModel: function (model) {
		self.Student = model;
		if(log) console.log('\x1b[32m', "[MODELS] STUDENT: Table ready.",'\x1b[0m');
	},
	
	_setProfessorModel: function (model) {
		self.Professor = model;
		if(log) console.log('\x1b[32m', "[MODELS] PROFESSOR: Table ready.",'\x1b[0m');
	},

		
	_setStudentLessonModel: function (model) {
		self.StudentLesson = model;
		if(log) console.log('\x1b[32m', "[MODELS] STUDENTLESSON: Table ready.", '\x1b[0m');
	},
	
	_setReviewModel: function (model) {
		self.Review = model;
		if(log) console.log('\x1b[32m', "[MODELS] REVIEW: Table ready.",'\x1b[0m');		
	},

	_setNotificationModel: function (model) {
		self.Notification = model;
		if(log) console.log('\x1b[32m', "[MODELS] NOTIFICATION: Table ready." ,'\x1b[0m');
	},

	_setSubjectsModel: function (model) {
		self.Subject = model;
		if(log) console.log('\x1b[32m', "[MODELS] SUBJECT: Table ready." ,'\x1b[0m');
	},

	_setSubjectsProfessorModel: function (model) {
		self.SubjectProfessor = model;
		if(log) console.log('\x1b[32m', "[MODELS] SUBJECTPROFESSOR: Table ready." ,'\x1b[0m');
	},






/*---------------------TEST DATA------------------------------------*/
	_createTestData: function(conn) {		
		const forc = true; //IMPORTANT: CHANGE TO FALSE BEFORE GOING INTO PROD.
		conn.sync({force: forc}).then(function () {
            self.Professor.create({
                userid: 1,
                cuil: 20123456789,
                individualPrice:100,
                groupPrice: 200
            }).then(function (professor) {
                if(log) console.log('\x1b[32m', "[GENERAL] TEST DATA: Created Professor. ID: " + professor.id, '\x1b[0m');
            });
			if(log) console.log('\x1b[32m', "[DB] MODELS: Tables dropped and recreated.",'\x1b[0m');
        });
	}
};

module.exports = self;