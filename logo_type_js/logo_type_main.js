$(function() {

$('.slider__inner, .news__slider-blc').slick({
    nextArrow: '<button type="button" class="slick-btn  slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false,
    autoplay: true,
});

$('select').styler();

$('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
});

new WOW().init();


////form ajax post 

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");


        $('form').trigger('reset');
    });
    return false;
});


});

