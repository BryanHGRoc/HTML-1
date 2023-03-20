var p5 = document.getElementById('p5');
var foto 
p5.addEventListener("click", function(){
	
foto = (Math.round(Math.random ()*10))+1;
	console.log (foto);
p5.setAttribute("src","img/foto/"+foto+".png");});