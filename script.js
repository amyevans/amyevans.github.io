$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['home', 'about', 'portfolio', 'contact'],
		menu: '#nav',
	});

	$('.responsive').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
});

//Animate circles in Contact
$('.anim').hover(
	function() {
		$(this).animate({
			top: '-=10px'
		});
	},
	function() {
		$(this).animate({
			top: '+=10px'
		}, 'fast');
	}
);