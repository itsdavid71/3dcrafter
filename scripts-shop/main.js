function order_button() {
    $('.popup-order').fadeIn(300);
}

$(document).ready(function() {
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
});

jQuery(function($){
    $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        var block = $(".order-popup-block"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
            && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            $('.popup').fadeOut(300); // если условия выполняются - скрываем наш элемент
        }
    });
});
