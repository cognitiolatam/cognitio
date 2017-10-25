var self = {
	_init: function(connection, Sequelize, db) {
		var Lesson = connection.define('lesson', {
			professorid: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
			subjectid: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			price: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			description: {
				type: Sequelize.STRING,
				allowNull: false
			},
			address: {
				type: Sequelize.STRING,
				allowNull: false
			},
			availability: {
				type: Sequelize.STRING,
				allowNull: false
			}
		});
		db._setLessonModel(Lesson);
	}
};

module.exports = self;