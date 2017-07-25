$(function() {
	 $('.slider-for').slick({
	  autoplay: true,
	  speed: 3000,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  asNavFor: '.slider-nav',
	  focusOnSelect: false
	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  arrows: false,
	  centerMode: true,
	  focusOnSelect: false,
	});
		
})