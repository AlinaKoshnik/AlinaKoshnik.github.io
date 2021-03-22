$(document).ready(() => {
    $(".slider-content").slick({
        dots: true,
        easing: 'ease',
    });

})

$(document).ready(function() {
    $('.header-burger').click(function(event){
        $('.header-burger,.header-menu').toggleClass('active');
    });
});