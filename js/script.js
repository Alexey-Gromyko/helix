$(document).ready(function() {

    $('.header-burger').on('click', function() {
        $('.header-burger').toggleClass('header-burger-active');
        $('.header-links').toggleClass('header-links-active');
        $('body').toggleClass('lock');
    })

    $(window).on('load resize', function() {
        if ($(window).width() > 768 ) {
            $(".tab_item").not(":first").hide();
        } else {
            $(".tab_item").fadeIn();
        }
    });

    $(".tab").on('click', function () {
		if (!$(this).hasClass('active')) {
			$(this).addClass('active').siblings().removeClass('active');
			$(".tab_item").hide().eq($(this).index()).fadeIn();
		}
	})

    $(window).on('load resize', function() {
        if ($(window).width() < 768 ) {
          $('.text-with-tabs__content:not(.slick-initialized)').slick({
            slidesToShow: 1,
            dots: true,
            arrows: false,
            infinite: false,
            slidesToShow: 1,
          });
        } else {
          $(".text-with-tabs__content.slick-initialized").slick("unslick");
        }
      });

    $(".wrapper-content__text-with-img").not(":first").hide();
    $('.wrapper-content__title-with-arrow').on('click', function(e) {
      if(!$(this).hasClass('active')) {
        $('.wrapper-content__title-with-arrow').removeClass('active');
        $('.wrapper-content__title-with-arrow').find('.title-with-arrow__title h3').removeClass('active');
        $('.wrapper-content__title-with-arrow').find('.title-with-arrow__arrow span').removeClass('active');
        $('.wrapper-content__title-with-arrow').parents('.faqs__wrapper-content').find('.wrapper-content__text-with-img').slideUp(800);
        $(this).toggleClass('active');
        $(this).find('.title-with-arrow__title h3').toggleClass('active');
        $(this).find('.title-with-arrow__arrow span').toggleClass('active');
        $(this).parents('.faqs__wrapper-content').find('.wrapper-content__text-with-img').slideDown(1000);
      }
    })

})