particlesJS.load('particles-js', 'https://cdn.rawgit.com/squalvj/resume/gh-pages/js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
var temporary = $(".c1")

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


jQuery(document).ready(function($) {
	var foo = getParameterByName('status');
	if (foo == 'berhasil'){
		alert("Pesan anda berhasil terkirim");
	}
	$(".link-ex").hover(function() {
		var e = $(this).siblings('.tag-ex').children('div')
	    e.velocity({"textShadowBlur": 20});
	}, function() {
		var e = $(this).siblings('.tag-ex').children('div')
	    e.velocity({"textShadowBlur": 0});
	});

	function skills(){
		$(".lbl")
	    .velocity("transition.slideUpIn", {delay:700, stagger: 250 });
	    $(".fill-1").velocity({width:"80%"},{delay:800});
     	$(".fill-2").velocity({width:"70%"},{delay:850});
     	$(".fill-3").velocity({width:"30%"},{delay:900});
     	$(".fill-4").velocity({width:"40%"},{delay:950});
     	$(".fill-5").velocity({width:"20%"},{delay:1000});
     	$("body").velocity({backgroundColor:"#3d5980"});
     	$(".desc").velocity({color:"#fff"})
     	$(".desc a").velocity({color:"#fff"})
     	$(".desc a").velocity({borderColor:"#fff"})
     	$(".tip-nav").velocity({color:"#fff"})
	}

	function unskill(){
		$("body").velocity({backgroundColor:"#dee5e6"});
		$(".desc").velocity({color:"#333"})
     	$(".progress").velocity({width:"0%"});
     	$(".tip-nav").velocity({color:"#333"})
     	$(".desc a").velocity({color:"#333"})
 		$(".desc a").velocity({borderColor:"#333"})
	}

	$( ".side-nav li" ).click(function() {
	unskill();
	$(this).addClass('active').siblings().removeClass('active');
	var section = $(this).data('section');
	var e = $(".content").find('.'+section)
	muncul(temporary,e);
	temporary = e;
});

	function muncul(element, element2){

		element.velocity("transition.slideLeftBigOut");
		if (element2.hasClass('c3')){
			skills();
		}

		if (element2.hasClass('c5')){
			$("body").velocity({backgroundColor:"#3498db"});
			$(".desc").velocity({color:"#fff"})
     		$(".tip-nav").velocity({color:"#fff"})
     		$(".desc a").velocity({color:"#fff"})
     		$(".desc a").velocity({borderColor:"#fff"})
		}
		element2.velocity("transition.slideLeftBigIn",{delay:750});
		
	}

	var lFollowX = 0,
	    lFollowY = 0,
	    x = 0,
	    y = 0,
	    friction = 1 / 20;
	function moveBackground() {
		x += (lFollowX - x) * friction;
		y += (lFollowY - y) * friction;

		translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

		$('.gua').css({
		'-webit-transform': translate,
		'-moz-transform': translate,
		'transform': translate
		});
		window.requestAnimationFrame(moveBackground);
	}
	$(window).on('mousemove click', function(e) {
		var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
		var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
		lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
		lFollowY = (10 * lMouseY) / 100;
	});

moveBackground();

  var typed2 = new Typed('.c1 p', {
    strings: ['Wubba lubba dub dub everyone :)','you can call me adit, i am a full stack developper.^1000<br> I have strong passion in programming especially at PHP and Javascript. I like doing web things, such as templating, or make a dope animation using Tweenmax framework, and of course potato, potato is love.'],
    typeSpeed: 40,
 	backSpeed: 10,
    loop:false
  });
});  