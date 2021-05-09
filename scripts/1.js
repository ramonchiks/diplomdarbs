$(document).ready(function(){
	writethis("Hello!", ".hello")

	$(".hello").click(function(){

		writethis("I would like to tell you a story. \n Are you willing to listen?", ".hello")
		$(".hello").css("font-size", "5vw")

		$(".yes, .no").css("display", "inline-block")
		writethis1("YES", ".yes")
		writethis2("NO", ".no")
		
	});



	//$(".hello").click(function(){
	//	$(".hello").css("display", "none")
	//})

	/* $(".augsejaisteksts").mouseover(function(){
		$(".yesno, .yes, .no").css("display", "inline-block")
		writethis("YES", ".yes")
		writethis("NO", ".no")
	}) */

// apakšā: no yes/no uz attiecīgajiem rezultātiem


	$(".yes").click(function(){
		$(".ifyes").css("display", "inline")
		writethis("Thanks :)", ".ifyes")
		$(".yesno, .yes, .no, .hello").css("display", "none")
	});

	$(".no").click(function(){
		$(".ifno").css("display", "inline")
		writethis(":(", ".ifno")
		$(".yesno, .yes, .no, .hello").css("display", "none")
	});

	$(".ifyes").mouseover(function(){
		$(".ifyes").html("tHaNks :(");
	});

//ceļojums sākas!!!

	$(".ifyes").click(function(){
		$(".story").css("display", "block");
		$(".ifyes").css("display", "none");
		writethis("I have never lived \n in a world without the internet", ".story")

	});

 	$(".story").click(function(){
 		writethis("My generation was one of the first \n (if not the first) \n to grow up largely online", ".story")

 	$(".story").click(function(){
 		writethis("I have many fond memories \n of nostalgic corners of the web", ".story")

 	$(".story").click(function(){
 		writethis("Unlike in real life, \n here they never really disappear", ".story")

 	$(".story").click(function(){
 		writethis("The rules of time and space \n are different online", ".story")

 	$(".story").click(function(){
 		writethis("I don't think people realise \n quite how much the internet \n has changed the world", ".story")

 	$(".story").click(function(){
 		writethis("I don't think that's possible just yet", ".story")

 	$(".story").click(function(){
 		writethis("Among many other things, \n it gave a chance for people to realise", ".story")

 	$(".story").click(function(){
 		writethis("how much easier it can sometimes be \n to talk to a complete stranger,", ".story")

 	$(".story").click(function(){
 		writethis("especially if you never have \n to look them in the eye", ".story")

 	$(".story").click(function(){
 		$(".story").css("display", "none")

//te jānāk iekšā vektoru acīm

 	})

 	})

 	})

 	})

 	})

 	})

 	})

 	})

 	})

 	})



});

