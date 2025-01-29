const whyUsSwiperText = new Swiper('.important-text-slider', {
    wrapperClass: 'important-text-wrapper',
    slideClass: 'important-text-slide',
    slidesPerView: "auto",
    spaceBetween: 20,
    loopFillGroupWithBlank: false,
    pagination: {
        el: ".important-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: '.important-next',
        prevEl: '.important-prev',
    },
});

const whyUsSwiperPhoto = new Swiper('.important-photo-slider', {
    wrapperClass: 'important-photo-wrapper',
    slideClass: 'important-photo-slide',
    slidesPerView: "auto",
    spaceBetween: 20,
    loopFillGroupWithBlank: false,
    navigation: {
        nextEl: '.important-next',
        prevEl: '.important-prev',
    },
    pagination: {
        el: ".important-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
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

    const card = document.querySelector('.card');
    const dots = card.querySelectorAll('.card__dot');

    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            dots.forEach((dot1) => {
                if (dot1 !== dot)
                    dot1.classList.remove("card__dot_active")
            })

            dot.classList.toggle("card__dot_active")
        })
    })
});

