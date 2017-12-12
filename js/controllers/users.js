var models = null;
var cb = null;
var self = {
	_init: function(DB, cbCtrl) {
		models = DB;
		cb = cbCtrl
	},

    _login: function(data, resp) {
        const username = data.username;
        const passwordmd5 = data.hs;

        console.log('[CONTROLLERS] USERS _login:' + username);

        models.User.findOne({
            where: { email: username }
        }).then(function (user) {
            if(user !== null) {
                if(user.passwordmd5 === data.hs) {
                    cb(resp, JSON.stringify(user.dataValues));
                } else {
                    cb(resp, '{"ERROR_CODE": 999,"Description": "Password invalid."}');
                }
            } else {
                cb(resp, '{"ERROR_CODE": 998,"Description": "User does not exist."}');
            }
        });
    },
	
	_getByFBID: function(facebookID, resp) {
		console.log('[CONTROLLERS] USERS _getByFBID:' + facebookID);
		
		if(isNaN(Number(facebookID)) || Number(facebookID) < -9223372036854775808 || Number(facebookID) > 9223372036854775807) {
			cb(resp, '{"ERROR_CODE": 901,"Description": "Invalid User ID."}');
			return;
		}

        models.User.findOne({
            where: { fbid: facebookID }
        }).then(function (user) {
			if(user) {
				cb(resp, JSON.stringify(user.dataValues));
			} else {
				//User not created.
				cb(resp, '{"ERROR_CODE": 902,"Description": "User not found. Create user to proceed."}');
			}
		});
	},

    _getByID: function(id, resp) {
        console.log('[CONTROLLERS] USERS _getByID:' + id);

        models.User.findOne({
            where: { id: id }
        }).then(function (user) {
            if(user) {
                cb(resp, JSON.stringify(user.dataValues));
            } else {
                //User not created.
                cb(resp, '{"ERROR_CODE": 903,"Description": "User not found. Create user to proceed."}');
            }
        });
    },

	
	_createUser: function(data, resp) {
		const facebookID = data.fbID || 0;
		const name = data.firstName;
		const surname = data.lastName;
		const email = data.email || "";
		const passwordmd5 = data.hs;

		console.log('[CONTROLLERS] USERS _createUser:' + facebookID + '. ' + email);
		/*
		if(isNaN(Number(facebookID)) || Number(facebookID) < -9223372036854775808 || Number(facebookID) > 9223372036854775807) {
			cb(resp, '{"ERROR_CODE": 1,"Description": "Invalid User ID."}');
			return;
		}
		*/
		models.User.create({
				firstname: name,
				lastname: surname,
				fbid: facebookID,
                email: email,
                passwordmd5: passwordmd5
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
				cb(resp, '{"ERROR_CODE": 904,"Description": "User list is empty. Create an user to proceed."}');
			}
		});
		

	}
};

module.exports = self;