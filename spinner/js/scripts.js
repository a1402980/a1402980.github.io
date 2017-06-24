$(document).ready(function(){


  var music = new Audio('music/song.mp3');
  var i = 3;
  var started = "false";
  var bg = "old";
    $("img").click(function(){
      if (i < 0.2 && bg == "old") {
        $("body").css("background", "url('img/bg.gif')");
        bg = "new"
      }
      started = "true";
      if (i <= 0) {
        i = 3;
      }
        $(this).css("-webkit-animation", "spin "+i+"s infinite linear");
        if (i>0.1) {
          i = i - i/10;
        }
        console.log(i);
        music.play();
    });





    function slowDown() {

    var countdownTimer = setInterval(function() {
        if (started == "true" && i < 4 && i > 0) {
          i = i+0.1;
          $("#spinner").css("-webkit-animation", "spin "+(i)+"s infinite linear");
          console.log("slowed down: "+ i);
        }
        else if (i > 4) {
          i = 0;
          $("#spinner").css("-webkit-animation", "spin "+(i)+"s infinite linear");
        }



    }, 1000) //slowDown joka 10 sekuntia
  };
  slowDown();

});
