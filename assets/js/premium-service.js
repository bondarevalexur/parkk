const feedbackSwiper = new Swiper('.feedback-slider', {
    wrapperClass: 'feedback-wrapper',
    slideClass: 'feedback-slide',
    slidesPerView: "auto",
    spaceBetween: 20,
    loopFillGroupWithBlank: false,
    navigation: {
        nextEl: '.feedback-next',
        prevEl: '.feedback-prev',
    },
});

document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
        input.addEventListener("change", () => {
            input.classList.remove('error')
        })
    })


    const header = document.querySelector('.header');
    document.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            header.classList.add('header_black');
        } else {
            header.classList.remove('header_black');
        }
    })
});

