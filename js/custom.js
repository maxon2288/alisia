$(window).ready(function () {
	$(".collapsible-body").each(function () {
		var height = $(this).height();
		$(this).css("height", 0);
		$(this).attr("data-height", height)
	});

	$(".collapsible-header").click(function () {
		var body = $(this).closest(".collapsible-item").find(".collapsible-body");
		var header = $(this);
		if (header.hasClass("active")) {
			header.removeClass("active");
			var height = body.height();
			body.attr("data-height", height);
			body.height(0);
			body.removeClass("active");
		} else {
			$(".collapsible-header").removeClass("active");
			// var height = body.height();
			// $(".collapsible-body").attr("data-height", height);
			$(".collapsible-body").height(0);
			$(".collapsible-body").removeClass("active");
			header.addClass("active");
			var height = body.attr("data-height");
			body.height(height);
		}
	});

	$('.form-order').each(function () {
		var it = $(this);
		it.validate({
			rules: {
				order_place: {
					required: true,
				},
				order_index: {
					required: true,
				},
				order_name: {
					required: true,
				},
				ordrm_phone: {
					required: true,
				},
				ordrm_email: {
					email: true,
					required: true,
				},
				ordrm_address: {
					required: true,
				},
				ordrm_deliv: {
					required: true,
				}
			},

			errorPlacement: function (error, element) {

			},

			submitHandler: function () {
				$.ajax({
					success: function () {
						document.location.href = "http://127.0.0.1:5500/order-success.html";
					}
				});
			},
		});
	});
	$(".m-bg-cont").each(function() {
		var img = $(this).find("img:first-of-type").attr("src");
		$(this).css("background-image", "url(" + img + ")");
	});
	var mslider1 = new Swiper('.mslider-slider1', {
		spaceBetween: 30,
		slidesPerView: 4,
		navigation: {
			nextEl: '.mslider-next1',
			prevEl: '.mslider-prev1',
		},
		pagination: {
			el: '.first-pagination',
		},
	});
	var mslider2 = new Swiper('.mslider-slider2', {
		spaceBetween: 30,
		slidesPerView: 4,
		navigation: {
			nextEl: '.mslider-next2',
			prevEl: '.mslider-prev2',
		},
		pagination: {
			el: '.first-pagination',
		},
	});

	$(".m-number").each(function() {
		var it = $(this);
		$(this).find(".decrease").click(function() {
			var value = it.find('.input-number').val();
			value = isNaN(value) ? 0 : value;
			value < 1 ? value = 1 : '';
			value--;
			it.find('.input-number').val(value);
		});
		$(this).find(".increase").click(function() {
			var value = it.find('.input-number').val();
			value = isNaN(value) ? 0 : value;
			value++;
			it.find('.input-number').val(value);
		});
	});
	
	$(".sticky-block").stick_in_parent();

	$(".mprofile__mobile").click(function () {
		$(".mprofile__sidebar").addClass("active");
	});
	$(".mprofile__sidebar-close").click(function () {
		$(".mprofile__sidebar").removeClass("active");
	});

	// $(".collapsible-header").click();
});