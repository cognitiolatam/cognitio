var db =  async = null, log = false;
var self = {
	_setupControllers: function (database, ayc, logg) {
		db = database;
		async =  ayc;
		log = log;
	},
	
    _getOrCreateUser: function(FBID, cb) {
        var callback = function(result) {
            if(result.rowCount == 0)
                db._createUser(FBID);
            else
                cb(JSON.stringify(result.rows[0]));
        };
        db._getUserByFBID(FBID, callback);
	},
	
	_getClasses: function(cb) {
		async.parallel([
			function(callback) {
				db._getAllClasses(callback);
			},
			function(callback) {
				db._getAllStudents(callback);
			}
		],
		function(err, results) {
			if(log) console.log("Last callback finished: ", results);
		});
	},
};

module.exports = self;