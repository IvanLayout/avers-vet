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
			spaceBetween: 16,
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
					spaceBetween: 16,
					slidesPerView: 1,
				},
				'480': {
					spaceBetween: 16,
					slidesPerView: 2,
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


	if ($('.reviews__slider').length) {
		new Swiper(".reviews__slider", {
			loop: true,
			spaceBetween: 20,
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
					spaceBetween: 20,
					slidesPerView: 1,
				},
				'480': {
					spaceBetween: 10,
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
			spaceBetween: 16,
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
					spaceBetween: 16,
					slidesPerView: 1,
				},
				'480': {
					spaceBetween: 16,
					slidesPerView: 2,
				},
				'768': {
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


	//
	$('body').on('click', '.amount__btn_minus', function (e) {
		e.preventDefault()

		let parent = $(this).closest('.amount')

		if ( $(this).closest('.product-global-added').hasClass('product-global-added') ) {
			parent = $('.product-global-added')
		}

		let input = parent.find('input')
		let inputVal = parseFloat(input.val())
		let minimum = parseFloat(input.data('minimum'))
		let step = parseFloat(input.data('step'))

		if (inputVal > minimum) {
			input.val(inputVal - step)

			parent.find('.amount__btn_plus').prop("disabled", false)
		}

		if (inputVal-1 == minimum) {
			if ( !parent.hasClass('product__amount') && !parent.closest('.product-global-added').hasClass('product-global-added') ){
				$(this).prop("disabled", true)
			}
		}

		if (inputVal == minimum) {
			if ( parent.hasClass('product__amount') ){
				$(this).closest('.product').find('.product__added').removeClass('_show')
				$(this).closest('.product').find('.product__cart-btn').removeClass('_hide')
			}

			if ( parent.closest('.product-global-added').hasClass('product-global-added') ){
				$('.product-global-added').removeClass('_show')
				$('.product-global-buy').removeClass('_hide')
			}
		}
	})
	
	$('body').on('click', '.amount__btn_plus', function (e) {
		e.preventDefault()

		let parent = $(this).closest('.amount')

		if ( $(this).closest('.product-global-added').hasClass('product-global-added') ) {
			parent = $('.product-global-added')
		}

		let input = parent.find('input')
		let inputVal = parseFloat(input.val())
		let maximum = parseFloat(input.data('maximum'))
		let step = parseFloat(input.data('step'))

		if (inputVal < maximum) {
			input.val(inputVal + step)

			parent.find('.amount__btn_minus').prop("disabled", false)
		}

		if (inputVal+1 == maximum) {
			$(this).prop("disabled", true)
		}
	})

	$('.amount__input').keydown(function () {
		const _self = $(this),
			maximum = parseInt(_self.data('maximum'))

		setTimeout(() => {
			if (_self.val() == '' || _self.val() == 0) _self.val(parseInt(_self.data('minimum')))
			if (_self.val() > maximum) _self.val(maximum)
		})
	})
});


$(window).on('load', () => {
	if ($('.stocks__wrap').length){
		stocksSlider()
	}

	if( $('.specialists__grid').length ){
		$('.specialists__grid').each(function() {
			specialistsHeight($(this), parseInt($(this).css('--products_count')))
		})
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

	if ($('.stocks__wrap').length){
		stocksSlider()
	}

	if( $('.specialists__grid').length ){
		$('.specialists__grid').each(function() {
			specialistsHeight($(this), parseInt($(this).css('--specialists_count')))
		})
	}
});


function stocksSlider(){
	if ( $(window).width() < 1024 && !$('.stocks__wrap').hasClass('swiper-initialized') ) {
		$('.stocks__wrap').addClass('swiper')
		$('.stocks__grid').addClass('swiper-wrapper').removeClass('_flex')
		$('.stocks__item').addClass('swiper-slide')

		advantagesSwiperSlider = new Swiper('.stocks__wrap', {
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
			advantagesSwiperSlider.destroy(true, true)
		} else if ($('.stocks__wrap').length >= 2 && $('.stocks__wrap').hasClass('swiper-initialized')) {
			advantagesSwiperSlider.forEach(function (element) {
				element.destroy(true, true)
			})
		}

		$('.stocks__wrap').removeClass('swiper')
		$('.stocks__grid').removeClass('swiper-wrapper').addClass('_flex')
		$('.stocks__item').removeClass('swiper-slide')
	}
}


function specialistsHeight(context, step) {
	let start    = 0
	let finish   = step
	let specialists = context.find('.specialist')

	specialists.height('auto')
	specialists.find('.specialist__name').height('auto')
	specialists.find('.specialist__speciality').height('auto')
	specialists.find('.specialist__bot').height('auto')

	for (let i = 0; i < specialists.length; i++) {
		setHeight(specialists.slice(start, finish))
		setHeight(specialists.slice(start, finish).find('.specialist__name'))
		setHeight(specialists.slice(start, finish).find('.specialist__speciality'))
		setHeight(specialists.slice(start, finish).find('.specialist__bot'))

		start  = start + step
		finish = finish + step
	}
}