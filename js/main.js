document.addEventListener("DOMContentLoaded", function(){
var elem = document.querySelector('.burger-menu');
document.querySelector('.burger-menu__block').classList.toggle("toleft")
listener = document.querySelector('.burger-menu__block').addEventListener("transitionend",function() {
	document.querySelector("body").addEventListener('click', function(){
		document.querySelector('.burger-menu__block').classList.toggle("toright");
		//document.querySelector('.burger-menu__block').classList.toggle("toleft");
		setTimeout(function(){
			elem.classList.toggle("toleft");
			elem.classList.toggle("toright")}
		,100);
		console.log("kok");
	});
	
}); 
//document.querySelector('.burger-menu__block').removeEventListener("transitionend", listener, false);

});
function showMenu(){
	var elem = document.querySelector('.burger-menu');
		elem.classList.toggle("toleft");
		setTimeout(
			document.querySelector('.burger-menu__block').classList.toggle("toright")
		,1000)
}
