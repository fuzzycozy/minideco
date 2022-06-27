//$('header').load('inc.html header > div');

//$('footer').load('inc.html footer > p');

let a=0;
let idx=0;

// header ========================================================================

/*
$('nav li').on('click',function(){
    idx = $(this).index();

    $('.sub_wrap div').removeClass('active');
    $('.sub_wrap div').eq(idx).addClass('active');
})
*/
const menu = document.querySelectorAll('nav li a'),
sub = document.querySelectorAll('.sub');



menu.forEach(function(value,key){
    value.addEventListener('click',function(){
        event.preventDefault;
        sub[a].classList.remove('active')
        sub[key].classList.add('active')
        a=key;
        if(event.target.classList.contains('sub')){
            sub.classList.remove('active')
        }
    })
})




// new ====================================================================================//
$(window).on('scroll',function(){
    scrollY = $(window).scrollTop();
    new_Y = $('.new > p').offset().top;
    if(new_Y - winH < scrollY){
        $('.new').addClass('active');
        $('.info_new').addClass('active');
    }
})




// Slick_1 : 슬릭 ===================================================================================

let posY;
let winH = $(window).height();
let scrollY;

$(window).on('scroll',function(){
    scrollY = $(window).scrollTop();
    slik1_Y = $('.hot > p').offset().top;

    if(slik1_Y - winH < scrollY){
        $('.hot > p').addClass('active');
        $('.hot_wrap > .info').addClass('active');
        $('.hot_slide > ul').addClass('active');
    }
})



$(".hot_slide ul").slick({
    arrows:false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed:1000,
    autoplay:true
  });

  $('.hot_slide ul').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  });





// Media  ================================================================================//
$(window).on('scroll',scrl_Mda)

$('.indi a').on('click',indi_Mda)

function scrl_Mda(){

    scrollY = $(window).scrollTop();
    mda_Y = $('.media > .brik').offset().top;

    if(mda_Y - winH < scrollY){
        $('.media > .brik').addClass('active');
        $('.media > .info').css('animation','ani_media2 .5s .8s linear forwards')
        $('iframe').eq(a).addClass('active').css('display','block');
        $('.vid  p').eq(a).addClass('active');
    }
}

function indi_Mda(){
    idx = $(this).index();

    $('.indi a').eq(a).removeClass('active');
    $('.indi a').eq(idx).addClass('active');
    $('iframe').eq(a).removeClass('active').css('transition','.5s');
    $('iframe').eq(idx).addClass('active');
    $('.vid p').eq(a).removeClass('active');
    $('.vid p').eq(idx).addClass('active');
    a=idx;
}
    

//popup 
$('.btn_qv').on('click',function(){
    $('.qv').addClass('active');
    $('.qvX').on('click',function(){
        $('.qv').removeClass('active');
    })
})


// SNS  ==========================================================================================//

$(window).on('scroll',function(){
    scrollY = $(window).scrollTop();
    sns_Y = $('.sns > p').offset().top;

    if(sns_Y - winH < scrollY){
        $('.sns > .info').addClass('active');
        $('.icon p').addClass('active');
        $('.icon a').addClass('active');
    }
})