function c(){
  var audio = new Audio('music/kassa.mp3');
  var vuokratekstina =$('.vuokra').text();
  var vuokre= parseFloat(vuokratekstina, 10);
	var n=$('.vuokrakuukausi').attr('id');
    var c=n;
    	var rahatekstina=$('.rahat').text();
      	var rahet= parseFloat(rahatekstina, 10);
	$('.vuokrakuukausi').text(c);

	setInterval(function(){
		c--;
		if(c>=0){
			$('.vuokrakuukausi').text(c);
		}
        if(c==0){
            $('.vuokrakuukausi').text(n);
            rahatekstina=$('.rahat').text();
            rahet= parseFloat(rahatekstina, 10);
            rahet=rahet - vuokre;
            $('.rahat').text(rahet.toFixed(2)); //pyoristaa kahteen desimaaliin
            audio.play();
            document.getElementById("vuokrakuukausi").setAttribute("id", "31");
        }
	},1000);
}

// Start
c();

// Loop. intervallin pitaa olla yli 31000 jotta funktio lisaa tuen joka kerta
setInterval(function(){
	c();
},21010);
