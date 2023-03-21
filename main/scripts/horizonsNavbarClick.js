
let firstNavbar = document.getElementById("horizons-first-navbar");
let secondNavbar = document.getElementById("horizons-second-navbar");
let thirdNavbar = document.getElementById("horizons-third-navbar");

let firstBlock = document.getElementById("first-horizons-contact");
let secondBlock = document.getElementById("second-horizons-contact");
let thirdBlock = document.getElementById("third-horizons-contact");

let firstNavbarBorder = document.getElementById("horizon-navbar-border-first");
let secondNavbarBorder = document.getElementById("horizon-navbar-border-second");
let thirdNavbarBorder = document.getElementById("horizon-navbar-border-third");

firstNavbar.addEventListener('click', ()=>{
    firstBlock.style.zIndex = 3;
    secondBlock.style.zIndex = 2;
    thirdBlock.style.zIndex = 1;
    firstNavbarBorder.style.width = "100%";
    secondNavbarBorder.style.width = "0%";
    thirdNavbarBorder.style.width = "0%";
    firstNavbar.style.color = "#01b3a7";
    secondNavbar.style.color = "#9b9b9b";
    thirdNavbar.style.color = "#9b9b9b";
})

secondNavbar.addEventListener('click', ()=>{
    firstBlock.style.zIndex = 2;
    secondBlock.style.zIndex = 3;
    thirdBlock.style.zIndex = 1;
    secondNavbarBorder.style.width = "100%";
    firstNavbarBorder.style.width = "0%";
    thirdNavbarBorder.style.width = "0%";
    secondNavbar.style.color = "#01b3a7";
    firstNavbar.style.color = "#9b9b9b";
    thirdNavbar.style.color = "#9b9b9b";
})

thirdNavbar.addEventListener('click', ()=>{
    firstBlock.style.zIndex = 1;
    secondBlock.style.zIndex = 2;
    thirdBlock.style.zIndex = 3;
    thirdNavbarBorder.style.width = "100%";
    secondNavbarBorder.style.width = "0%";
    firstNavbarBorder.style.width = "0%";
    thirdNavbar.style.color = "#01b3a7";
    firstNavbar.style.color = "#9b9b9b";
    secondNavbar.style.color = "#9b9b9b";
})