//GET
function _getAllSubjects() {
    $.ajax({url: "/subjects", success: function(result){
        _parseGetAllSubjectsData(result);
    }});
}
