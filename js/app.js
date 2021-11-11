$(document).ready(function(){
    // filter menu function
    $(".navbar .navbar-toggler").on("click", function(event) {
        if($('body').hasClass("active")) {
            $('body').removeClass("active");
        } else {
            $('body').addClass("active");
        }
        event.preventDefault();
    });
});
// nicescroll
$(".navbar .navbar-collapse").niceScroll({
    cursorcolor: 'rgba(152, 166, 173, 0.5)',
    cursorwidth: '6px',
    cursorborderradius: '0px'
});
