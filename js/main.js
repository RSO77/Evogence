$(function () {

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5.2,
        speed: 3000,
        // centeredSlides: true,
        spaceBetween: 150,
        loop: true,
        slidesPerGroup: 1,
        // loopFillGroupWithBlank: true,
        breakpoints: {
            768: {
                slidesPerView: 2.1,
                spaceBetween: 0
            },
            1042: {
                slidesPerView: 3.2,
                spaceBetween: 70
            }
        }
    });


    $('.block').click(function () {
        var str = $(this).attr('class');
        var cl = '.' + str.substring(str.indexOf(" ")+1, str.length-2);
            $('.swiper-slide').addClass('display');
            $(cl).removeClass('display');
        swiper.update();
    });


    $('.swiper-slide').click(function () {
        $('.popup-doc').addClass('display');
        $('.popup').removeClass('display');
        var str = $(this).attr('class');
        var str2 = str.indexOf("doc");
        var tmp = '.popup-' + str.substring(str2, str.indexOf(" ", str2));
        $(tmp).removeClass('display');
    });
    $('.close-popup').click(function () {
        $('.popup').addClass('display');
        $('.popup-doc').addClass('display');
    });

});