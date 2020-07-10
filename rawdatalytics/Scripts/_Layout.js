window.onscroll = function () {
    myFunction()
};

var navbar = document.getElementById("nav1");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("navbar-fixed-top")
    } else {
        navbar.classList.remove("navbar-fixed-top");
    }
}