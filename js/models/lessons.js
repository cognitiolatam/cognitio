var self = {
	_init: function(connection, Sequelize, db) {
		var Lesson = connection.define('lesson', {
			professorid: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
		});
		db._setLessonModel(Lesson);
	}
};

module.exports = self;