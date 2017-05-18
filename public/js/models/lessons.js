//GET
function _getAllLessons(filters) {
    //parseFilters
    $.ajax({url: "/lessons", success: function(result){
        _parseGetAllLessonsData(result);
    }});
}

function _getByLessonID(lessonID) {

}

//POST
function _createLesson(lessonData) {

}

//PUT
function _updateLesson(lessonData) {

}

//DELETE
function _deleteLesson(lessonID) {

}

