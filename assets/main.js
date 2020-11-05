


$(function() {


// CURSOR

    var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
            css: {
                left: posX - 20,
                top: posY - 20
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

$(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

$(".category-image img").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});

$(".category-image img").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});
$("a").on("mouseenter", function() {
    cursor.addClass("link");
    follower.addClass("link");
});



//NAV BAR
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if(st>150){
        $('.navbar').addClass('show')
    }
  if(st>50){
      $('.navbar').addClass('scrolled')
  }else{
    $('.navbar').removeClass('scrolled')
    
  }
   if (st > lastScrollTop){
    $('.navbar').removeClass('show')
   } else {
    $('.navbar').addClass('show')
   }


//    about section title

    if(st<200){
        $('.aboutimg').addClass('d-none')
    }else{
        $('.aboutimg').removeClass('d-none')
    }


   lastScrollTop = st;
});


//HERO SLIDER
$('.hero-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows:false,
    centerMode: true,
    focusOnSelect: true,
    autoplay:true,
    autoplaySpeed: 5000,
    asNavFor: '.hero-right',
    centerPadding: '0%',
    fade: true,
    cssEase: 'linear'
  });

  $('.hero-right').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.hero-slider',
    dots: false,
    arrows:false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0%',
  });




//PORTFOLIO SLIDER

  $('.brand-active').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows:true,
    prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fas fa-chevron-left'></i></button>",
            nextArrow:"<button type='button' class='slick-next slick-arrow' ><i class='fas fa-chevron-right'></i></button>",
    centerMode: true,
    focusOnSelect: true,
    autoplay:true,
    autoplaySpeed:4000,
  });










$('.portfolio-title').paroller()

//CATEGORY IAMGES 
$('.category-image').paroller({
    factorXs: 0.1,
    factorSm: 0.1,
    factorMd: 0.1,
    factorLg: -0.1,
    factorXl: -0.1,
    factor: 0.1,
    type: 'foreground',
    direction: 'horizontal'
    });

//CATEGORIES AROOW
$('.categories-arrow').paroller({
    factorXs: 0.1,
    factorSm: 0.1,
    factorMd: -0.1,
    factorLg: -0.1,
    factorXl: -0.1,
    factor: 0.1,
    type: 'foreground',
    direction: 'vertical'
    });
//ABOUT AROOW
$('.arrow').paroller({
    factorXs: 0.1,
    factorSm: 0.1,
    factorMd: -0.4,
    factorLg: -0.5,
    factorXl: 0.1,
    factor: -0.4,
    type: 'foreground',
    direction: 'vertical',
    transition: 'translate 0.1s ease' 
    });

//CTEGORIES AROOW
$('.line').paroller({
    factorXs: -0.2,
    factorXl: -0.2,
    factor: -0.1,
    type: 'foreground',
    direction: 'vertical',
    transition: 'translate 0.1s ease' 
    });

// SECTION TITLE

$('.section-title').paroller({
    factorXs: 0.1,
    factorSm: 0.1,
    factorMd: 0.3,
    factorLg: 0.3,
    factorXl: 0.1,
    factor: 0.1,
    type: 'foreground',
    direction: 'vertical'
    });



// PAROLLER JS FOOTER
$('.footer').paroller();
$('.building').paroller();
$('.instagram').paroller();



});