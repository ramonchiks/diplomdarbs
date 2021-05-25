$(document).ready(function(){

setTimeout(function() {
	writethis("After a lot of reflecting \n I have realised", ".story")
}, 2000)

	$(".story").click(function(){
	writethis("that all this \n theatre", ".story")
setTimeout(function(){
	$("#dzeks1").addClass("bounceInUp")
	$("#dzeks1").css("bottom", "-20%")
}, 1000)

	$(".story").click(function(){
		$(".story").css("margin-top", "15vh")
		writethis("really was about \n gaining some control \n in a chaotic world", ".story")
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
		$(".story").css("margin-top", "20vh")
		writethis("it feels", ".story")

	$(".story").click(function(){
		$(".story").css("font-size", "7vw")
		writethis("VERY", ".story")

	$(".story").click(function(){
		writethis("GOOD", ".story")

	$(".story").click(function(){
		$(".story").css("font-size", "5vw")
		writethis("to be in control \n of everything", ".story", function(){
			$(".zirnekliskratas, .zvaigznekratas, .pilelec, .chuskakratas, .zakislec, .zivsanim").css("animation-play-state", "paused")
		})
	

	$(".story").click(function(){
		writethis("but it isn't \n really possible", ".story", function(){
			$(".zirnekliskratas, .zvaigznekratas, .pilelec, .chuskakratas, .zakislec, .zivsanim").css("animation-play-state", "initial")
		})
		

	$(".story").click(function(){
		$(".story").css("display", "none")
		$(".story2").css("display", "block")
		writethis("and one can go \n a bit crazy trying", ".story2")

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

})