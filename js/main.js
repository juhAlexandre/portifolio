//
function showDetails(e) {
	var title = e.getAttribute("data-title");
	var medium = e.getAttribute("data-medium");
	// alert(title + " " + medium);
	console.log(title);
	// $('#title').html=title;
	$('#artCaption').html('<h2>' + title + '</h2> <h3>' + medium + '</h3>');

}

//start
$(document).ready(function(){

	//artwork page: switch photo on right side
	$(".subthumb").on('click', function() {
		var url = $(this).css('background-image');
		url = url.replace(/"/g, '').replace('url(','').replace(')','');
		console.log(url);
	  $( "#photo" ).attr( "src", url );
	});


	
	
	//left nav: smooth scroll
	$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
	});

	// //right nav: social hovers

	$(".icon-social").mouseover(function(){
		let nomeClasse = $(this).attr('class').split(' ');
		$(this).addClass(nomeClasse[1]+'Hover');	
	});
	$(".icon-social").mouseleave(function(){
		let nomeClasse = $(this).attr('class').split(' ');
			$(this).removeClass(nomeClasse[1]+'Hover');
	});


	//work section: overlay effect
	$( ".tile" ).mouseenter(function() {
	  $(".overlay", this).fadeIn(300);
	}).mouseleave(function() {
	  $(".overlay", this).fadeOut(300);
	});

});
