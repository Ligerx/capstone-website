$(function() {
    let heroHeight = $('.hero').height();

    /* smooth scrolling */
    $('a[href*=\\#]:not([href=\\#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

    /* nav bar color change */
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > heroHeight) {
			$(".mainnav").addClass("mainnav-colored");
		}
		else{
			$(".mainnav").removeClass("mainnav-colored");
		}
	});
});
