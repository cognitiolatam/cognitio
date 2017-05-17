var self = {
	_init: function(connection, Sequelize, db) {
		var Notification = connection.define('notification', {
			userid: {
				type: Sequelize.INTEGER
			},
			description: {
				type: Sequelize.STRING
			},
			type: {
				type: Sequelize.ENUM,
				values: ['1','2','3','4','5','6','7']
			},
			lessonid: {
				type: Sequelize.INTEGER
			},
			state: {
				type: Sequelize.ENUM,
				values: ['notified','pending','deleted']
			}			
		});

		db._setNotificationModel(Notification);
	}
};

module.exports = self;