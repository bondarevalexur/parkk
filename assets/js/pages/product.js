document.addEventListener("DOMContentLoaded", () => {
    const isMobile = window.innerWidth < 768

    const productSwiper = new Swiper('.product-slider', {
        wrapperClass: 'product-wrapper',
        slideClass: 'product-slide',
        slidesPerView: "auto",
        spaceBetween: isMobile ? 10 : 20,
        loop: true,
        centeredSlides: true,
        pagination: {
            el: ".controllers__pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: '.product-next',
            prevEl: '.product-prev',
        },
    });

    const equipmentSwiper = new Swiper('.equipment-slider', {
        wrapperClass: 'equipment-wrapper',
        slideClass: 'equipment-slide',
        slidesPerView: "auto",
        spaceBetween: isMobile ? 10 : 20,
        centeredSlides: true,
        pagination: {
            el: ".pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.equipment-next',
            prevEl: '.equipment-prev',
        },
    });


    const optionsSwiper = new Swiper('.options-slider', {
        wrapperClass: 'options-wrapper',
        slideClass: 'options-slide',
        slidesPerView: "auto",
        spaceBetween: isMobile ? 10 : 20,
        centeredSlides: true,
        pagination: isMobile ? {
            el: ".options-pagination",
            clickable: true,
        } : {
            el: ".options-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: '.options-next',
            prevEl: '.options-prev',
        },
    });

    const proposalSwiper = new Swiper('.proposal-slider', {
        wrapperClass: 'proposal-wrapper',
        slideClass: 'proposal-slide',
        slidesPerView: "auto",
        spaceBetween: isMobile ? 10 : 20,
        navigation: {
            nextEl: '.proposal-next',
            prevEl: '.proposal-prev',
        },
    });


    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
        input.addEventListener("change", () => {
            input.classList.remove('error')
        })
    })


    const header = document.querySelector('.header');
    document.addEventListener("scroll", () => {
        if (window.scrollY > 627) {
            header.classList.add('header_black');
        } else {
            header.classList.remove('header_black');
        }
    })


    const options = document.querySelector('.options .options__header');
    const buttons = options.querySelectorAll('.button');
    const slider = document.querySelector('.options-slider .options-wrapper');
    const slides = [...slider.querySelectorAll('.options-slide')];
    console.log(buttons)
    slides.forEach((slide) => {
        if (slide.dataset.value !== "exterior") {
            slider.removeChild(slide)
        } else {
            slider.append(slide)
        }
    })

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {

            slides.forEach((slide) => {
                if (slide.dataset.value !== button.dataset.value) {
                    slider.removeChild(slide)
                } else {
                    slider.append(slide)
                }
            })


            buttons.forEach((button) => {
                button.classList.remove("button_active")
            })

            button.classList.add("button_active")
            options.dataset.value = button.dataset.value;

            optionsSwiper.slideTo(0)
        })
    })
});

