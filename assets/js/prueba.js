$(document).ready(function () {
	$(".dropdown").hover(
		function () {
			$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("fast");
			$(this).toggleClass('open');
		},
		function () {
			$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("fast");
			$(this).toggleClass('open');
		}
	);
	// quantity change js
	$('.pro-qty').prepend('<span class="dec qtybtn">-</span>');
	$('.pro-qty').append('<span class="inc qtybtn">+</span>');
	$('.qtybtn').on('click', function () {
		var $button = $(this);
		var oldValue = $button.parent().find('input').val();
		if ($button.hasClass('inc')) {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find('input').val(newVal);
	});

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 600) {
			$('.scroll-top').removeClass('not-visible d-none');
		} else {
			$('.scroll-top').addClass('not-visible');
		}
	});
	$('.scroll-top').on('click', function (event) {
		$('html,body').animate({
			scrollTop: 0
		}, 1000);
	});

	$('[data-toggle="offcanvas"]').on('click', function () {
		$('body').toggleClass('toggled');
		$('.frutagro-menu-2').removeClass('sticky-top')
	});

	$('.cart-sidebar-header a').on('click', function () {
		setTimeout(function () {
			$('.frutagro-menu-2').addClass('sticky-top');
		}, 500);


	});

});