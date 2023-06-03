const navbar = document.querySelector("#main-top");
const year = document.querySelector("#year");

window.addEventListener('scroll', function(){
    if(window.scrollY >= 530){
        navbar.style.position = 'fixed'
    }
    if(window.scrollY <= 530){
        navbar.style.position = 'absolute'
    }
})

