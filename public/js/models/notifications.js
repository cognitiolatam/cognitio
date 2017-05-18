//GET
function _getAllNotifications(filters) {
    //parseFilters
    $.ajax({url: "/notifications", success: function(result){
        _parseGetAllNotificationsData(result);
    }});
}

function _getByNotificationID(notificationID) {

}

//POST
function _createNotification(notificationData) {

}

//PUT
function _updateNotification(notificationData) {

}

//DELETE
function _deleteNotification(notificationID) {

}

