var models = null;
var cb = null;
var self = {
	_init: function(DB, cbCtrl) {
		models = DB;
		cb = cbCtrl
	},
	
	_getByID: function(subjectID, resp) {
		console.log('[CONTROLLERS] SUBJECT _getByID:' + subjectID);

        models.Subject.findOne({
            include: [models.Professor],
            where: { id: subjectID }
        }).then(function (subject) {
			if(subject) {
				cb(resp, JSON.stringify(subject.dataValues));
			} else {
				//Lesson not created.
				cb(resp, '{"ERROR_CODE": 132,"Description": "Subject not found. Create subject to proceed."}');
			}
		});
	},

	_getAllSubjects: function(resp) {
		console.log('[CONTROLLERS] SUBJECT _getAllSubjects.');

		models.Subject.findAll({
            include: [models.Professor]
            //Filter travels by deleted and by date
        }).then(function (subject) {
			cb(resp, JSON.stringify(subject));
		});
	}
};

module.exports = self;