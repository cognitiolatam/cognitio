//GET
function _getAllReviews(filters) {
    //parseFilters
    $.ajax({url: "/reviews", success: function(result){
        _parseGetAllReviewsData(result);
    }});
}

function _getByReviewID(eeviewsID) {

}

//POST
function _createReview(reviewsData) {

}

//PUT
function _updateReview(reviewsData) {

}

//DELETE
function _deleteReview(reviewsID) {

}

