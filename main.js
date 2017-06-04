//Плавная прокрутка к определённой секции по клику на меню навигации

$('.menu__list').on('click', 'a', function(event){
	event.preventDefault();
	var link = $(this).attr('href'); /*там лежит только строка сназванием айди а не блок*/
	//CONSOLE.LOG(link);
	var distanse = $(link).offset().top; /*бывает только топ и лефт*/
	$('html, body').animate({ /*боди для хрома, штмл для мозилы*/
		scrollTop: distanse /* скролить от верха и к какой-то позиции, через ЗАПЯТУЮ может быть несколько свойств*/
	}, 500); /*какие свойства анимировать и скорость - не больше 1.5 - 2 сек*/
});

/*
$(document).ready(function(){
	$('.ca-gallery:has(.btnnn)').css('background', 'red');
});
*/

/* полупрозрачность фиксированного меню*/

$(window).scroll(function(){
	var dist = $('#about_us').offset().top;
	//console.log('window ' + $(window).scrollTop() + 'dist ' + dist);
	if ($(window).scrollTop() >= dist){
		$('.main-menu').css('background', 'rgba(255,255,255,0.7)');
	} else {
		$('.main-menu').css('background', 'transparent');
	}
});
/*else для того чтоб вернуть визначальное состояние когда назад вверх поднимемся*/
/* лучше было хедер сделать отдельно и ему делать позишн фиксд*/





/* картинка с малинкой появляется первый и второй способ */


/*
$(window).scroll(function(){
	var distHide = $('#about_us').offset().top;
	if ($(window).scrollTop() >= distHide){
		$('.about-img').css('display', 'block');
	} else {
		$('.about-img').css('display', 'none');
	}
});
*/

$('.about-img').hide();

$(window).scroll(function(){
 var berry = $('#about_us').offset().top;
 if ($(window).scrollTop() > berry){
  $('.about-img').show(500);
 }
 else {
  $('.about-img').hide();
 }
});





/*class active подсветка на активный пункт меню как на ховер*/

$(window).scroll(function(){
	var currentPosition = $(window).scrollTop();
	//var distBorderHome = $('#home').offset().top;
	var distBorderAbout = $('#about_us').offset().top;
	var distBorderSevices = $('#services').offset().top;
	var distBorderGallery = $('#gallery').offset().top;
	var distBorderBlog = $('#blog').offset().top;
	var distBorderContact = $('#contact').offset().top;

	if (currentPosition < distBorderAbout){
		$('#homeLi').css('borderTop', '4px solid #ff6033');
	} else {
		$('#homeLi').css('borderTop', '4px solid transparent');
	}

	if (currentPosition >= distBorderAbout && currentPosition < distBorderSevices){
		$('#aboutLi').css('borderTop', '4px solid #ff6033');
	} else {
		$('#aboutLi').css('borderTop', '4px solid transparent');
	}

	if (currentPosition >= distBorderSevices && currentPosition < distBorderGallery){
		$('#servicesLi').css('borderTop', '4px solid #ff6033');
	} else {
		$('#servicesLi').css('borderTop', '4px solid transparent');
	}

	if (currentPosition >= distBorderGallery && currentPosition < distBorderBlog){
		$('#galleryLi').css('borderTop', '4px solid #ff6033');
	} else {
		$('#galleryLi').css('borderTop', '4px solid transparent');
	}

	if (currentPosition >= distBorderBlog && currentPosition < distBorderContact){
		$('#blogLi').css('borderTop', '4px solid #ff6033');
	} else {
		$('#blogLi').css('borderTop', '4px solid transparent');
	}

	if (currentPosition >= distBorderContact){
		$('#contactLi').css('borderTop', '4px solid #ff6033');
	} else {
		$('#contactLi').css('borderTop', '4px solid transparent');
	}

});
