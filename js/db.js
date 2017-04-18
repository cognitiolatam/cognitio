var client = null, log = false;
var self = {
	_setupDB: function (pg, logg) {
		pg.defaults.ssl = true;
		log = logg;
		var connectionString = "postgres://mysjqcspdayiot:10c408d1d6ca5a01833e1045f47704f473035b31f2928c0b29515a7d2f32a0a1@ec2-54-243-185-123.compute-1.amazonaws.com:5432/dcuu33hrl51ij9";
		if(log) console.log("Trying to connect to the DB...");
		pg.connect(connectionString, function(err, cli) {
			if (err) {
				if(log) console.log('Error trying to connect to DB...', err);
				throw err;
			} else {
				if(log) console.log('Connected to DB! Getting schemas...');
				client = cli;
			}
		});
	},

    /*create functions*/
    _createUser: function (FBID, cb) {
        query = "SELECT * FROM CreateUser('"+ FBID.toString() +"')";
        /*client.query(query, function(error, result){
            if(error)
                console.log(error);
            self._getUserByID(result.rows[0].createuser, cb)
        });*/
		console.log("EXECUTE QUERY: " + query);
    },

	/*get functions*/
    _getUserByFBID: function (FBID, cb) {
		var query = "SELECT * FROM GetUserByFBID('" + FBID.toString() +"')";
		/*client.query(query, function(error, result){
            if(error)
                console.log(error);
            if(0 == result.rowCount)
                self._createUser(FBID, cb);
            else
                cb(result);
		});*/
		console.log("EXECUTE QUERY: " + query);
	},
};

module.exports = self;