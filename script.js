document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       $(".navbar").addClass("Top");
       $(".navbar-brand").addClass("NTop");    
   } else {
      // upscroll code
      $(".navbar").removeClass("Top");
        if($('html').offset().top>=-20) $(".navbar-brand").removeClass("NTop");
   }
   lastScrollTop = st;
});
