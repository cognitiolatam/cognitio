function _parseGetAllProfessorsData(resp) {
//    Models.professors = resp;
//    for (i = 0; i < Models.professors.length; i++) {
//     console.log("Professors callback.");
//     for (i = 0; i < resp.length; i++) {
//         _drawProfessorOverview(resp[i]);
//     }
}


// function _drawProfessorOverview(professor) {
//     var idProfessor = "professor-" + professor.id;
//     var i = 0;
//     var parentDiv = $("#professorsList>.grid");
//
//     var divElementItem = $(document.createElement('div')).addClass("prof element-item");
//     var aItem = $(document.createElement('a')).attr("href","profesor.html");
//     var divCardItem = $(document.createElement('div')).addClass("thumbnail card clearfix shadow");
//     var userPhoto = $(document.createElement('img')).addClass("img-circle img").attr("src","http://lorempixel.com/100/100/");
//     var divCaption  = $(document.createElement('div')).addClass("caption");
//     var h3Item = $(document.createElement('h3')).addClass("nombre name").text(professor.user.firstname + ' ' + professor.user.lastname);
//     var subject = $(document.createElement('div')).addClass("materia").text('MATEria'/*_getSubjectNameByID(professor.subjectsprofessors[0].id)*/);
//     var divUprItem = $(document.createElement('div')).addClass("ub-pr");
//     var ubicacionItem = $(document.createElement('div')).addClass("ubicacion").text("DIRECcion");
//     var scheduleItem = $(document.createElement('div')).addClass("ubicacion hidden-xs").text("HORArios");
//     var priceDiv = $(document.createElement('div')).addClass("precio precio-u number").text("125");
//     var priceSmall = $(document.createElement('small')).text("individual");
//     var priceDiv2 = $(document.createElement('div')).addClass("precio precio-d number").text("250");
//     var priceSmall2 = $(document.createElement('small')).text("individual");
//     var overviewStarsHTML = ''; /*_drawStarsHtml(5 review);*/
//
//     priceDiv.append(priceSmall);
//     divUprItem.append(ubicacionItem);
//     divUprItem.append(scheduleItem);
//     divUprItem.append(priceDiv);
//     priceDiv2.append(priceSmall2);
//     divCaption.append(h3Item);
//     divCaption.append(subject);
//     divCaption.append(divUprItem);
//     divCaption.append(overviewStarsHTML);
//     divCaption.append(priceDiv2);
//     divCardItem.append(userPhoto);
//     divCardItem.append(divCaption);
//     aItem.append(divCardItem);
//     divElementItem.append(aItem);
//     parentDiv.append(divElementItem);
//
// }


function _parseGetProfessorByID(result){
    console.log("Professor/:id callback.");
    _drawProfessorDetails(result);
}

function _drawProfessorDetails(professor) {

}
