$(document).ready(function(){

		$(".jautajums").css("mix-blend-mode", "screen")

		$(".jautajumsbox").mouseover(function(){
			$(".infobox").css("opacity", "1")
			$(".jautajums2").css("opacity", "1")
		})

		$(".jautajumsbox").mouseleave(function(){
			$(".infobox").css("opacity", "0")
			$(".jautajums2").css("opacity", "0")
		})

		$(".lv2").mouseover(function(){
			$(".lv2").css("opacity", "1")

		})

		$(".lv2").mouseleave(function(){
			$(".lv2").css("opacity", "0")

		})


		$(".eng2").mouseover(function(){
			$(".eng2").css("opacity", "1")

		})

		$(".eng2").mouseleave(function(){
			$(".eng2").css("opacity", "0")

		})



	});
