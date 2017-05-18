//GET
function _getAllStudentLessons(filters) {
    //parseFilters
    $.ajax({url: "/studentLessons", success: function(result){
        _parseGetAllStudentLessonsData(result);
    }});
}

function _getByStudentLessonID(studentLessonID) {

}

//POST
function _createStudentLesson(studentLessonData) {

}

//PUT
function _updateStudentLesson(studentLessonData) {

}

//DELETE
function _deleteStudentLesson(studentLessonID) {

}

