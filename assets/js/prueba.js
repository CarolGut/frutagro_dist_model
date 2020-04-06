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
	// product-detail-quantity change js
	$('.quantitycontrol').prepend('<span class="dec quantity-button"><i class="fas fa-minus"></i></span>');
	$('.quantitycontrol').append('<span class="inc quantity-button"><i class="fas fa-plus"></i></span>');
	$('.quantity-button').on('click', function () {
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
		if ($(this).scrollTop() > 800) {
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

$('input[name=\'shipping_address\']').on('change', function () {
	if (this.value == 'new') {
		$('#shipping-existing').hide();
		$('#shipping-new').show();
	} else {
		$('#shipping-existing').show();
		$('#shipping-new').hide();
	}
});

$('#collapse-shipping-address .form-group[data-sort]').detach().each(function () {
	if ($(this).attr('data-sort') >= 0 && $(this).attr('data-sort') <= $(
			'#collapse-shipping-address .form-group').length - 2) {
		$('#collapse-shipping-address .form-group').eq(parseInt($(this).attr('data-sort')) + 2)
			.before(this);
	}

	if ($(this).attr('data-sort') > $('#collapse-shipping-address .form-group').length - 2) {
		$('#collapse-shipping-address .form-group:last').after(this);
	}

	if ($(this).attr('data-sort') == $('#collapse-shipping-address .form-group').length - 2) {
		$('#collapse-shipping-address .form-group:last').after(this);
	}

	if ($(this).attr('data-sort') < -$('#collapse-shipping-address .form-group').length - 2) {
		$('#collapse-shipping-address .form-group:first').before(this);
	}
});