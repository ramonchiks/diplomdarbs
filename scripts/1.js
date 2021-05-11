$(document).ready(function(){
	writethis("Hello!", ".hello")

	$(".hello").click(function(){
		
		$(".hello").css("font-size", "5vw")
		$(".hello").css("height", "17%")
		$(".hello").css("margin-top", "12%")
		$(".hello").css("margin-bottom", "7%")
		$(".yes, .no").css("display", "inline-block")
		writethis("I would like to tell you a story. \n Are you willing to listen?", ".hello", function(){
			writethis1("YES", ".yes", function(){
				writethis2("NO", ".no")
			})
		}
		
		)
		
	});


// apakšā: no yes/no uz attiecīgajiem rezultātiem


	$(".yes").click(function(){
		$(".ifyes").css("display", "block")
		writethis("Thanks :)", ".ifyes")
		$(".yesno, .yes, .no, .hello").css("display", "none")
	});

	$(".no").click(function(){
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
 		$(".acis").css("display", "block")
 		$(".temp").css("display", "block")
 		$("img").css("display", "none")

//te jānāk iekšā vektoru acīm

 	$(".temp").click(function(){
 		$(".story2").css("display", "block")
 		writethis("Thirteen is just a \n generally horrible age to be", ".story2")
 		$(".acis").css("margin-top", "7%")
 		$(".temp").css("display", "none")

 	$(".story2").click(function(){
 		writethis("Changes happen faster \n than you can grasp them happening", ".story2")

 	$(".story2").click(function(){
 		writethis("You become so sickeningly aware \n of yourself in ways you never thought \n were possible before", ".story2")

 	$(".story2").click(function(){
 		writethis(". . .", ".story2")

 	$(".story2").click(function(){
 		writethis("Being seen was truly the last thing \n I wanted at the time", ".story2")

 	$(".story2").click(function(){
 		writethis("The world had suddenly become \n so painful and gross", ".story2")

 	$(".story2").click(function(){
 		$(".story2").css("display", "none")
 		$(".story3").css("display", "block")
 		writethis("and I wanted out", ".story3")

 	})

 	})

 	})

 	})
 
 	})

 	})

 	})

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

