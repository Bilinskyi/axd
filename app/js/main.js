
$(document).ready(function(){

	$('.mh-2').matchHeight({
		byRow: false,
	});


	$('.list').matchHeight({
		
	})

	paddingContent();
	positionMenu();
	

	function paddingContent() {

		var header = $('.header').outerHeight();
		var footer = $('.footer').outerHeight();

		$('.v-center').css({
			paddingTop: header,
			paddingBottom: footer
		})

	};


	function positionMenu() {

		var minusH = $('.nav').outerHeight();
		$('.nav').css({
			marginTop: -minusH/2 + 'px'
		})

	};


	$('.menu').on('click', 'div', function() {
		$('.hide-block').toggleClass('hide-block_open');
		$(this).closest('.menu').find('.menu__button').toggleClass('menu__button_opened')
	});

	if ($('.slider-partners').length) {
		$('.slider-partners').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			centerMode: false,
			centerPadding: '30px',
			responsive: [
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					vertical: true,
					slidesToScroll: 1
				}
			}
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
	}

	if ($('.slider-dev').length) {
		$('.slider-dev').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			centerMode: false,
			centerPadding: '30px',
			responsive: [
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					vertical: true,
					slidesToScroll: 1
				}
			}
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
	}


	if ($('.slider-news').length) {
		$('.slider-news').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			centerMode: false,
			centerPadding: '30px',
			responsive: [
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
	}




	if ($('.slider-publication').length) {
		$('.slider-publication').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			centerMode: false,
			centerPadding: '30px',
			responsive: [
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
	}


	if ($('.person-about').length) {
		var fl1 = true;
		var fl2 = true;

		var flsm1 = true;
		var flsm2 = true;

		$(window).on('load resize', function() {

			if (window.innerWidth <= 1200) {
				flsm2 = true;
				if (flsm1) {
					flsm1 = false;
					$('.person-about').append($('.next'));
				}
			} else {

				flsm1 = true;
				if (flsm2) {
					flsm2 = false; 
					$('.v-center').append($('.next'));
				}

			}

			if (window.innerWidth < 992) {
				fl2 = true;
				if (fl1) {
					fl1 = false;
					if ($('.partners').is('.slick-slider')) {
						$('.partners').slick('unslick');
					};

					$('.js-unwrap').unwrap();
					$('.partners').slick({

						dots: false,
						infinite: true,
						speed: 500,
						cssEase: 'ease'
					});
					$('.partners .slick-prev, .partners .slick-next').prepend('<div class="semi-circle"></div>');	
				}

			} else {

				fl1 = true;
				if (fl2) {
					fl2 = false; 
					if ($('.partners').is('.slick-slider')) {
						$('.partners').slick('unslick');
						var n = 0;	
						for(var i = 0; i<= $('.js-unwrap').length; i+=6) {
							$('.js-unwrap').slice(i, i+6).wrapAll("<div class='row slider-lg-item'></div>");
						}
					}

					$('.partners').slick({
						dats: false,
						infinite: true,
						speed: 500,
						cssEase: 'ease'
					});
					$('.partners .slick-prev, .partners .slick-next').prepend('<div class="semi-circle"></div>');
				}
			}

		});
	}

	$(window).on('resize', function() {

		paddingContent();
		positionMenu();

	});


// $('#slider-1').bxSlider({
// 		controls: true, 
// 		pager: false,
// 		slideWidth: 940,
// 		minSlides: 4,
// 		maxSlides: 4,
// 		moveSlides: 1
// 	});

// $('.owl-carousel').owlCarousel({
//   loop:true,
//   margin:10,
//   nav:true,
//   center: true,
//   autoHeight: true,
//   touchDrag: false,
//   mouseDrag: false,
//   dotsEach: true,
//   responsiveClass:true,
//   responsiveClass:true,
//   navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
//   responsive:{
//     0:{
//       stagePadding: 0,
//       items:1
//     },
//     600:{
//       stagePadding: 100,
//       items:1
//     },
//     1000:{
//       stagePadding: 200,
//       items:1
//     }
//   }
// });



 //    $("a.modal-form").fancybox({
 //       'hideOnContentClick': true,
 //          minWidth : 230,
 //          padding : 0,
 //          closeBtn : true
 
 // });

// $('header a[href^="#"]').on('click', function(event) {

//     var target = $( $(this).attr('href') );

//     if( target.length ) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top -85
//         }, 600);
//     }

// });



//  jQuery(function($){ 
//    $(".phone_mask_1").mask("+7(999) 999-9999");
//    $("#phone_mask_2").mask("+7(999) 999-9999");
// });

$('input,textarea').focus(function(){
	$(this).data('placeholder',$(this).attr('placeholder'))
	.attr('placeholder','');
}).blur(function(){
	$(this).attr('placeholder',$(this).data('placeholder'));
});


if ($('.wrapp-map').length) {
	ymaps.ready(init);
	function init(){
		var myMap=new ymaps.Map("map-canvas",{
			center:[56.844412, 60.617085],
			zoom:15,
			controls:['zoomControl']
		}),
		Placemark1=new ymaps.Placemark([56.844412, 60.617085],{
			balloonContent:'',
			hintContent:'',
		},{
			preset:'islands#redDotIcon'
		})
    // Placemark2=new ymaps.Placemark([59.935935,30.363452],{
    //     balloonContent:'Балун 2',
    //     hintContent:'Стандартный значок метки 2',
    // },{
    //     preset:'islands#redDotIcon'
    // });
    // myMap.geoObjects.add(Placemark1).add(Placemark2);
    myMap.geoObjects.add(Placemark1);
    myMap.behaviors.disable('scrollZoom');
  }
}

});