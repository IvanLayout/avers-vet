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

	if ($('.main-collections__slider').length) {
		new Swiper(".main-collections__slider", {
			loop: true,
			spaceBetween: 0,
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
			on: {
				init: function (swiper) {
					let posTop = $(swiper.el).find('.main-collections__box').innerHeight()

					$(swiper.el).find('.slider-button-prev, .slider-button-next').css('top', posTop)
				},
				resize: function (swiper) {
					let posTop = $(swiper.el).find('.main-collections__box').innerHeight()

					$(swiper.el).find('.slider-button-prev, .slider-button-next').css('top', posTop)
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
	if( $('.products__grid').length ){
		$('.products__grid').each(function() {
			productsHeight($(this), parseInt($(this).css('--products_count')))
		})

		$('.products__grid').find('.product').removeClass('_loaded')
		setTimeout(() => {
			$('.products__grid').find('.product').addClass('_loaded')
		}, 100)
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

	if( $('.products__grid').length ){
		$('.products__grid').each(function() {
			productsHeight($(this), parseInt($(this).css('--products_count')))
		})

		$('.products__grid').find('.product').removeClass('_loaded')
		setTimeout(() => {
			$('.products__grid').find('.product').addClass('_loaded')
		}, 100)
	}
});


function productsHeight(context, step) {
	let start    = 0
	let finish   = step
	let products = context.find('.product')

	products.height('auto')
	products.find('.product__name').height('auto')
	products.find('.product__box').height('auto')
	products.find('.product__block').height('auto')
	products.find('.product__desc-items').height('auto')
	products.find('.product__prices').height('auto')

	for (let i = 0; i < products.length; i++) {
		setHeight(products.slice(start, finish))
		setHeight(products.slice(start, finish).find('.product__name'))
		setHeight(products.slice(start, finish).find('.product__box'))
		setHeight(products.slice(start, finish).find('.product__block'))
		setHeight(products.slice(start, finish).find('.product__desc-items'))
		setHeight(products.slice(start, finish).find('.product__prices'))

		start  = start + step
		finish = finish + step
	}
}