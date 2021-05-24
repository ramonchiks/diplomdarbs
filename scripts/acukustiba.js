$(document).ready(function(){
  $("body").mousemove(function(event) {
    var screenw = $( window ).width();
    $(".ieksa").each(function() {
      var ieksa = $(this);
      var eyeposx = (ieksa.offset().left) + (ieksa.width() / 2);
      var eyeposy = (ieksa.offset().top) + (ieksa.height() / 2);
      ieksa.css({
        'transform': 'translateX(' + (event.pageX-eyeposx)/20 + 'px) translateY(' + (event.pageY-eyeposy)/17 + 'px)'
      });
      // console.log(this, eyeposy, (event.pageY-eyeposy)/20)
    })
  });
})