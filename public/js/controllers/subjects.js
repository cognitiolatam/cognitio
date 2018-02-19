function _parseGetAllSubjectsData(resp) {
    Models.subjects = resp;
    _fillMultiselect(resp);
}

function _fillMultiselect(resp) {
    console.log(resp);
}