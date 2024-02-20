function sim (){
	alert(" Pensei no Aquitando, que tal?")
}
    function desvia(t){
     var btn = t;
     btn.style.position = 'absolute';
     btn.style.bottom = geraPosicao(10, 90);
     btn.style.left = geraPosicao(10, 90);
     console.log("QUASE QUE VOCÊ CONSEGUE")
}
     randomNumber(0,100);

     function geraPosicao(min, max){
     	return (Math.random() * (max - min) + min) + "%";
     }