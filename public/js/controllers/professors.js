function _parseGetAllProfessorsData(resp) {
    Models.professors = resp;
    for (i = 0; i < Models.professors.length; i++) {
        _drawProfessorOverview(Models.professors[i]);
    }
}


function _drawProfessorOverview(professor) {
    var idProfessor = "professor-" + professor.id;

    $("#professorsList").append('<div id="' + idProfessor + '"></div>');

    $("#"+idProfessor).append('<a href="profesor.html"><div class="thumbnail"><img src="http://lorempixel.com/100/100/" alt="..." class="img-circle"><div class="caption"><h3>' + professor.cuil + '</h3><p>$'+professor.individualPrice+'</p></div></div></a>');

   /* $('#'+idProfessor).load('professoroverview.html', function () {

    });*/
}