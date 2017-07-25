$(function() {
	 $('.slider-for').slick({
	  autoplay: true,
	  speed: 2000,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav',
	  focusOnSelect: false
	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  arrows: true,
	  centerMode: true,
	  focusOnSelect: false,
	  variableWidth: true
	});

	$(window).scroll(function() {
		var scrollTop = $(this).scrollTop();
		if(scrollTop > 45) {
			$('header').addClass('fixed');
			$('#to_top_btn').addClass('active');
		} else {
			$('header').removeClass('fixed');
			$('#to_top_btn').removeClass('active');
		}
	})

	$('#to_top_btn').click(function() {
		$('body').animate({scrollTop: 0}, 300);
	})
})