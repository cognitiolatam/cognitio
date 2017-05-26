$(document).ready(function() {

    /**init functions**/
    headerSize();
    adminContent();

    $(window).resize(function() {
        headerSize();
      });

    function headerSize(){
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        if (windowWidth>=992){
            $( "#header" ).css({
                "height": "600px"
            });
        }else if (windowWidth>769 && windowWidth<992){
            $( "#header" ).css({
                "height": "500px"
            });

        }else if (windowWidth>600 && windowWidth<=768){
            $( "#header" ).css({
                "height": "480px"
            });

        }else if (windowWidth<=600){
            $( "#header" ).css({
                "height": "400px"
            });
        };
        var hslider =  $( "#header" ).css('height');
        $('.center').css('height', hslider);
    }

    $("#owl-demo").owlCarousel({
        navigation: true,
        navigationText: [
            "<span class='glyphicon glyphicon-chevron-left'></span>",
            "<span class='glyphicon glyphicon-chevron-right'></span>"
        ]
    });

    function adminContent(){
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
        });
    };

});
