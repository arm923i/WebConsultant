$( document ).ready(function() {
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0}, 1000);
            return false;
    });
    
    
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });
    
    $('.hamburger').click(function(){
        element = $('.nav');
        display = element.css('display');
        if(display == 'none')
            $('.nav').slideDown(400);
        if(display == 'block')
            $('.nav').slideUp(400);
    });
});