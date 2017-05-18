//GET
function _getAllUsers(filters) {
    //parseFilters
    $.ajax({url: "/users", success: function(result){
        _parseGetAllUsersData(result);
    }});
}

function _getByUserID(userID) {

}

//POST
function _createUser(userData) {

}

//PUT
function _updateUser(userData) {

}

//DELETE
function _deleteUser(userID) {

}

