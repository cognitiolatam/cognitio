//GET
function _getAllProfessors(filters) {
	//parseFilters
    console.log(filters);
    $.ajax({url: "/profesores.html?", success: function(result){
        _parseGetAllProfessorsData(result);
    }});
}

function _getProfessorByID(filters) {
    console.log(filters.id);
    //parseFilters
    $.ajax({url: "/professors/"+filters.id, success: function(result){
        _parseGetProfessorByID(result);
    }});
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

