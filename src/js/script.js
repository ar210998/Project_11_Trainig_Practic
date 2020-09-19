/* const slider = tns({				tiny-slider
    container: '.carousel__inner',
	items: 1,
	speed: 10000,
    slideBy: 'page',
	controls: false,
	nav: false
  });

  document.querySelector('.sllider-button_prev').addEventListener('click', function () {
	slider.goTo('prev');
  });

  document.querySelector('.sllider-button_next').addEventListener('click', function () {
	slider.goTo('next');
  }); */

$(document).ready(function(){		
		$('.carousel__inner').slick({
			lazyLoad: 'progressive',
			speed: 1000,
			draggable: false,
			autoplay: true,
			autoplaySpeed: 1000,
			prevArrow: '<button type="button" class="sllider-button sllider-button_prev"><img src="ico/4.Carousel/left.png"></button>',
			nextArrow: '<button type="button" class="sllider-button sllider-button_next"><img src="ico/4.Carousel/right.png"></button>',
			responsive: [
				{
				  breakpoint: 768,
				  settings: {
					arrows: false
				  }
				}
			]
		});
		$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
			$(this)
			  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
		  });

		  function toggleSlide(item) {
			$(item).each(function(i){
				$(this).on('click', function(e) {
					e.preventDefault();
					$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
					$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
				});
			  });
		  }
		  toggleSlide('.catalog-item__link');
		  toggleSlide('.catalog-item__back');

	/* модальные окна */		  

	$('[data-modal=consultation]').on('click', function(){
		$('.overlay, #consultation').fadeIn(100);
	});
	$('.button_buy').each(function(i){
		$(this).on('click', function(){
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn(100);
		});
	});
	$('.modal__close').on('click', function(){
		$('.overlay, #consultation, #order, #thanks').fadeOut(1000);
	});

	function validateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					  minlength: 2
				},
				phone: {
					required: true
				},
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Имя скажи!",
					minlength: jQuery.validator.format("Не менее {0} буковок введи!")
				  },
				phone: {
					required: "Гони телефон!",
				  },
				email: {
				  required: "Почту давай!",
				  email: "Не пизди!"
				}
			  }
		});
	}
	validateForms('#consultation-form');
	validateForms('#consultation form');
	validateForms('#order form');

$('input[name=phone]').mask('+372 99999999');

$('form').submit(function(e) {
	e.preventDefault();
	$.ajax({
		type: "POST",
		url: "mailer/smart.php",
		data: $(this).serialize()
	}).done(function() {
		$(this).find('input').val('');
		$('#consultation, #order').fadeOut(100);
		$('overlay, #thanks').fadeIn(1000);
		$('form').trigger('reset');
	});
	return false;
});


	$(window).scroll(function(){
		if ($(this).scrollTop() > 700) {
			$('.to-top').fadeIn();
		} else {
			$('.to-top').fadeOut();
		}
	});
	
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
});

});