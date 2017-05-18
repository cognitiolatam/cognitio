/*--------------------Initial Setup----------------------------------------*/
/*-------------------------------------------------------------------------*/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./js/db');
const pg = require('pg');
const controllers = require('./js/controllers');
const async = require('async');
const seq = require('sequelize');
/*Enable or disable Log entries*/
const log = true;
const testData = true;


/*--------------------AppServer setup--------------------------------------*/
/*-------------------------------------------------------------------------*/
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public')); /*---static root---*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
  if(log) console.log('Log ENABLED.'); else console.log('Log DISABLED.');
});

/*--------------------Controllers and DB setup-----------------------------*/
/*-------------------------------------------------------------------------*/
db._setupDB(pg, seq, log, testData);
controllers._setupControllers(db, async, log);





/*-------------------------------------------------------------------------*/
/*--------------------API--------------------------------------------------*/
/*-------------------------------------------------------------------------*/
app.use(function(req, res, next){
	if(log) console.log('[GENERAL] General stuff before execute the response here..');
	next();
});


/*--------------------Root-------------------------------------------------*/
/*-------------------------------------------------------------------------*/
app.get('/', function(request, response) {
	if(log) console.log('[GENERAL] Request main page...');
	response.redirect('/index.html');
});



/*--------------------USERS------------------------------------------------*/
/*-------------------------------------------------------------------------*/
// /Users
//	GET:	List and searches all users. Parameters: ?q= (query, free-text search). NOT NECESSARY YET;
//	POST:	Create a new user and saves it. Parameters: ?FBID= (Facebook ID);
app.route('/users')
	.all(function(req,res,next) {if(log) console.log('[AUTH] Authentication Middleware. Users list request.'); next();})
	.get(function(request, response, next) {
		if(log) console.log('[REQUEST] /users GET (All).');
		controllers.User._getAll(response);
	})
	.post(function(request, response, next) {
		if(log) console.log("[REQUEST] /users POST. New ID: ", request.body.id);
		controllers.User._create(request.body, response);
	});

// /Users/:id
//	GET:	Retrieves information about an specific users. Parameters: ?FBID=;
//	PUT:	Update information of an specific user.
//	DELETE: Delete user.
app.route('/users/:id')
	.all(function(req,res,next) {if(log) console.log('[AUTH] Authentication Middleware. User ID request.'); next();})
	.get(function(request, response, next) {
		if(log) console.log("[REQUEST] /users/:id GET. ID: " + request.params.id);
		controllers.User._getByID(request.params.id, response);
	})
	.put(function(request, response, next) {
		if(log) console.log("[REQUEST] /users/:id PUT. ID: " + request.params.id);
		controllers.User._updateByID(request.body, response);
	})
	.delete(function(request, response, next) {
		if(log) console.log("[REQUEST] /users/:id DELETE. ID: " + request.params.id);
		controllers.User._deleteByID(request.params.id, response);
	});

	

/*--------------------PROFESSORS-------------------------------------------*/
/*-------------------------------------------------------------------------*/
// /Professors
//	GET:	List and searches all professors. Parameters: ?q= (query, free-text search). NOT NECESSARY YET;
//	POST:	Create a new professor and saves it.
app.route('/professors')
	.all(function(req,res,next) {if(log) console.log('[AUTH] Authentication Middleware. Professors list request.'); next();})
	.get(function(request, response, next) {
		if(log) console.log('[REQUEST] /professors GET (All).');
		controllers.Professor._getAll(response);
	})
	.post(function(request, response, next) {
		if(log) console.log("[REQUEST] /professors POST. User ID: ", request.body.userid);
		controllers.Professor._create(request.body, response);
	});

// /Professors/:id
//	GET:	Retrieves information about an specific professor. Parameters: ?professorid=;
//	PUT:	Update information of an specific professor.
app.route('/professors/:id')
	.all(function(req,res,next) {if(log) console.log('[AUTH] Authentication Middleware. Professor ID request.'); next();})
	.get(function(request, response, next) {
		if(log) console.log("[REQUEST] /professors/:id GET. ID: " + request.params.id);
		controllers.Professor._getByID(request.params.id, response);
	})
	.put(function(request, response, next) {
		if(log) console.log("[REQUEST] /professors/:id PUT. ID: " + request.body.professorid);
		controllers.Professor._updateByID(request.body, response);
	});	

