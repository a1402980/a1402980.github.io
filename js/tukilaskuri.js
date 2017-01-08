function c(){
  var audio = new Audio('music/kassa.mp3');
  var tuki = 500;
	var n=$('.c').attr('id');
    var c=n;

	$('.c').text(c);

	setInterval(function(){
		c--;
		if(c>=0){
			$('.c').text(c);
		}
        if(c==0){
            $('.c').text(n);
            var rahatekstina=$('.rahat').text();
            	var rahet= parseFloat(rahatekstina, 10);
            rahet=rahet + tuki;
            $('.rahat').text(rahet.toFixed(2)); //pyoristaa kahteen desimaaliin
            audio.play();
        }
	},1000);
}

// Start
c();

// Loop. intervallin pitaa olla yli 31000 jotta funktio lisaa tuen joka kerta
setInterval(function(){
	c();
},31010);
