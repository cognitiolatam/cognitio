function _parseGetAllLessonsData(resp) {
//    Models.professors = resp;
//    for (i = 0; i < Models.professors.length; i++) {
    console.log("Lessons callback.", resp);
    for (i = 0; i < resp.length; i++) {
        console.log(resp[i]);
        _drawLessonsOverview(resp[i]);
    }
}

function _drawLessonsOverview(lesson) {
    var idLesson = "lesson-" + lesson.id;
    var i = 0;
    var parentDiv = $("#professorsList>.grid");

    var divElementItem = $(document.createElement('div')).addClass("prof element-item");
    var aItem = $(document.createElement('a')).attr("href","profesor.html");
    var divCardItem = $(document.createElement('div')).addClass("thumbnail card clearfix shadow");
    var userPhoto = $(document.createElement('img')).addClass("img-circle img").attr("src","http://lorempixel.com/100/100/");
    var divCaption  = $(document.createElement('div')).addClass("caption");
    var h3Item = $(document.createElement('h3')).addClass("nombre name").text(lesson.professor.cuil);
    var subject = $(document.createElement('div')).addClass("materia").text("Materia ID " + lesson.subjectid);
    var divUprItem = $(document.createElement('div')).addClass("ub-pr");
    var ubicacionItem = $(document.createElement('div')).addClass("ubicacion").text("Direccion "+lesson.address);
    var scheduleItem = $(document.createElement('div')).addClass("ubicacion hidden-xs").text("Horarios "+lesson.availability);
    var priceDiv = $(document.createElement('div')).addClass("precio precio-u number").text("Precio "+lesson.price);
    var priceSmall = $(document.createElement('small')).text("individual");
    var priceDiv2 = $(document.createElement('div')).addClass("precio precio-d number").text("250");
    var priceSmall2 = $(document.createElement('small')).text("individual");
    var overviewStarsHTML = '';
    //_drawStarsHtml(5 review);

    priceDiv.append(priceSmall);
    divUprItem.append(ubicacionItem);
    divUprItem.append(scheduleItem);
    divUprItem.append(priceDiv);
    priceDiv2.append(priceSmall2);
    divCaption.append(h3Item);
    divCaption.append(subject);
    divCaption.append(divUprItem);
    divCaption.append(overviewStarsHTML);
    divCaption.append(priceDiv2);
    divCardItem.append(userPhoto);
    divCardItem.append(divCaption);
    aItem.append(divCardItem);
    divElementItem.append(aItem);
    parentDiv.append(divElementItem);
}