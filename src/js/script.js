$(document).ready(function(){
		$('.carousel__inner').slick({
			lazyLoad: 'progressive',
			//fade: true,
			speed: 1000,
			//vertical: true,
			//rtl: true,
			//centerMode: true,
			draggable: false,
			autoplay: true,
			autoplaySpeed: 1000,
			//adaptiveHeight: true,
			prevArrow: '<button type="button" class="slick-button slick-button_prev"><img src="ico/4.Carousel/left.png"></button>',
			nextArrow: '<button type="button" class="slick-button slick-button_next"><img src="ico/4.Carousel/right.png"></button>',
			responsive: [
				{
				  breakpoint: 768,
				  settings: {
					arrows: false
				  }
				}
			]
		});
	});