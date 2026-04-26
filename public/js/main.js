
function initJS() {
    AOS.init({
        once: true
    });

    var scroll = new SmoothScroll('a[href*="#"]');

    $(".lazy").unveil(100, function() {
      $(this).on('load', function() {
        this.style.opacity = 1;
      });
    });

    if (window.location.pathname != '/') {
        $('#nav-home').fadeIn();
        scroll.animateScroll(0);
    } else {
        $("#nav-home").fadeOut();
    }

}

$(function() {
    const swup = new Swup();
    swup.on('contentReplaced', function() {
        initJS()
    });
});

initJS()