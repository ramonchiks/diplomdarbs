function writethis(text, element) {
	$(element).html('') // idzest iepriekšējo saturu
	typeWriter(text, element, 0); // izsaukt rekursīvu funkciju, kura raksta burtu pa burtam
}

function typeWriter(text, element ,position) {
	var speed = 50 
  if (position < text.length) {
    document.querySelector(element).innerHTML += text.charAt(position);
    position++;
    setTimeout(function(){
			typeWriter(text, element, position)
		}, speed);
  }
}