function ostaOlut(){
  var audio = new Audio('music/juo2.mp3');

  var hinta = 23.99;

  var jano1 = 1;
  var alykkyys1 = 1;
  var hupi1 = 1;


  var janotekstina=$('#jano').text();
  jano2= parseInt(janotekstina, 10);
  if (jano2==5) {
    jano1=0;
  }
  jano2=jano2+jano1;
  $('#jano').text(jano2.toFixed());


  var alykkyystekstina=$('#alykkyys').text();
  alykkyys2= parseInt(alykkyystekstina, 10);
  if (alykkyys2==0) {
    alykkyys1=0;
  }
  alykkyys2=alykkyys2-alykkyys1;
  $('#alykkyys').text(alykkyys2.toFixed());


  var hupitekstina=$('#hupi').text();
  hupi2= parseInt(hupitekstina, 10);
  if (hupi2==5) {
    hupi1=0;
  }
  hupi2=hupi2+hupi1;

  $('#hupi').text(hupi2.toFixed());


  var rahatekstina=$('.rahat').text();
  var rahet= parseFloat(rahatekstina, 10);
  rahet=rahet - hinta;
  $('.rahat').text(rahet.toFixed(2)); //pyoristaa kahteen desimaaliin
  audio.play();
}

function ostaNuudeli(){
  var audio = new Audio('music/nuudeli.mp3');
  var audio2 = new Audio('music/error.mp3');
  var hinta = 1.99;
  var nalka1 = 1;
  var jano1 = 1;

  var nalkatekstina=$('#nalka').text();
  nalka2= parseInt(nalkatekstina, 10);

  var janotekstina=$('#jano').text();
  jano2= parseInt(janotekstina, 10);
  if (nalka2==5) {
    nalka1=0;
  }
  if (jano2==0) {
    jano1=0;
  }
  nalka2=nalka2+nalka1;
  jano2=jano2-jano1;
  $('#nalka').text(nalka2.toFixed());
  $('#jano').text(jano2.toFixed());

  var rahatekstina=$('.rahat').text();
  var rahet= parseFloat(rahatekstina, 10);
  rahet=rahet - hinta;
  $('.rahat').text(rahet.toFixed(2)); //pyoristaa kahteen desimaaliin
  audio.play();
}


function ostaKirja(){
  var audio = new Audio('music/hmm.mp3');
  var audio2 = new Audio('music/error.mp3');
  var hinta = 45.50;
  var alykkyys1 = 1;

  var alykkyystekstina=$('#alykkyys').text();
  alykkyys2= parseInt(alykkyystekstina, 10);
  if (alykkyys2==5) {
    audio2.play();
    return;
  }
  alykkyys2=alykkyys2+alykkyys1;
  $('#alykkyys').text(alykkyys2.toFixed());

  var rahatekstina=$('.rahat').text();
  var rahet= parseFloat(rahatekstina, 10);
  rahet=rahet - hinta;
  $('.rahat').text(rahet.toFixed(2)); //pyoristaa kahteen desimaaliin
  audio.play();
}
