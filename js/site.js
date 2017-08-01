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

	$('#thankyou-close').on('click', function(){;
	    $('#newsletter-bg').removeClass('open');
	    $('#thankyou').addClass('fadeout');
	});
	
	$('#form').one('submit',function(){
	        var inputq1 = encodeURIComponent($('#signup-email').val());
	        var q1ID = "entry.2808744";
	
	        var baseURL = 'https://docs.google.com/a/ryanrosewine.com/forms/d/e/1FAIpQLScDWEZrcYpw18Kbpy2GFPb5-m1uODiKtln_foJ3x2nyllPTFA/formResponse?';
	        var submitRef = '&submit=Submit';
	        var submitURL = (baseURL + q1ID + "=" + inputq1 + submitRef);
	        console.log(submitURL);
	        $(this)[0].action=submitURL;
	        $('#newsletter').addClass('fadeout');
	        $('#thankyou').addClass('show');
	    });
	

	

});