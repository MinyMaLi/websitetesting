document.addEventListener('DOMContentLoaded', function() {
    var scrollToTop = document.getElementById('scroll-to-top');
    if (scrollToTop) {
        scrollToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

