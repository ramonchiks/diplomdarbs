var interval;
function writethis(text, element, callback) {
  var speed = 50
  var position = 0
  
  clearInterval(interval); // ja iepriekš kaut kas uzsākts - to apstādinam, pirms saākam jana teksta uzrakstīšanu
  $(element).html('') // idzest iepriekšējo saturu
  
  interval = setInterval(function(){
    if (position < text.length) {
      document.querySelector(element).innerHTML += text.charAt(position);
      position++;
    } else {
      clearInterval(interval);
      if(callback) {
        callback()
      }
    }
  }, speed)
}

var interval1;
function writethis1(text, element, callback) {
  var speed1 = 50
  var position1 = 0
  
  clearInterval(interval1); // ja iepriekš kaut kas uzsākts - to apstādinam, pirms saākam jana teksta uzrakstīšanu
  $(element).html('') // idzest iepriekšējo saturu
  
  interval1 = setInterval(function(){
    if (position1 < text.length) {
      document.querySelector(element).innerHTML += text.charAt(position1);
      position1++;
    } else {
      clearInterval(interval1);
      if(callback) {
        callback()
      }
    }
  }, speed1)
}



var interval2;
function writethis2(text, element) {
  var speed2 = 50
  var position2 = 0
  
  clearInterval(interval2); // ja iepriekš kaut kas uzsākts - to apstādinam, pirms saākam jana teksta uzrakstīšanu
  $(element).html('') // idzest iepriekšējo saturu
  
  interval2 = setInterval(function(){
    if (position2 < text.length) {
      document.querySelector(element).innerHTML += text.charAt(position2);
      position2++;
    } else {
      clearInterval(interval2);
    }
  }, speed2);
}