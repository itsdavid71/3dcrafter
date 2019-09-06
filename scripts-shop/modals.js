





$(document).ready(function() {

    $('.control-shop-button').click(function() {
        var modal_id = ($(this).attr('id'));
        var window = '.' + modal_id;
        $(window).fadeIn(300);
    });
    
});