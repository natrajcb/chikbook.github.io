$('document').ready(function(){
	 $("a[href^='#']").on('click', function (e) {

			// prevent default anchor click behavior
			e.preventDefault();
			
			console.log($(window).width());
			
			// store hash
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 600, function () {

				// when done, add hash to url
				// (default click behaviour)
				window.location.hash = hash;
			});

		});
});