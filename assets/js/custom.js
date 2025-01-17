(function ($) {
    "use strict";

    // Window Resize Mobile Menu Fix
    mobileNav();

    // Scroll animation init
    window.sr = new scrollReveal();

    // Menu Dropdown Toggle
    if ($('.menu-trigger').length) {
        $(".menu-trigger").on('click', function () {    
            $(this).toggleClass('active');
            $('.header-area .nav').slideToggle(200);
        });
    }

    // Menu elevator animation
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault(); // Hindari perilaku default link
		var target = $(this.hash); // Ambil elemen target berdasarkan hash
		if (target.length) {
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 50
			}, 700);
		}
	});

    $(document).ready(function () {
        $(document).on("scroll", onScroll);
        
        // Smoothscroll
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");
            
            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');
          
            var target = this.hash,
                menu = target;
            var target = $(this.hash);
            $('html, body').stop().animate({
                scrollTop: (target.offset().top) - 50 // Offset dikurangi menjadi 50
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('.nav a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top - 50 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.nav ul li a').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    }

    // Home seperator
    if ($('.home-seperator').length) {
        $('.home-seperator .left-item, .home-seperator .right-item').imgfix();
    }

    // Home number counterup
    if ($('.count-item').length) {
        $('.count-item strong').counterUp({
            delay: 10,
            time: 1000
        });
    }

    // Page loading animation
    $(window).on('load', function () {
        if ($('.cover').length) {
            $('.cover').parallax({
                imageSrc: $('.cover').data('image'),
                zIndex: '1'
            });
        }

        $("#preloader").animate({
            'opacity': '0'
        }, 600, function () {
            setTimeout(function () {
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });
    });

    // Window Resize Mobile Menu Fix
    $(window).on('resize', function () {
        mobileNav();
    });

    // Window Resize Mobile Menu Fix
    function mobileNav() {
        var width = $(window).width();
        $('.submenu').on('click', function () {
            if (width < 992) {
                $('.submenu ul').removeClass('active');
                $(this).find('ul').toggleClass('active');
            }
        });
    }

})(window.jQuery);

const scriptURL = 'https://script.google.com/macros/s/AKfycbznrWWD5fCJBtBqwfSSNcM_AMNv9pIJeEPld_-2zkgBkWiiK1lYKBE2JSO3dhUrwMW2PA/exec'

const form = document.forms['sintesis-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you from Sintetis Academy! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})