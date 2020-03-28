document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) $(".navbar").removeClass("Top");
    else $(".navbar").addClass("Top");
});
