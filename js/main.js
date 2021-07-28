let swiperGallery = new Swiper(".swiper-gallery", {
    spaceBetween: 5,
    width: 68,
});
let swiperGalleryMain = new Swiper(".swiper-gallery-main", {
    thumbs: {
        swiper: swiperGallery,
    },
});

$('img.img-svg').each(function () {
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function (data) {
        var $svg = $(data).find('svg');
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        $img.replaceWith($svg);
    }, 'xml');
});

$(function () {
    setTimeout(() => {
        $('.card__like').on('click', function() {
            console.log(1);
            $(this).toggleClass('card__like--active');
        });
    }, 1500);
});