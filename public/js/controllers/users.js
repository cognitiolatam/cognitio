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

function _parseLoginUserData(result) {
    if(result.ERROR_CODE === undefined) {
        console.log("Login result: ", result);
        location.href = 'profile.html?userid=' + result.id;
    } else {
        if(result.ERROR_CODE === 9998) {
            $(".no-email-error").removeClass('hidden');
        } else if(result.ERROR_CODE === 9999) {
            $(".pass-error-invalid").removeClass('hidden');
        }
    }
}


function _parseGetUser(result) {
    console.log("User retrieved: ", result);
    Models = {};
    Models.user = result;
    $("#nombre").val(result.firstname);
    $("#apellido").val(result.lastname);
    $("#email").val(result.email);
    $("#dni").val(result.dni);
    $("#fec-nac").val(result.birthDate);
    $("#direc").val(result.address);
}
