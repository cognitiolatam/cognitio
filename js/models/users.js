var self = {
	_init: function(connection, Sequelize, db) {
		var User = connection.define('user', {
			firstname: {
				type: Sequelize.STRING,
                allowNull: false
            },
			lastname: {
				type: Sequelize.STRING,
                allowNull: false
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
			email: {
			    type: Sequelize.STRING
            },
			fbid: {
				type: Sequelize.BIGINT
			},
			token: {
				type: Sequelize.STRING
			},
			passwordmd5: {
                type: Sequelize.STRING
            }
		});
		
		db._setUserModel(User);
	}
};

module.exports = self;