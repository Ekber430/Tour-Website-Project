var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
    },
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});