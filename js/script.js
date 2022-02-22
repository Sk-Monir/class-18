$(function(){

	/* hide,show,toggle,all show start*/
    $('.hide').click(function(){
        $('.h1').hide(3000);
    });

    $('.show').click(function(){
        $('.h1').show(3000);
    });
    $('.toggle').click(function(){
        $('.h1').toggle(3000);
    });

    $('.all').click(function(){
        $('*').show(3000);
    });
	$('p').click(function(){
        $(this).hide(3000);
    });
	/* hide,show,toggle,all show end*/
	 /* fadeIn,tfadeOut,fadeToggle,fadeTo Start*/ 
    $(".btn1").click(function(){
        $('.box1').fadeIn(1000);
        $('.box2').fadeIn(2000);
        $('.box3').fadeIn(3000);
    });
    $('.btn2').click(function(){
        $('.box1').fadeOut(1000);
        $('.box2').fadeOut(2000);
        $('.box3').fadeOut(3000);
    });
    $('.btn3').click(function(){
        $('.box1').fadeToggle(1000);
        $('.box2').fadeToggle(2000);
        $('.box3').fadeToggle(3000);
    });
    $('.btn4').click(function(){
        $('.box3').fadeTo(3000,0.5);
        $('.box2').fadeTo(2000,0.4);
        $('.box1').fadeTo(1000,0.3);
    });
    /* fadeIn,tfadeOut,fadeToggle,fadeTo End*/
	/* animate start*/
	$('.btn5').click(function(){
		$('.allBox').animate({
			width: '300px',
			height: '200px',
		},2000);
	});
	  
	/* animate end*/
	
	/* stop() start*/
	$('.btn6').click(function(){
		$('.allBox').stop();
	});
	/* stop() end*/
	
	/*Chaining() start*/
	$('.btn7').click(function(){
		$('.allBox').hide(2000).fadeIn(3000).animate({
			width:'400px',
		},5000);
	});
	/*Chaining() end*/
	
});