var self = {
	_init: function(connection, Sequelize, db) {
		var Student = connection.define('student', {
			userid: {
				type: Sequelize.INTEGER
			},
			currentInstitution: {
				type: Sequelize.STRING
			},
			orientation: {
				type: Sequelize.STRING
			},
			orientation: {
				type: Sequelize.STRING
			},
			listofgrades: {
				type: Sequelize.STRING
			},
			currentgrade: {
				type: Sequelize.STRING
			},
			listofcurrentsubject: {
				type: Sequelize.STRING
			},
			rate: {
				type: Sequelize.FLOAT
			},
			reasoning: {
				type: Sequelize.FLOAT
			},
			responsibility: {
				type: Sequelize.FLOAT
			},
			attention: {
				type: Sequelize.FLOAT
			}
		});
		db._setStudentModel(Student);		
	}
};

module.exports = self;