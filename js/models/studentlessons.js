var self = {
	_init: function(connection, Sequelize, db) {
		var StudentLesson = connection.define('studentlesson', {
			studentid: {
				type: Sequelize.INTEGER
			},
			lessonid: {
				type: Sequelize.INTEGER
			}
		});
			
		db._setStudentLessonModel(StudentLesson);		
	}
};

module.exports = self;