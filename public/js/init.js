$(document).ready(function() {

    $("#owl-demo").owlCarousel({
        navigation: true,
        navigationText: [
            "<span class='glyphicon glyphicon-chevron-left'></span>",
            "<span class='glyphicon glyphicon-chevron-right'></span>"
        ]
    });

    $( window ).scroll(function() {
        var height = $(window).scrollTop();

        if(height  > 80) {
            $("body").removeClass( "menu-transparent" );
            $(".logo-b-img").hide();
        }else{
            $("body").addClass( "menu-transparent" );
            $(".logo-b-img").show();
        }
    });

    $('#settings-content').hide();
    $('#calendar-content').show();

    $('#calendario').click(function(e){
        e.preventDefault();
        $('#settings-content').hide();
        $('#calendar-content').show();
    })

    $('#settings').click(function(e){
        e.preventDefault();
        $('#settings-content').show();
        $('#calendar-content').hide();
    })

});
