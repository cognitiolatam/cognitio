//GET
function _getAllStudents(filters) {
    //parseFilters
    $.ajax({url: "/students", success: function(result){
        _parseGetAllStudentsData(result);
    }});
}

function _getByStudentID(studentID) {

}

//POST
function _createStudent(studentData) {

}

//PUT
function _updateStudent(studentData) {

}

//DELETE
function _deleteStudent(studentID) {

}

