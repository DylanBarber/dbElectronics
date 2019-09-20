$(document).ready(function() {
    $('.next').on('click', function() {
        let currentImg = $('.activeSlide');
        let nextImg = currentImg.next();
        if (nextImg.length){
            currentImg.removeClass('activeSlide').css('z-index', -10);
            nextImg.addClass('activeSlide').css('z-index', 10);
        } else {
            $('.slideInnerDiv :last-child').removeClass('activeSlide');
            $('.slideInnerDiv :first-child').addClass('activeSlide');
        }
    })

    $('.prev').on('click', function() {
        let currentImg = $('.activeSlide');
        let prevImg = currentImg.prev();
        if (prevImg.length){
            currentImg.removeClass('activeSlide').css('z-index', -10);
            prevImg.addClass('activeSlide').css('z-index', 10);
        } else {
            $('.slideInnerDiv :first-child').removeClass('activeSlide');
            $('.slideInnerDiv :last-child').addClass('activeSlide');
        }
    })
})