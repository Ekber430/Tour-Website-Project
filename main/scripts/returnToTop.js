
let returnToTop = document.getElementById("returnToTopButton");

window.addEventListener("scroll", ()=>{
    if(window.scrollY>600){
        returnToTop.classList.add("return-to-top-translate");
    }
    else if(window.scrollY<600){
        returnToTop.classList.remove("return-to-top-translate")
    }
});

returnToTop.addEventListener("click", ()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
})