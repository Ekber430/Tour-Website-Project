
let zoomIn = document.querySelectorAll(".fa-magnifying-glass-plus");
let zoomMenu = document.getElementById("zoomIn");
let closeZoom = document.getElementById("closeZoom");

let zoomImageBox = document.getElementById("zoomImageBox");
let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
let slide3 = document.getElementById("slide3");
let slide4 = document.getElementById("slide4");
let slide5 = document.getElementById("slide5");
let slide6 = document.getElementById("slide6");
let slide7 = document.getElementById("slide7");

let img = document.getElementById("img");

img.style.display = "none";


zoomIn.forEach(button =>{
    button.addEventListener('click', ()=>{
        zoomMenu.style.display = "flex";
    })
});

closeZoom.addEventListener("click", ()=>{
    zoomMenu.style.display = "none";
});

slide1.addEventListener("click", ()=>{
        img.classList.remove("image-active");
        img.setAttribute("src", "./images/gallery-1.jpg");
        img.setAttribute("alt", "gallery-1");
        img.classList.add("image-active");
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.zIndex = "20";
});

slide2.addEventListener("click", ()=>{
    img.classList.remove("image-active");
    img.setAttribute("src", "./images/gallery-2.jpg");
    img.setAttribute("alt", "gallery-2");
    img.classList.add("image-active");
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.zIndex = "20";
});

slide3.addEventListener("click", ()=>{
    img.classList.remove("image-active");
    img.setAttribute("src", "./images/gallery-3.jpg");
    img.setAttribute("alt", "gallery-3");
    img.classList.add("image-active");
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.zIndex = "20";
});

slide4.addEventListener("click", ()=>{
    img.classList.remove("image-active");
    img.setAttribute("src", "./images/gallery-4.jpg");
    img.setAttribute("alt", "gallery-4");
    img.classList.add("image-active");
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.zIndex = "20";
});

slide4.addEventListener("click", ()=>{
    img.classList.remove("image-active");
    img.setAttribute("src", "./images/gallery-4.jpg");
    img.setAttribute("alt", "gallery-4");
    img.classList.add("image-active");
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.zIndex = "20";
});

slide5.addEventListener("click", ()=>{
    img.classList.remove("image-active");
    img.setAttribute("src", "./images/gallery-5.jpg");
    img.setAttribute("alt", "gallery-5");
    img.classList.add("image-active");
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.zIndex = "20";
});

slide6.addEventListener("click", ()=>{
    img.classList.remove("image-active");
    img.setAttribute("src", "./images/gallery-6.jpg");
    img.setAttribute("alt", "gallery-6");
    img.classList.add("image-active");
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.zIndex = "20";
});

slide7.addEventListener("click", ()=>{
    img.classList.remove("image-active");
    img.setAttribute("src", "./images/gallery-7.jpg");
    img.setAttribute("alt", "gallery-7");
    img.classList.add("image-active");
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.zIndex = "20";
});