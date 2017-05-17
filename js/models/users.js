var self = {
	_init: function(connection, Sequelize, db) {
		var User = connection.define('user', {
			firstname: {
				type: Sequelize.STRING
			},
			lastname: {
				type: Sequelize.STRING
			},
			address: {
				type: Sequelize.STRING
			},
			birthDate: {
				type: Sequelize.DATE
			},
			highSchoolStudies: {
				type: Sequelize.STRING
			},
			universitaryStudies: {
				type: Sequelize.STRING
			},
			dni: {
				type: Sequelize.INTEGER,
				unique: true,
				validate: {
					isNumeric: true,
					min: 1
				}
			},
			fbid: {
				type: Sequelize.BIGINT,
				unique: true,
				validate: {
					isNumeric: true,
					min: 1
				}
			},
			token: {
				type: Sequelize.STRING
			}
		});
		
		db._setUserModel(User);
	}
};

module.exports = self;