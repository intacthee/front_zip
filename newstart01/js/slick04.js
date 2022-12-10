$(function () {


    $('.left_slide').slick({
        arrows: false,
        fade: true,
        asNavFor: '.right_slide',
    });

    var barwidth = $('.bar').width();
    console.log(barwidth);


    $('.right_slide').on('init afterChange', function (e, s, c) {
        console.log(s)
        var bb = barwidth / s.slideCount;
        $('.bar span').css({ width: bb });
        $('.bar2 span').css({ width: bb });
        $('.bar2 span').css({ width: bb * (c + 1) });
        $('.bar span').animate({ left: bb * c });

        $('.num span').text(c ? (c + 1) : 1)
        $('.num strong').text(s.slideCount)
    })

    $('.right_slide').slick({
        arrows: false,
        slidesToShow: 5,
        asNavFor: '.left_slide',
    });

    $('.arrows i:nth-child(1)').on('click', function () {
        $('.left_slide').slick('slickPrev')
    });
    $('.arrows i:nth-child(2)').on('click', function () {
        $('.left_slide').slick('slickNext')
    })


















})