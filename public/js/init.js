$(document).ready(function() {

    /**init functions**/
    headerSize();
    adminContent();
    smoothScroll();

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

    $( '.modal-ingresar' ).on( 'click', function(e) {
        e.preventDefault();
        var modal_add_content = bootbox.dialog({
            message: "<form><div class='form-group'><label>Email</label><input type='email' class='form-control'></div><div class='form-group'><label>Password</label><input type='password' class='form-control'></div></form>",
            buttons: {
                ok: {
                    label: 'Ingresar',
                    className: 'btn-enviar',
                    callback: function(e) {
                        window.location="admin-profesor.html";
                    }
                }
            }
        });
        modal_add_content.addClass("modal-add");
    });

    function smoothScroll(){
        $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 70
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    }

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
