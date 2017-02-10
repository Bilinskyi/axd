
$(document).ready(function(){

	paddingContent();
	positionMenu();
	

	function paddingContent() {

		var header = $('.header').outerHeight();
		var footer = $('.footer').outerHeight();

		$('.t-cell').css({
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

});