//GET
function _getAllLessons(filters) {
    //parseFilters
    var params = "";
    params += "" == filters.place? "" : "place="+filters.place;
    params += "" == filters.subject? "": "&subject="+filters.subject;
    $.ajax({url: "/lessons?"+params, success: function(result){
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

