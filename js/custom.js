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
		slidesPerView: "auto",
		navigation: {
			nextEl: '.mslider-next1',
			prevEl: '.mslider-prev1',
		},
		breakpoints: {
			1920: {
				slidesPerView: 4,
			},
			1024: {
				slidesPerView: 3,
			},
			1023: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 1,
			}
		}
	});
	var mslider2 = new Swiper('.mslider-slider2', {
		spaceBetween: 30,
		slidesPerView: "auto",
		navigation: {
			nextEl: '.mslider-next2',
			prevEl: '.mslider-prev2',
		},
		breakpoints: {
			1920: {
				slidesPerView: 4,
			},
			1024: {
				slidesPerView: 3,
			},
			1023: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 1,
			}
		}
	});
	var mslider3 = new Swiper('.mslider-slider3', {
		spaceBetween: 30,
		slidesPerView: "auto",
		navigation: {
			nextEl: '.mslider-next3',
			prevEl: '.mslider-prev3',
		},
		breakpoints: {
			1920: {
				slidesPerView: 4,
			},
			1024: {
				slidesPerView: 3,
			},
			1023: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 1,
			}
		}
	});
	var mcardslider = new Swiper('.mcardslider-slider', {
		spaceBetween: 20,
		slidesPerView: 1,
		navigation: {
			nextEl: '.mcardslider__button-next',
			prevEl: '.mcardslider__button-prev',
		},
		pagination: {
		el: ".swiper-pagination",
		type: "fraction",
		},
	});
	if ($(window).width() <= 1023) {
		var mtabslider = new Swiper('.mtab-slider', {
			slidesPerView: "auto",
			navigation: {
				nextEl: '.mtab__control-next',
				prevEl: '.mtab__control-prev',
			},
		});
		var mctgslider = new Swiper('.mctg-slider', {
			slidesPerView: "auto",
		});
	}


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

	$(document).on("click", ".mmodule__item", function() {
		var text = $(this).find(".mmodule__item-text").text();
		var src = $(this).find(".mmodule-item-img-js").attr("src");
		console.log(text)
		console.log(src)
		$(this).closest(".mmodule__select-top").find(".mmodule__select-top-title").text(text)
		$(this).closest(".mmodule__select-top").find(".mmodule__select-hidden-title").val(text)
		$(this).closest(".mmodule__select-top").find(".mmodule__select-hidden-img").val(src)
		$(this).closest(".mmodule__select-top").find(".mmodule-js-img").attr("src", src)
	});
	$(".mmodule__basket").click(function() {
		$(this).toggleClass("active");
	})
	
	$(".sticky-block").stick_in_parent();

	$(".mprofile__mobile").click(function () {
		$(".mprofile__sidebar").addClass("active");
	});
	$(".mprofile__sidebar-close").click(function () {
		$(".mprofile__sidebar").removeClass("active");
	});

	// $(".collapsible-header").click();
});