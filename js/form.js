var link = document.querySelector(".btn-search-hotel");
var popup = document.querySelector(".main-form");

link.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.toggle("main-form-show");
});