// /Professors/:id/lessons
//	GET:	Retrieves all the lessons created by an specific professor. Parameters: ?professorid=;
app.route('/professors/:id/lessons')
	.all(function(req,res,next) {if(log) console.log('[AUTH] Authentication Middleware. Lessons created by a professor request.'); next();})
	.get(function(request, response, next) {
		if(log) console.log("[REQUEST] /professor/:id/lessons GET. ID: " + request.params.id);
		controllers.Professor._getAllLessonsByID(request.params.id, response);
	});

	
	
/*--------------------LESSONS----------------------------------------------*/
/*-------------------------------------------------------------------------*/
// /Lessons
//	GET:	List and searches all lessons. Parameters: ?direction={from,to} (List of lessons);
//	POST:	Create a new lesson and saves it. Parameters: ?FBID= ();
app.route('/lessons')
	.all(function(req,res,next) {if(log) console.log('[AUTH] Authentication Middleware. Lessons request.'); next();})
	.get(function(request, response, next) {
		if(log) console.log("[REQUEST] /lessons GET. Query: " + request.params.q);
		controllers.Lesson._getAll(response);
	})
	.post(function(request, response, next) {
		if(log) console.log("[REQUEST] /lessons POST. Professor ID: " + request.body.professorid);
		controllers.Lesson._create(request.body, response);
	});

// /Lessons/:id
//	GET:	Retrieves information about an specific lesson. Parameters: ?lessonID=;
//	PUT:	Update information of an specific lesson. Parameters: lesson object;
app.route('/lessons/:id')
	.all(function(req,res,next) {if(log) console.log('[AUTH] Authentication Middleware. Lesson ID request.'); next();})
	.get(function(request, response, next) {
		if(log) console.log("[REQUEST] /lessons/:id GET. ID: " + request.params.id);
		controllers.Lesson._getByID(request.params.id, response);
	})
	.put(function(request, response, next) {
		if(log) console.log("[REQUEST] /lessons/:id PUT. ID: " + request.body.lessonid);
		controllers.Lesson._updateByID(request.body, response);
	});	

// /Lessons/:id/students
//	GET:	Retrieves all the students related to an specific lesson. Parameters: lessonID; 
app.route('/lessons/:id/students')
	.all(function(req,res,next) {if(log) console.log('[AUTH] Authentication Middleware. Lessons request.'); next();})
	.get(function(request, response, next) {
		if(log) console.log("[REQUEST] /lessons/:id/students GET.");
		controllers.Lesson._getAllStudentsByID(request.params.id, response);
	});
	
	
/*--------------------STUDENTS---------------------------------------------*/
/*-------------------------------------------------------------------------*/
// /Students
//	GET:	List and searches all students. Parameters: (List of students. Filter by direction );
//	POST:	Create a new student and saves it. Parameters:
app.route('/students')
	.all(function(req,res,next) {if(log) console.log('[AUTH] Authentication Middleware. Students list request.'); next();})
	.get(function(request, response, next) {
		if(log) console.log("[REQUEST] /students GET. Query: " + request.params.q);
		controllers.Student._getAll(response);
	})
	.post(function(request, response, next) {
		if(log) console.log("[REQUEST] /students POST. Students (User) ID: " + request.body.userid);
		controllers.Student._create(request.body, response);
	});

// /Students/:id
//	GET:	Retrieves information about an specific professor. Parameters: ?professorid=;
//	PUT:	Update information of an specific professor.
app.route('/students/:id')
	.all(function(req,res,next) {if(log) console.log('[AUTH] Authentication Middleware. Students ID request.'); next();})
	.get(function(request, response, next) {
		if(log) console.log("[REQUEST] /students/:id GET. ID: " + request.params.id);
		controllers.Student._getByID(request.params.id, response);
	})
	.put(function(request, response, next) {
		if(log) console.log("[REQUEST] /students/:id PUT. ID: " + request.body.studentid);
		controllers.Student._updateByID(request.body, response);
	});	

