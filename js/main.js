document.addEventListener("DOMContentLoaded", function(){
var elem = document.querySelector('.burger-menu');

listener = document.querySelector('.burger-menu__block').addEventListener("transitionend",function() {
	document.querySelector("body").addEventListener('click', function(){
		document.querySelector('.burger-menu__block').classList.remove("toright");
		setTimeout(
			elem.classList.remove("toleft")
		,1000);
		console.log("kok");
	});
	
}); 
document.querySelector('.burger-menu__block').removeEventListener("transitionend", listener, false);

});
function showMenu(){
	var elem = document.querySelector('.burger-menu');
		elem.classList.toggle("toleft");
		setTimeout(
			document.querySelector('.burger-menu__block').classList.toggle("toright")
		,1000)
}
