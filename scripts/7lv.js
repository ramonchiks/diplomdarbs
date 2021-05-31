$(document).ready(function(){

setTimeout(function() {
	writethis("Pēc pamatīgas domāšanas \n esmu sapratusi", ".story")
}, 2000)

	$(".story").click(function(){
	writethis("ka viss šis \n teātris", ".story")
setTimeout(function(){
	$("#dzeks1").addClass("bounceInUp")
	$("#dzeks1").css("bottom", "-20%")
}, 800)

	$(".story").click(function(){
		$(".story").css("margin-top", "15vh")
		writethis("lielā mērā bija \n par kontroles iegūšanu \n haotiskā pasaulē", ".story")
		setTimeout(function(){
			$("#pile").addClass("pileieksa")
			$("#zvaigzne").addClass("zvaigzneieksa")
			$("#zakis").addClass("zakisieksa")
			$("#zivs").addClass("zivsieksa")
			$("#zirneklis").addClass("zirneklisieksa")
			$("#chuska").addClass("chuskaieksa")
		},2000)

		setTimeout(function(){
			$("#pile").addClass("pilelec")
			$("#chuska").addClass("chuskakratas")
			$("#zvaigzne").addClass("zvaigzneiekratas")
			$("#zirneklis").addClass("zirneklisiekratas")
			$("#zakis").addClass("zakislec")
			$("#zivs").addClass("zivsanim")
		}, 3300)

		setTimeout(function(){
			$("#zvaigzne").removeClass("zvaigzneiekratas")
			$("#zvaigzne").addClass("zvaigznekratas")
		},3600)

		setTimeout(function(){
			$("#zirneklis").removeClass("zirneklisiekratas")
			$("#zirneklis").addClass("zirnekliskratas")
		},3700)

	$(".story").click(function(){
		$(".story").css("margin-top", "23vh")
		writethis("Visu kontrolēt ir", ".story")

	$(".story").click(function(){
		$(".story").css("margin-top", "20vh")
		$(".story").css("font-size", "7vw")
		writethis("ĻOTI", ".story")

	$(".story").click(function(){
		writethis("PATĪKAMI", ".story", function(){
			$(".zirnekliskratas, .zvaigznekratas, .pilelec, .chuskakratas, .zakislec, .zivsanim").css("animation-play-state", "paused")
		})


	$(".story").click(function(){
		$(".story").css("font-size", "5vw")
		writethis("taču tas \n īsti nav iespējams", ".story", function(){
			$(".zirnekliskratas, .zvaigznekratas, .pilelec, .chuskakratas, .zakislec, .zivsanim").css("animation-play-state", "initial")
		})
		

	$(".story").click(function(){
		$(".story").css("display", "none")
		$(".story2").css("display", "block")
		writethis("un cenšoties \n var mazliet sajukt prātā", ".story2")

		setTimeout(function(){
			$("#dzeks1").addClass("shake-horizontal")
		},800)

	})

	})

	})

	})

	})

	})
		
	})

})