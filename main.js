$(function(){  //  shorthand
 $('#monster').hide().fadeIn( 3000 );
});
$(function(){  //  shorthand
 $('.buttonon').hide().fadeIn( 6000 );
});


     $('#getting-started').countdown('2016/09/28', function(event) {
        $(this).html(event.strftime('J - %D'));
    });
    jQuery(document).ready(function($) {

        $(window).load(function() {
            $('#preloader').fadeOut('slow', function() {
                $(this).remove();
            });
        });

    });
    //scrollreaveal
    window.sr = ScrollReveal({
        duration: 2000
    });;

    sr.reveal('.foo', {
        duration: 400,
        delay: 0,
        opacity: 0
    }, 50);
sr.reveal('.artists-entity', {
    duration: 300,
    delay: 50,
    opacity: 0.6
});
sr.reveal('.time', {
    duration: 900,
    delay: 0,
    opacity: 0.6
});
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

jQuery(document).ready(function($){
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
});

new Vivus('keyhole',  {
    type: 'scenario',
    duration:50,
    animTimingFunction: Vivus.EASE,
    file: 'logo.svg',
     
    
}, function doDone(obj) {
    obj.el.classList.add('finished');
});
  
  
$('#content_wrapper').mousemove(function (e) {

    $('#move_me').animate({
        'left': -e.pageX + 15 + 'px'
    }, 0);

});

$('#content_wrapper').mousemove(function (e) {

    $('#move_me').animate({
        'right': -e.pageX + 155 + 'px'
    }, 0);

});

$('body').flowtype({
   minimum   : 500,
   maximum   : 1200,
   minFont   : 12,
   maxFont   : 30,
   fontRatio : 30
});


//langage select 
   var languageSelect = document.getElementById('LanguageSelect');
   var selectedLanguage = readCookie('language');
	
	if ((selectedLanguage == 'english') || (selectedLanguage == 'spanish') || (selectedLanguage == 'portuguese')) {
	$(".language select").val(selectedLanguage);
	var sel = $(".language select").val(selectedLanguage);
	if (selectedLanguage == 'english') {
           $(".english").css("display", "inline");
           $(".spanish").css("display", "none"); 
           $(".portuguese").css("display", "none"); 
        }else if (selectedLanguage =='spanish') {
           $(".english").css("display", "none");
           $(".spanish").css("display", "inline");
           $(".portuguese").css("display", "none");
        }else if (selectedLanguage =='portuguese') {
           $(".english").css("display", "none");
           $(".spanish").css("display", "none");
           $(".portuguese").css("display", "inline");
        }
    }

	$(".language select").bind('change', function() {
		//on change set cookie and...
		setCookie('language', this.value, 365);
		
		//change css depending on what is selected
        var sel = $(".language select").val();
        if (sel=='english') {
           $(".english").css("display", "inline");
           $(".spanish").css("display", "none");
           $(".portuguese").css("display", "none");
        }else if (sel=='spanish') {
           $(".english").css("display", "none");
           $(".spanish").css("display", "inline");
           $(".portuguese").css("display", "none"); 
        }else if (sel=='portuguese') {
           $(".english").css("display", "none");
           $(".spanish").css("display", "none");
           $(".portuguese").css("display", "inline"); 
        
        }
        

});

function saveLanguage(cookieValue)
{
    var sel = document.getElementById('LanguageSelect');
    setCookie('language', cookieValue, 365);
}

function setCookie(cookieName, cookieValue, nDays) {
    var today = new Date();
    var expire = new Date();

    if (nDays==null || nDays==0)
        nDays=1;

    expire.setTime(today.getTime() + 3600000*24*nDays);
    document.cookie = cookieName+"="+escape(cookieValue) + ";expires="+expire.toGMTString();
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

