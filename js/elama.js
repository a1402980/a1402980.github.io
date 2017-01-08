function janottaa() {

    var countdownTimer = setInterval(function() {

      var janotekstina=$('#jano').text();
      jano2= parseInt(janotekstina, 10);
      if (jano2==0) {

      }
      else {
        jano2=jano2-1;
      }
      $('#jano').text(jano2.toFixed());


    }, 10000); //janottaa joka 10 sekuntia
  }
  janottaa();



  function nalka() {

      var countdownTimer = setInterval(function() {

        var nalkatekstina=$('#nalka').text();
        nalka2= parseInt(nalkatekstina, 10);
        if (nalka2==0) {

        }
        else {
          nalka2=nalka2-1;
        }
        $('#nalka').text(nalka2.toFixed());


      }, 12000); //nälkä joka 12 sekuntia
    }
    nalka();


    function hupilaskee() {

        var countdownTimer = setInterval(function() {

          var hupitekstina=$('#hupi').text();
          hupi2= parseInt(hupitekstina, 10);
          if (hupi2==0) {

          }
          else {
            hupi2=hupi2-1;
          }
          $('#hupi').text(hupi2.toFixed());


        }, 15000); //nälkä joka 15 sekuntia
      }
      hupilaskee();


      function alykkyyslaskee() {

          var countdownTimer = setInterval(function() {

            var alykkyystekstina=$('#alykkyys').text();
            alykkyys2= parseInt(alykkyystekstina, 10);
            if (alykkyys2==0) {

            }
            else {
              alykkyys2=alykkyys2-1;
            }
            $('#alykkyys').text(alykkyys2.toFixed());


          }, 30000); //nälkä joka 30 sekuntia
        }
        alykkyyslaskee();
