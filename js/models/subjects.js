var self = {
	_init: function(connection, Sequelize, db) {
		var Subject = connection.define('subject', {
			name: {
				type: Sequelize.STRING
			},
			description: {
				type: Sequelize.STRING
			},
			type: {
				type: Sequelize.ENUM,
				values: ['Exactas','Lenguajes','Sociales','Naturales','Artisticas','Diseño','Informaticas','Tecnologicas','Ciencia']
			},
			numberOfhits: {
				type: Sequelize.INTEGER
			}
		});

		db._setSubjectsModel(Subject);
	}
};

module.exports = self;