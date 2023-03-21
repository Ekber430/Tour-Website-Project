
let navbar = document.getElementById("headerDownMainDiv");

window.addEventListener("scroll", ()=>{
    if(window.scrollY>110){
        navbar.classList.add("fixed");
    }
    else if(window.scrollY<110){
        navbar.classList.remove("fixed");
    }
});