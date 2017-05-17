var models = null;
var cb = null;
var self = {
	_init: function(DB, cbCtrl) {
		models = DB;
		cb = cbCtrl
	},
	
	_getByFBID: function(facebookID, resp) {
		console.log('[CONTROLLERS] USERS _getByFBID:' + facebookID);
		
		if(isNaN(Number(facebookID)) || Number(facebookID) < -9223372036854775808 || Number(facebookID) > 9223372036854775807) {
			cb(resp, '{"ERROR_CODE": 1,"Description": "Invalid User ID."}');
			return;
		}

        models.User.findOne({
            where: { fbid: facebookID }
        }).then(function (user) {
			if(user) {
				cb(resp, JSON.stringify(user.dataValues));
			} else {
				//User not created.
				cb(resp, '{"ERROR_CODE": 2,"Description": "User not found. Create user to proceed."}');
			}
		});
	},
	
	_createUser: function(data, resp) {
		const facebookID = data.fbID;
		const name = data.firstName;
		const surname = data.lastName;
		
		console.log('[CONTROLLERS] USERS _createUser:' + facebookID);
		
		if(isNaN(Number(facebookID)) || Number(facebookID) < -9223372036854775808 || Number(facebookID) > 9223372036854775807) {
			cb(resp, '{"ERROR_CODE": 1,"Description": "Invalid User ID."}');
			return;
		}
		
		models.User.create({
				firstname: name,
				lastname: surname,
				fbid: facebookID,
                token: 'exampleToken'
		}).then(function (user) {
			cb(resp, JSON.stringify(user.dataValues));
		});
	},
	
	_getAllUsers: function(resp) {
		console.log('[CONTROLLERS] USERS _getAllUsers.');
		
		models.User.findAll().then(function (users) {		
			if(users.length > 0) {
				cb(resp, JSON.stringify(users));
			} else {
				//Any user created.
				cb(resp, '{"ERROR_CODE": 3,"Description": "User list is empty. Create an user to proceed."}');
			}
		});
		

	}
};

module.exports = self;