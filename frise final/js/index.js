'use strict';

var areClipPathShapesSupported = function areClipPathShapesSupported() {

    var base = 'clipPath',
        prefixes = ['webkit', 'moz', 'ms', 'o'],
        properties = [base],
        testElement = document.createElement('testelement'),
        attribute = 'polygon(50% 0%, 0% 100%, 100% 100%)';

    // Push the prefixed properties into the array of properties.
    for (var i = 0, l = prefixes.length; i < l; i++) {
        var prefixedProperty = prefixes[i] + base.charAt(0).toUpperCase() + base.slice(1); // remember to capitalize!
        properties.push(prefixedProperty);
    }

    // Interate over the properties and see if they pass two tests.
    for (var i = 0, l = properties.length; i < l; i++) {
        var property = properties[i];

        // First, they need to even support clip-path (IE <= 11 does not)...
        if (testElement.style[property] === '') {

            // Second, we need to see what happens when we try to create a CSS shape...
            testElement.style[property] = attribute;
            if (testElement.style[property] !== '') {
                return true;
            }
        }
    }

    return false;
};

$(function () {
    var defaultSlickSpeed = 300;

    $('.views').slick({
        speed: defaultSlickSpeed
    }).on('beforeChange', function (evt, slick, currentSlide, nextSlide) {
        var delta = Math.abs(currentSlide - nextSlide);
        if (delta === slick.slideCount - 1) {
            delta = 1;
        }
        $('.views').slick('slickSetOption', 'speed', delta * defaultSlickSpeed);
    }).on('afterChange', function (evt, slick, currentSlide) {
        $('.views').slick('slickSetOption', 'speed', defaultSlickSpeed);

        $('.timeline__list').find('.timeline__item--active').removeClass('timeline__item--active');
        $('.timeline__list').find('.timeline__item:nth-child(' + (currentSlide + 1) + ')').addClass('timeline__item--active');
    });

    $('.timeline__link').on('click', function (evt) {
        evt.preventDefault();
        $('.timeline__item--active').removeClass('timeline__item--active');
        $(evt.currentTarget).parent().addClass('timeline__item--active');

        $('.views').slick('slickGoTo', $(evt.currentTarget).parent().prevAll('li').length);
    });

    var timelineOffset = $('.timeline').offset().left;
    var triangleWidth = $('.timeline__path__triangle--moving').outerWidth();

    $('.timeline').on('mousemove', function (evt) {
        var value = evt.pageX - timelineOffset - triangleWidth / 2;
        $('.timeline__path__triangle--moving').css({
            transform: 'translateX(' + value + 'px)'
        });
    });

    if (!areClipPathShapesSupported()) {
        $('body').addClass('no-clippath');
    } else {
        $('body').addClass('clippath');
    }
});