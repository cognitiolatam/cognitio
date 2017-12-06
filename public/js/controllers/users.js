function _parseGetAllUsersData(resp) {
    Models.users = resp;
    for (i = 0; i < Models.users.length; i++) {
        //...
    }
}

function _parseCreateUserData(result) {
    console.log("User created: ", result);
}

