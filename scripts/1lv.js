$(document).ready(function(){
	writethis("Čau!", ".hello")

	$(".hello").click(function(){
		
		$(".hello").css("font-size", "5vw")
		$(".hello").css("height", "17%")
		$(".hello").css("margin-top", "12%")
		$(".hello").css("margin-bottom", "7%")
		writethis("Es gribu tev kaut ko pastāstīt. \n Vai tu klausīsies?", ".hello")
		$(".hello").css("cursor", "default")

		setTimeout(function(){
			$(".dummy").css("display", "block")
			$(".yes, .no").css("display", "inline-block")
			writethis("JĀ", ".yes")
		}, 2800)
		setTimeout(function(){
			writethis("NĒ", ".no")
		}, 3100)

	});


// apakšā: no yes/no uz attiecīgajiem rezultātiem


	$(".yes").click(function(){
		$(".dummy").css("display", "none")
		$(".ifyes").css("display", "block")
		writethis("Paldies :)", ".ifyes")
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
		$(".ifyes").html("palDies :(");
		$(".fons").css("background-color", "#03140D")
		$(".teksts").css("color", "#13FBA3")
		$("img").css("filter", "invert(100%)")
	});

//ceļojums sākas!!!

	$(".ifyes").click(function(){
		$(".story").css("display", "block");
		$(".ifyes").css("display", "none");
		$(".teksts").css("color", "#FADEE9")
		writethis("Es nekad neesmu pazinusi \n pasauli bez interneta", ".story")

	});

 	$(".story").click(function(){
 		$(".story").css("margin-top", "10%")
 		writethis("Mana paaudze bija \n  viena no pirmajām \n (ja ne pati pirmā) \n kas lielā mērā uzauga internetā", ".story")

 	$(".story").click(function(){
 		writethis("Man ir daudz \n  mīļu atmiņu \n par dažādiem nostaļģiskiem \n interneta nostūriem", ".story")

 	$(".story").click(function(){
 		$(".story").css("display", "none")
 		$(".storyMiddle").css("display", "block")
 		writethis("Atšķirībā no īstās dzīves, \n šeit tie nekad \n īsti nepazūd", ".storyMiddle")
 		setTimeout(function(){
 			$(".storyMiddle").css("opacity", "0.15")
 		}, 2100)

 	$(".storyMiddle").click(function(){
 		$(".storyMiddle").css("display", "none")
 		$(".story3").css("display", "block")
 		writethis("Laiktelpas noteikumi \n  tīkla telpā \n ir atšķirīgi", ".story3")

 	$(".story3").click(function(){
 		writethis("Es domāju, ka cilvēki \n vēl īsti nav aptvēruši, \n cik lielā mērā internets \n ir izmainīji pasauli", ".story3")

 	$(".story3").click(function(){
 		writethis("Man šķiet, \n  ka vēl ir par agru, \n lai tas būtu iespējams", ".story3")

 	$(".story3").click(function(){
 		writethis("Viena no lietām, \n ko patiešām \n pierādīja internets", ".story3")

 	$(".story3").click(function(){
 		$(".story3").css("margin-top", "9%")
 		writethis("ir tas, \n cik daudz vieglāk reizēm \n var būt parunāties \n ar pilnīgu svešinieku,", ".story3")

 	$(".story3").click(function(){
 		writethis("it sevišķi tad, \n ja viņam nekad \n nav jāieskatās acīs", ".story2")
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