// /Students/:id/lessons
//	GET:	Retrieves all the lessons of an specific student. Parameters: ?studentid=;
app.route('/students/:id/lessons')
	.all(function(req,res,next) {if(log) console.log('[AUTH] Authentication Middleware. Lessons of an student request.'); next();})
	.get(function(request, response, next) {
		if(log) console.log("[REQUEST] /students/:id/lessons GET. ID: " + request.params.id);
		controllers.Student._getAllLessonsByID(request.params.id, response);
	});
	
	
	
/*-------------------------------------------------------------------------*/
/*--------------------NOTIFICATIONS----------------------------------------*/	
/*-------------------------------------------------------------------------*/
// /Notifications
//	GET:	List and searches all notifications. Parameters: ?q= (query, free-text search)
//	POST:	Create a new notification and saves it.
app.route('/notifications')
    .all(function(req,res,next) {if(log) console.log('[AUTH] Authentication Middleware. Notification request.'); next();})
    .get(function(request, response, next) {
        if(log) console.log('[REQUEST] /notifications GET (All).');
        controllers.Notification._getAll(response);
    })
    .post(function(request, response, next) {
        if(log) console.log("[REQUEST] /notifications POST. New ID: ", request.body.id);
        controllers.Notification._create(request.body, response);
    });

// /Notifications/:id
//	GET:	Retrieves information about an specific notification.
//	PUT:	Update information of an specific notification.
//	DELETE: Delete notification.
app.route('/notifications/:id')
    .all(function(req,res,next) {if(log) console.log('[AUTH] Authentication Middleware. Notification ID request.'); next();})
    .get(function(request, response, next) {
        if(log) console.log("[REQUEST] /notifications/:id GET. ID: " + request.params.id);
        controllers.Notification._getByID(request.params.id, response);
    })
    .put(function(request, response, next) {
        if(log) console.log("[REQUEST] /notifications/:id PUT. ID: " + request.params.id);
        controllers.Notification._updateByID(request.body, response);
    })
    .delete(function(request, response, next) {
        if(log) console.log("[REQUEST] /notifications/:id DELETE. ID: " + request.params.id);
        controllers.Notification._deleteByID(request.params.id, response);
    });

/*-------------------------------------------------------------------------*/
/*--------------------REVIEWS----------------------------------------------*/
/*-------------------------------------------------------------------------*/
// /Reviews
//	GET:	List and searches all reviews.
//	POST:	Create a new review and saves it.
app.route('/reviews')
    .all(function(req,res,next) {if(log) console.log('[AUTH] Authentication Middleware. Reviews list request.'); next();})
    .get(function(request, response, next) {
        if(log) console.log('[REQUEST] /reviews GET (All).');
        controllers.Review._getAll(response);
    })
    .post(function(request, response, next) {
        if(log) console.log("[REQUEST] /reviews POST. New ID: ", request.body.id);
        controllers.Review._create(request.body, response);
    });

// /Reviews/:id
//	GET:	Retrieves information about an specific review.
//	PUT:	Update information of an specific review.
//	DELETE: Delete review.
app.route('/reviews/:id')
    .all(function(req,res,next) {if(log) console.log('[AUTH] Authentication Middleware. Review ID request.'); next();})
    .get(function(request, response, next) {
        if(log) console.log("[REQUEST] /reviews/:id GET. ID: " + request.params.id);
        controllers.Review._getByID(request.params.id, response);
    })
    .put(function(request, response, next) {
        if(log) console.log("[REQUEST] /reviews/:id PUT. ID: " + request.params.id);
        controllers.Review._updateByID(request.body, response);
    })
    .delete(function(request, response, next) {
        if(log) console.log("[REQUEST] /reviews/:id DELETE. ID: " + request.params.id);
        controllers.Review._deleteByID(request.params.id, response);
    });