$(document).ready(function(){
    $(".menu-opener").click(function(){
    $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
    });
    $('.slider').slick({
      dots: false,
      arrows:true,
      initialSlide: 1,
    //   autoplay: true,
    //   autoplaySpeed: 3000,
    });

    $('.slider-two').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    dots: false,
    centerMode: true,
    // focusOnSelect: true,
    variableWidth: true,
    initialSlide: 1,
    
    });
});
