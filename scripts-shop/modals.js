





$(document).ready(function() {

    // $('#modal-podacha').click(function() {
        // $('.modal').fadeOut(0);
        // $('.modal-podacha').fadeIn(300);
    // });
    $('.control-shop-button').click(function() {
        var modal_id = ($(this).attr('id'));
        // $('.modal').fadeOut(0);
        var window = '.' + modal_id;
        // console.log(window);
        $(window).fadeIn(300);
    });
    
});