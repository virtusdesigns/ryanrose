jQuery(document).ready(function($){

	$(window).ready(function(){
	  setInterval(function(){ 
	    $('body').addClass("load")
	  }, 2000);
	
	});
	
	$('#newsletter-close').on('click', function(){
	    $('#newsletter-bg').removeClass('open');
	    $('#newsletter').removeClass('open');
	});

	$('#thankyou-close').on('click', function(){
	    $('#thankyou').removeClass('show');
	    $('#newsletter-bg').removeClass('open');
	});
	

	

	

});