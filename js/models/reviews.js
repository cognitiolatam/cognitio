var Review;
var self = {
	_init: function(connection, Sequelize, db) {
		Review = connection.define('review', {
			userid: {
				type: Sequelize.INTEGER
			},
			professorid: {
				type: Sequelize.INTEGER
			},
			studentid: {
				type: Sequelize.INTEGER
			},
			type: {
				type: Sequelize.ENUM,
				values: ['professor','student']
			}
		});

		db._setReviewModel(Review);
	},
};

module.exports = self;