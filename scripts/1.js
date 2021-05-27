$(document).ready(function(){
	writethis("Hello!", ".hello")

	$(".hello").click(function(){
		
		$(".hello").css("font-size", "5vw")
		$(".hello").css("height", "17%")
		$(".hello").css("margin-top", "12%")
		$(".hello").css("margin-bottom", "7%")
		writethis("I would like to tell you a story. \n Are you willing to listen?", ".hello")
		$(".hello").css("cursor", "default")

		setTimeout(function(){
			$(".dummy").css("display", "block")
			$(".yes, .no").css("display", "inline-block")
			writethis("YES", ".yes")
		}, 3500)
		setTimeout(function(){
			writethis("NO", ".no")
		}, 3900)

	});


// apakšā: no yes/no uz attiecīgajiem rezultātiem


	$(".yes").click(function(){
		$(".dummy").css("display", "none")
		$(".ifyes").css("display", "block")
		writethis("Thanks :)", ".ifyes")
		$(".yesno, .yes, .no, .hello").css("display", "none")
	});

	$(".no").click(function(){
		$(".dummy").css("display", "none")
		$(".ifno").css("display", "block")
		writethis(":(", ".ifno")
		$(".yes, .no, .hello").css("display", "none")
		$(".fons").css("background-color", "#03140D")
		$(".ifno").css("color", "#13FBA3")
		$("img").css("filter", "invert(100%)")
	});

	$(".ifyes").mouseover(function(){
		$(".ifyes").html("tHaNks :(");
		$(".fons").css("background-color", "#03140D")
		$(".teksts").css("color", "#13FBA3")
		$("img").css("filter", "invert(100%)")
	});

//ceļojums sākas!!!

	$(".ifyes").click(function(){
		$(".story").css("display", "block");
		$(".ifyes").css("display", "none");
		$(".teksts").css("color", "#FADEE9")
		writethis("I have never lived \n in a world \n without the internet", ".story")

	});

 	$(".story").click(function(){
 		$(".story").css("margin-top", "10%")
 		writethis("My generation was \n  one of the first \n (if not the first) \n to grow up largely online", ".story")

 	$(".story").click(function(){
 		writethis("I have many \n  fond memories \n of nostalgic corners \n of the web", ".story")

 	$(".story").click(function(){
 		$(".story").css("display", "none")
 		$(".storyMiddle").css("display", "block")
 		writethis("Unlike in real life, \n here they never \n really disappear", ".storyMiddle")
 		setTimeout(function(){
 			$(".storyMiddle").css("opacity", "0.15")
 		}, 2100)

 	$(".storyMiddle").click(function(){
 		$(".storyMiddle").css("display", "none")
 		$(".story3").css("display", "block")
 		writethis("The rules \n  of time and space \n are different online", ".story3")

 	$(".story3").click(function(){
 		writethis("I don't think people realise \n quite how much the internet \n has changed the world", ".story3")

 	$(".story3").click(function(){
 		writethis("I don't think \n  that's possible \n just yet", ".story3")

 	$(".story3").click(function(){
 		writethis("Among many other things, \n it gave a chance for people \n to realise", ".story3")

 	$(".story3").click(function(){
 		$(".story3").css("margin-top", "9%")
 		writethis("how much easier \n it can sometimes be \n to talk to a \n complete stranger,", ".story3")

 	$(".story3").click(function(){
 		writethis("especially \n if you never have \n to look them in the eye", ".story2")
 		$(".story3").css("display", "none")
 		$(".story2").css("display", "block")

 	$(".story").click(function(){
 		$(".story").css("display", "none")
 		$(".acis").css("display", "block")
 		$(".temp").css("display", "block")
 		$("img").css("display", "none")


 	});

 	});

 	});

 	});

 	});

 	});

 	});

 	});

 	});

 	});






});

