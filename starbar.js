!function ($) {
	$(document).ready(function() {

		var animatedCount = 0
		,	barCount = 0

		if( $('.starbars').length > 0 ){

			//store the total number of bars that need animating
			$('.starbars').each(function(){
				barCount += $(this).find('li').length
			})

			var barAnimation = setInterval(animateStarBar, 150)
			animateStarBar()

		}

		function animateStarBar(){

			$('.starbars li:in-viewport:not(".animated")').each(function(i){
				
				var element = $(this)
				,	percent = $(this).find('.the-bar').attr('data-width')
	
				setTimeout(
					function(){ 
						element
							.addClass('animated')

						element
							.find('.the-bar')
							.animate(
								{ 'width' : percent }
								, 1700
								, 'easeOutCirc'
								,function(){}
							)




						element.find('span strong').animate({
							'opacity' : 1
						}, 1400)

						////100% progress bar
						if(percent == '100'){
							element.find('span strong').addClass('full')
						}

						animatedCount++
					}
					, (i * 350)
				);
	
				

				if(animatedCount == barCount){
					clearInterval(barAnimation)
				}

			});

		}

	})
}(window.jQuery);