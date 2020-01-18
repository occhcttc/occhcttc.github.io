window.onscroll = function () { updateSticky() }; // check if nav bar should be sticky every time the user scrolls

// Get the HTML element fot the nav bar
var navbarClass = document.getElementsByClassName("nav-bar");
var navbar = navbarClass[0];

var sticky = navbar.offsetTop;

function updateSticky() {
	if (window.pageYOffset >= sticky) navbar.classList.add("sticky"); // add the sticky class if window goes past nav bar
	else navbar.classList.remove("sticky");                           // remove the sticky class otherwise
}

function navbarToggle() {
	console.log("boibioio")
	if (!navbar.classList.contains("toggle")) navbar.classList.add("toggle");
	else navbar.classList.remove("toggle");

}