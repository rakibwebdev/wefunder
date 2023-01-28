//Raising slider
const swiper = new Swiper(".raising-now-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: false,

    // Navigation arrows
    navigation: {
        nextEl: ".raising-next",
        prevEl: ".raising-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 27,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 27,
        },
    },
});
