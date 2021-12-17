const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}



var el_up = document.getElementById("UP");
var el_down = document.getElementById("DOWN");

window.onload=Fun
function Fun() {
	var width = window.innerWidth;
	var height=window.innerHeight;
	if(width>height){}
	else{}
}
