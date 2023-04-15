var isOpen = false;
var index = 0;

const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


$(document).ready(function() {
    if (isMobile.any()) {
        $("nav").removeClass("fixed-top");
    } else {
        $("nav").attr('style', 'background-color: transparent !important');
        $(window).scroll(function() {
            console.log($(window).scrollTop());
            if ($(window).scrollTop() > 300) {
                $("nav").attr('style', 'background-color: #222222 !important');
            } else {
                $("nav").attr('style', 'background-color: transparent !important');
            }
            //$("#navBar").css("opacity",  0 + $(window).scrollTop() / 700);
        });
    }

    $('ul li a').click(function() {
        $('ul li').removeClass('active');
        $(this).parent().addClass('active');
    });

    //get all the divs with the id of project with jquery
    $('.project').hide();
    $('.project').eq(index).show()

});

function setIndex(n) {
    index += n;
    if (index < 0) {
        index = $('.project').length - 1;
    }else if(index + 1 > $('.project').length){
        index = 0;
    }
}

function plusSlides(n) {
    setIndex(n)
    $('.project').hide();
    $('.project').eq(index).show();
}