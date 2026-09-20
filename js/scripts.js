// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

// Моб. версия
fakeResize = false
fakeResize2 = true

if (document.body.clientWidth < 375) {
	document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
}

$(() => {
	if ($('.main-slider').length) {
		new Swiper(".main-slider", {
			loop: true,
			spaceBetween: 0,
			slidesPerView: 1,
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			// autoplay: {
			// 	delay: 5000,
			// 	disableOnInteraction: false,
			// 	pauseOnMouseEnter: true,
			// },
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			}
		})
	}

	if ($('.articles__slider').length) {
		new Swiper(".articles__slider", {
			loop: true,
			spaceBetween: 15,
			slidesPerView: 1,
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 15,
					slidesPerView: 1,
				},
				'480': {
					spaceBetween: 15,
					slidesPerView: 1,
				},
				'768': {
					spaceBetween: 15,
					slidesPerView: 2,
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 3,
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
			// on: {
			// 	init: function (swiper) {
			// 		let posTop = $(swiper.el).find('.main-collections__box').innerHeight()

			// 		$(swiper.el).find('.slider-button-prev, .slider-button-next').css('top', posTop)
			// 	},
			// 	resize: function (swiper) {
			// 		let posTop = $(swiper.el).find('.main-collections__box').innerHeight()

			// 		$(swiper.el).find('.slider-button-prev, .slider-button-next').css('top', posTop)
			// 	}
			// }
		})
	}

	if ($('.specialists__slider').length) {
		new Swiper(".specialists__slider", {
			loop: true,
			spaceBetween: 10,
			slidesPerView: 2,
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 2,
				},
				'480': {
					spaceBetween: 10,
					slidesPerView: 2,
				},
				'768': {
					spaceBetween: 15,
					slidesPerView: 2,
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 3,
				},
				'1320': {
					spaceBetween: 20,
					slidesPerView: 4,
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}


	if ($('.reviews__slider').length) {
		new Swiper(".reviews__slider", {
			loop: true,
			spaceBetween: 15,
			slidesPerView: 1,
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 15,
					slidesPerView: 1,
				},
				'480': {
					spaceBetween: 15,
					slidesPerView: 1,
				},
				'768': {
					spaceBetween: 15,
					slidesPerView: 2
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 2
				},
				'1200': {
					spaceBetween: 20,
					slidesPerView: 3
				}
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}


	if ($('.stocks__slider').length) {
		new Swiper(".stocks__slider", {
			loop: true,
			spaceBetween: 15,
			slidesPerView: 1,
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 15,
					slidesPerView: 1
				},
				'480': {
					spaceBetween: 15,
					slidesPerView: 1
				},
				'768': {
					spaceBetween: 15,
					slidesPerView: 2
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 3,
				},
				'1600': {
					spaceBetween: 20,
					slidesPerView: 4,
				}
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}

	if ($('.about-adv__slider').length) {
		new Swiper(".about-adv__slider", {
			loop: true,
			spaceBetween: 10,
			slidesPerView: 1,
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			}
		})
	}


	if ($('.certs__slider').length) {
		new Swiper(".certs__slider", {
			loop: true,
			spaceBetween: 15,
			slidesPerView: 'auto',
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 15,
					slidesPerView: 'auto',
				},
				'480': {
					spaceBetween: 15,
					slidesPerView: 'auto',
				},
				'768': {
					spaceBetween: 15,
					slidesPerView: 2
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 2
				},
				'1200': {
					spaceBetween: 20,
					slidesPerView: 3
				},
				'1500': {
					spaceBetween: 20,
					slidesPerView: 4
				}
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}


	$('body').on('submit', '.form-ajax', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: $(this).data('content'),
			type: 'inline'
		}])
	})

	$('body').on('submit', '.main-form__form', function (e) {
		e.preventDefault()

		$(this).addClass('_send')
	})
});


$(window).on('load', () => {
	if ($('.our-patients__wrap').length){
		ourpatientsSlider()
	}
	
	if ($('.stocks__wrap').length){
		stocksSlider()
	}

	if ($('.service-info__wrap').length){
		serviceSlider()
	}

	if( $('.specialists__grid').length ){
		$('.specialists__grid').each(function() {
			specialistsHeight($(this), parseInt($(this).css('--products_count')))
		})
	}

	if ($('.main-form').length) {
		setRequestSentHeight()
	}
});


$(window).on('resize', () => {
	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Перезапись ширины окна
		WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

		// Моб. версия
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}

	if ($('.our-patients__wrap').length){
		ourpatientsSlider()
	}

	if ($('.stocks__wrap').length){
		stocksSlider()
	}

	if ($('.service-info__wrap').length){
		serviceSlider()
	}

	if( $('.specialists__grid').length ){
		$('.specialists__grid').each(function() {
			specialistsHeight($(this), parseInt($(this).css('--specialists_count')))
		})
	}

	if ($('.main-form').length) {
		setRequestSentHeight()
	}
});


