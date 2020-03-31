//Loading
$.when( $.ready ).then(()=>{
    $(".Loading").remove();
    $($(".owl-carousel")[0]).owlCarousel({
        loop:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
            ,
            1800:{
                items:7
            }
        }
    });
    $($(".owl-carousel")[1]).owlCarousel({
        loop:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        margin:30,
        nav:false,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:5
            },
            1200:{
                items:7
            }
        }
    });
    $('.js-tilt').tilt({
        scale:1.1
    });
});
//finished
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
var lastScrollTop = 0;
const navbarB=$(".navbar-brand"),
    navbar=$(".navbar");

$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       navbar.addClass("Top");
       navbarB.addClass("NTop");    
   } else {
      // upscroll code
        navbar.removeClass("Top");
        if(navbarB.offset().top<=80) navbarB.removeClass("NTop");
   }
   lastScrollTop = st;
});
