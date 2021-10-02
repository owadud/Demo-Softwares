$(document).ready(function(){
    $('.top-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
})

$(document).ready(function(){
    $(".director-info").mouseover(function(){
        $(this).css("background-color", "#FFFFFF");
        $(this).find("h2").css("color", "#000000");
        $(this).find("h3").css("color", "#605F5F");

    });

    $(".director-info").mouseleave(function(){
        $(this).css("background-color", "#056C7E");
        $(this).find("h2").css("color", "#FFFFFF");
        $(this).find("h3").css("color", "#E5E5E5");

    });
})
$(document).ready(function(){
    $('.testimonial-slider').slick({
        dots:true,
        arrows: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll:1,
        adaptiveHeight: true,

    });
})

$(document).ready(function(){
    $('.advisor').slick({
        dots:false,
        arrows: true,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll:1,
        adaptiveHeight: true,

    });
})


/*$(function() {
    var header = $(".header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            header.removeClass('header').addClass("header-alt");
        } else {
            header.removeClass("header-alt").addClass('header');
        }
    });
});*/

$(window).scroll(function() {
    $("body").removeClass("header-alt");
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $("body").addClass("header-alt");
    }
});







