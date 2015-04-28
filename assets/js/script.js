$(window).load(function() {
	$(".se-pre-con").fadeOut(2000);;
})

$(document).ready(function() {

/*$('.container').waypoint(function() {})*/

var menu_height = $('.menu').outerHeight() - 1 // FOR TOP BAR. REMOVE IF CHANGING TO BOTTOM BAR

setTimeout(function() {
	$('#logod').fadeIn(2000);
}, 2500);

var menu_activate = function(x){
/*	$('.menu ul li#'+x).siblings().each( function() {
		if (($(this).hasClass('clicked'))) {
			$(this).css('opacity','1')
			// $('.menu ul li#'+x).siblings().css('opacity', '0.5')
		} else {
			$('.menu ul li#'+x).siblings().css('opacity', '0.5')
		}
	})*/
	$('.menu ul li#'+x).siblings().each(function() {
		if ($(this).hasClass('hover')) {
			$(this).removeClass('hover')
		}
		if ($(this).hasClass('activated')) {
			$(this).removeClass('activated')
		}
	})
	$('.menu ul li#'+x).addClass('hover')
	$('.menu ul li#'+x).addClass('activated')
}


$('.container').waypoint(function(direction) {
    console.log($(this))
    console.log(direction)
  })

$('.container').waypoint(function(direction) {
	var curr_page = $(this).attr('element').id
	if (direction === 'down'){
		menu_activate(curr_page)
	    console.log(curr_page)
  }} , {offset: '50%'})

$('.container').waypoint(function(direction) {
	var curr_page = $(this).attr('element').id
	if (direction === 'up'){
	  	menu_activate(curr_page)
	    console.log(curr_page)
  }} , {offset: '-50%'});

/*$('.container').waypoint(function(direction) {
	var curr_page = $(this).attr('element').id
	if (direction === 'up' && curr_page == 'resume'){
	  	menu_activate(curr_page)
	    console.log(curr_page)
  }} , {offset: '50%'});*/

/*$('.container').waypoint(function(direction) {
	var curr_page = $(this).attr('element').id
	if (direction === 'up' and curr_page === 'resume'){
		menu_activate(curr_page)
	    console.log(curr_page)
  }
});*/



$('.menu ul li').click(function() {
	
	var corresponding_pg = $(this).attr('id')
	console.log(corresponding_pg)
	if (corresponding_pg == 'resume') {
		$('html, body').animate({
	      scrollTop: $('.container#'+corresponding_pg).offset().top - ($('.container').height() / 2)
	    }, 1500, 'easeInOutCubic')	
	} else {
		console.log($('.container#'+corresponding_pg).offset().top)
		$('html, body').animate({
	      scrollTop: $('.container#'+corresponding_pg).offset().top
	    }, 1500, 'easeInOutCubic');
	}
	if ($('.proj-item-window').hasClass('active')) {
		$('.proj-item-window').removeClass('active');
		if ($('body').hasClass('noscroll')) {
			$('body').removeClass('noscroll');
			}
		$('.proj-item-window').slideUp();
	}
});

$('.proj-item').click(function() {
	$('.proj-item-window').addClass('active');
	$('.proj-item-window').css('top', $(window).scrollTop())
	console.log($(this).attr('id'))
	$('.proj-item-window .proj-item .descript').html($(this).children('.descript').html());
	
	var x = $(this).find('li')
	var y = ''
	for (i = 0; i < x.length; i++) {
			y += '<li>'+x[i].innerHTML+'</li>'
	};
	$('.proj-item-window ul').html(y);
	setTimeout(	function() {
		$(".proj-item-window .slides").responsiveSlides();
	}, 1000);
	$('.proj-item-window').slideDown();
	$('body').addClass('noscroll');
});

$('.proj-item-window .close-window').click(function() {
	$('.proj-item-window').removeClass('active');
/*	('.proj-item-window ul').innerHTML = ''*/
	$('.proj-item-window').slideUp();
	$('body').removeClass('noscroll');
});


$('.content .proj-item').hover(function() {
	$(this).addClass('hover')
	console.log($(this).attr('id'))
	console.log('alsjda')
	/*$("#"+$(this).attr('id') +" .slides").responsiveSlides({auto: true});*/
}, function() {
	$(this).removeClass('hover') //broke it here
	/*$("#"+$(this).attr('id') +" .slides").responsiveSlides({auto: false});*/
});


$('.menu ul li').hover(function() {
	$(this).addClass('hover')
}, function() {
	if (!($(this).hasClass('activated')))
		{$(this).removeClass('hover')} //broke it here
	/*$("#"+$(this).attr('id') +" .slides").responsiveSlides({auto: false});*/
});


$('body').on({
    'mousewheel': function(e) {
        if ($('.proj-item-window').hasClass('active'))
        {e.preventDefault();
         e.stopPropagation();}
    }
})


});




/*var x = $('#four.proj-item').find('li').contents()*/

/*for (i = 0; i < x.length; i++) {console.log(x[i].innerHTML)}*/

/*var x = $('#four.proj-item').find('li').contents().each(function () {$('.proj-item-window ul').append('<li>'+$(this)+'</li>')})*/