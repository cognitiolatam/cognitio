var self = {
	_init: function(connection, Sequelize, db) {
		var Professor = connection.define('professor', {
			userid: {
				type: Sequelize.INTEGER
			},
			cuil: {
				type: Sequelize.BIGINT,
				unique: true,
				validate: {
					isNumeric: true,
					min: 1
				}
			},
			individualPrice: {
				type: Sequelize.FLOAT
			},
			groupPrice: {
				type: Sequelize.FLOAT
			},
			state: {
				type: Sequelize.ENUM,
				values: ['accepted','pending','declined']
			},
			rate: {
				type: Sequelize.FLOAT
			},
			intelligence: {
				type: Sequelize.FLOAT
			},
			reasoning: {
				type: Sequelize.FLOAT
			},
			explicitness: {
				type: Sequelize.FLOAT
			},
			resolution: {
				type: Sequelize.FLOAT
			},
			attention: {
				type: Sequelize.FLOAT
			},
			dedication: {
				type: Sequelize.FLOAT
			},
			charisma: {
				type: Sequelize.FLOAT
			},
			empathy: {
				type: Sequelize.FLOAT
			},
			cordiality: {
				type: Sequelize.FLOAT
			},
			reliance: {
				type: Sequelize.FLOAT
			}
		});

		db._setProfessorModel(Professor);		
	}
};

module.exports = self;