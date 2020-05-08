$(document).ready(function() {
	$(".megamenu").on("click", function(e) {
		e.stopPropagation();
	});
});

// $(function () { 
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 50) { 
//         	$('.navbar').attr('src', 'http://167.172.224.226/images/logo-white.png');
//         	$('.navbar').classList.add("fixed-top");
//         } else {
//         	
//         }
//     })
// });

$(document).scroll(function(e){
    var scrollTop = $(document).scrollTop();
    if(scrollTop > 70){
        $('.navbar').removeClass('static-top').addClass('fixed-top');
        $('.navbar').addClass('bg-dark-theme');
        $('.navbar').addClass('pt-4');


        $('.navbar-brand img').attr('src', 'http://167.172.224.226/images/logo-white.png');


    } else {
        $('.navbar').removeClass('fixed-top').addClass('static-top');
        $('.navbar').removeClass('bg-dark-theme');
        $('.navbar').removeClass('pt-4');
        $('.navbar-brand img').attr('src', 'http://167.172.224.226/images/logo.png');
    }
});


