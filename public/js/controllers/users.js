function _parseGetAllUsersData(resp) {
    Models.users = resp;
    for (i = 0; i < Models.users.length; i++) {
        //...
    }
}

function _parseCreateUserData(result) {
    console.log("User created: ", result);
    location.href = 'profile.html?userid=' + result.id;
}

function _parseGetUser(result) {
    console.log("User retrieved: ", result);
    $("#nombre").val(result.firstname);
    $("#apellido").val(result.lastname);
    $("#email").val(result.email);
    $("#dni").val(result.dni);
    $("#fec-nac").val(result.birthDate);
    $("#direc").val(result.address);
}
