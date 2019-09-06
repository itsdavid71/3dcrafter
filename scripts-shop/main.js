function order_button() {
    $('.popup-order').fadeIn(300);
}

function burger() {
    $('.header_menu_mob').slideToggle(300);
}
$(document).ready(function() {

    $('.tech-spec-shop-button').click(function() {
        $('.modal').fadeIn(300);
    });

    $('.close-modal').click(function() {
        $('.modal').fadeOut(300);
    });

    $('.close-popup').click(function() {
        $('.popup').fadeOut(300);
    });

    $('input, textarea').blur(function() {                   
        if( $(this).val() ) {                  
            $(this).css('background', '#e9e9e9');
        } else if (!$(this).val()) {
            $(this).css('background', '#fff');
        }
    });
    $('.shop-input').blur(function() {                   
        if( $(this).val() ) {                  
            $(this).css('background', '#fff');
        } else if (!$(this).val()) {
            $(this).css('background', '#fff');
        }
    });


    $('.slider-main-logos-image').click(function() {
        $('.slider-main-logos-image').removeClass('fillBlue');
        $(this).addClass('fillBlue');
    });
    $('.slider-main-logos-image-1').click(function() {
        $('.slidem').fadeOut(0);
        $('.slidem1').fadeIn(300);
    });
    
    $('.slider-main-logos-image-2').click(function() {
        $('.slidem').fadeOut(0);
        $('.slidem2').fadeIn(300);
    });
    $('.slider-main-logos-image-3').click(function() {
        $('.slidem').fadeOut(0);
        $('.slidem3').fadeIn(300);
    });
    $('.slider-main-logos-image-4').click(function() {
        $('.slidem').fadeOut(0);
        $('.slidem4').fadeIn(300);
    });
    
//     // mobile
    $('.slider-main-logos-image-mob-1').click(function() {
        $('.slidem').fadeOut(0);
        $('.slidem1-mob').fadeIn(300);
    });
    $('.slider-main-logos-image-mob-2').click(function() {
        $('.slidem').fadeOut(0);
        $('.slidem2-mob').fadeIn(300);
    });
    $('.slider-main-logos-image-mob-3').click(function() {
        $('.slidem').fadeOut(0);
        $('.slidem3-mob').fadeIn(300);
    });
    $('.slider-main-logos-image-mob-4').click(function() {
        $('.slidem').fadeOut(0);
        $('.slidem4-mob').fadeIn(300);
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.image-link').magnificPopup({type:'image'});
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Загрузка изображения #%curr%...',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
        });
});

jQuery(function($){
    $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        var block = $(".order-popup-block"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
            && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            $('.popup,modal').fadeOut(300); // если условия выполняются - скрываем наш элемент
        }
    });
});

jQuery(function($){
    $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        var block = $(".desc-modal-block"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
            && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            $('.modal').fadeOut(300); // если условия выполняются - скрываем наш элемент
        }
    });
});


