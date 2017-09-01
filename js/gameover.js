function gameover() {

    var countdownTimer = setInterval(function() {

      var nalkatekstina=$('#nalka').text();
      var nalka= parseInt(nalkatekstina, 10);

      var janotekstina=$('#jano').text();
      var jano= parseInt(janotekstina, 10);

      var hupitekstina=$('#hupi').text();
      var hupi= parseInt(hupitekstina, 10);

      var alykkyystekstina=$('#alykkyys').text();
      var alykkyys= parseInt(alykkyystekstina, 10);

      var terveystekstina=$('#terveys').text();
      var terveys= parseInt(terveystekstina, 10);
        
      var rahatekstina =$('.rahat').text();
      var rahat= parseInt(rahatekstina, 10);

      if (terveys==0) {
          window.location.href = 'gameover.html';
      }
        
      if (rahat < 0) {
          window.location.href = 'gameover.html';
      }

      if (nalka==0 || jano==0 || hupi==0 || alykkyys==0 && terveys>0) {

        var terveystekstina=$('#terveys').text();
        var terveys= parseInt(terveystekstina, 10);
        terveys=terveys-1;
        $('#terveys').text(terveys.toFixed());
      }

      if (nalka==5 && jano==5 & hupi==5 & alykkyys==5 && terveys<5) {

        var terveystekstina=$('#terveys').text();
        var terveys= parseInt(terveystekstina, 10);
        terveys=terveys+1;
        $('#terveys').text(terveys.toFixed());
      }
        
        //color stats when low
        $('.stat').each(function(){
              if (parseInt($(this).value) < 3) {
                  $(this).addClass('vilkkuva');
              }
              else{
                  $(this).removeClass('vilkkuva');
              }
        });


    }, 500); //tarkastaa joka 0.5 sekunti
  }
  gameover();
