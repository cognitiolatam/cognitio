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
				values: ['Exactas','Sociales','Naturales','Artísticas','Diseño','Informáticas','Tecnológicas']
			},
			numberOfhits: {
				type: Sequelize.INTEGER
			}
		});

		db._setSubjectsModel(Subject);
	}
};

module.exports = self;