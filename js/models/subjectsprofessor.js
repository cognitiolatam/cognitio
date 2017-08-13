var self = {
	_init: function(connection, Sequelize, db) {
		var SubjectsProfessor = connection.define('subjectsprofessor', {
			professorid: {
				type: Sequelize.INTEGER
			},
			subjectid: {
				type: Sequelize.INTEGER
			},
            description: {
			    type: Sequelize.STRING
            }
		});

		db._setSubjectsProfessorModel(SubjectsProfessor);
	}
};

module.exports = self;