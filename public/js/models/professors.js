//GET
function _getAllProfessors(filters) {
	//parseFilters
    $.ajax({url: "/professors", success: function(result){
        _parseGetAllProfessorsData(result);
    }});
}

function _getByProfessorID(professorID) {

}
	
function _getAllLessonsByProfessor(professorID) {

}


//POST
function _createProfessor(professorData) {
	
}

//PUT	
function _updateProfessor(professorData) {
	
}

//DELETE
function _deleteProfessor(professorID) {
	
}

