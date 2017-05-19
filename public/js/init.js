/**
 * Created by xyclonuser on 19/05/17.
 */
$(document).ready(function() {

    $("#owl-demo").owlCarousel({
        navigation: true,
        navigationText: [
            "<span class='glyphicon glyphicon-chevron-left'></span>",
            "<span class='glyphicon glyphicon-chevron-right'></span>"
        ]
    });

    $( '#modal-ingresar' ).on( 'click', function(e) {
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

});
