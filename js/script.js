const burger = document.getElementById("menu-burger");
const menuBody = document.getElementById("menu-body");

if (burger && menuBody) {
	burger.addEventListener("click", function () {
		burger.classList.toggle("_active");
		menuBody.classList.toggle("_active");
	});
}