function ourpatientsSlider(){
	if ( $(window).width() < 1024 && !$('.our-patients__wrap').hasClass('swiper-initialized') ) {
		$('.our-patients__wrap').addClass('swiper')
		$('.our-patients__wrap .our-patients__grid').addClass('swiper-wrapper').removeClass('_grid-box')
		$('.our-patients__wrap .our-patients__item').addClass('swiper-slide')

		ourpatientsSwiperSlider = new Swiper('.our-patients__wrap', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 10,
			slidesPerView: 1,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 1
				},
				'480': {
					spaceBetween: 10,
					slidesPerView: 1
				},
				'768': {
					spaceBetween: 10,
					slidesPerView: 2
				}
			},
		})
	} else if ($(window).width() > 1023 && $('.our-patients__wrap').hasClass('swiper-initialized')) {
		if ($('.our-patients__wrap').length === 1 && $('.our-patients__wrap').hasClass('swiper-initialized')) {
			ourpatientsSwiperSlider.destroy(true, true)
		} else if ($('.our-patients__wrap').length >= 2 && $('.our-patients__wrap').hasClass('swiper-initialized')) {
			ourpatientsSwiperSlider.forEach(function (element) {
				element.destroy(true, true)
			})
		}

		$('.our-patients__wrap').removeClass('swiper')
		$('.our-patients__wrap .our-patients__grid').removeClass('swiper-wrapper').addClass('_grid-box')
		$('.our-patients__wrap .our-patients__item').removeClass('swiper-slide')
	}
}


function stocksSlider(){
	if ( $(window).width() < 1024 && !$('.stocks__wrap').hasClass('swiper-initialized') ) {
		$('.stocks__wrap').addClass('swiper')
		$('stocks__wrap .stocks__grid').addClass('swiper-wrapper').removeClass('_flex')
		$('stocks__wrap .stocks__item').addClass('swiper-slide')

		stocksSwiperSlider = new Swiper('.stocks__wrap', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 10,
			slidesPerView: 1,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 1
				},
				'480': {
					spaceBetween: 10,
					slidesPerView: 1
				},
				'768': {
					spaceBetween: 15,
					slidesPerView: 2
				}
			},
		})
	} else if ($(window).width() > 1023 && $('.stocks__wrap').hasClass('swiper-initialized')) {
		if ($('.stocks__wrap').length === 1 && $('.stocks__wrap').hasClass('swiper-initialized')) {
			stocksSwiperSlider.destroy(true, true)
		} else if ($('.stocks__wrap').length >= 2 && $('.stocks__wrap').hasClass('swiper-initialized')) {
			stocksSwiperSlider.forEach(function (element) {
				element.destroy(true, true)
			})
		}

		$('.stocks__wrap').removeClass('swiper')
		$('stocks__wrap .stocks__grid').removeClass('swiper-wrapper').addClass('_flex')
		$('stocks__wrap .stocks__item').removeClass('swiper-slide')
	}
}

function serviceSlider(){
	if ( $(window).width() < 1024 && !$('.service-info__wrap').hasClass('swiper-initialized') ) {
		$('.service-info__wrap').addClass('swiper')
		$('.service-info__wrap .service-info__grid').addClass('swiper-wrapper').removeClass('_flex')
		$('.service-info__wrap .service-info__item').addClass('swiper-slide')

		serviceSwiperSlider = new Swiper('.service-info__wrap', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 15,
			slidesPerView: 'auto',
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 15,
					slidesPerView: 'auto'
				},
				'480': {
					spaceBetween: 15,
					slidesPerView: 'auto'
				},
				'768': {
					spaceBetween: 15,
					slidesPerView: 2
				}
			},
		})
	} else if ($(window).width() > 1023 && $('.service-info__wrap').hasClass('swiper-initialized')) {
		if ($('.service-info__wrap').length === 1 && $('.service-info__wrap').hasClass('swiper-initialized')) {
			serviceSwiperSlider.destroy(true, true)
		} else if ($('.service-info__wrap').length >= 2 && $('.service-info__wrap').hasClass('swiper-initialized')) {
			serviceSwiperSlider.forEach(function (element) {
				element.destroy(true, true)
			})
		}

		$('.service-info__wrap').removeClass('swiper')
		$('.service-info__wrap .service-info__grid').removeClass('swiper-wrapper').addClass('_flex')
		$('.service-info__wrap .service-info__item').removeClass('swiper-slide')
	}
}



function specialistsHeight(context, step) {
	let start    = 0
	let finish   = step
	let specialists = context.find('.specialist')

	// specialists.height('auto')
	specialists.find('.specialist__name').height('auto')
	specialists.find('.specialist__speciality').height('auto')
	specialists.find('.specialist__bot').height('auto')

	for (let i = 0; i < specialists.length; i++) {
		// setHeight(specialists.slice(start, finish))
		setHeight(specialists.slice(start, finish).find('.specialist__name'))
		setHeight(specialists.slice(start, finish).find('.specialist__speciality'))
		setHeight(specialists.slice(start, finish).find('.specialist__bot'))

		start  = start + step
		finish = finish + step
	}
}

function setRequestSentHeight() {
	$('.main-form').each(function() {
		const $mainForm = $(this);
		const $form = $mainForm.find('.main-form__form');
		const $requestSent = $mainForm.find('.request-sent');

		// Скидаємо попередні значення перед вимірюванням
		$requestSent.css({
			height: '',
			'min-height': ''
		});

		const formHeight = $form.outerHeight();

		if ($form.hasClass('_send')) {
			$requestSent.css('min-height', formHeight);
		} else {
			$requestSent.css('height', formHeight);
		}
	});
}