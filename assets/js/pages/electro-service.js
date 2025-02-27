document.addEventListener("DOMContentLoaded", () => {
    const isMobile = window.innerWidth < 768

    const whyUsSwiperText = new Swiper('.important-text-slider', {
        wrapperClass: 'important-text-wrapper',
        slideClass: 'important-text-slide',
        slidesPerView: "auto",
        spaceBetween: 20,
        loopFillGroupWithBlank: false,
        pagination: isMobile ? {
            el: ".important-pagination",
            type: "fraction"
        } : {
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
        allowTouchMove: false
    });

    whyUsSwiperText.on("slideChange", (e) => {
        whyUsSwiperPhoto.slideTo(e.activeIndex)
    })

    whyUsSwiperPhoto.on("slideChange", (e) => {
        whyUsSwiperText.slideTo(e.activeIndex)
    })


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
    const mobileAddress = [...document.querySelector('.mobile-address').querySelectorAll(".address")];

    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            dots.forEach((dot1) => {
                if (dot1 !== dot) {
                    dot1.classList.remove("card__dot_active")
                }
            })
            mobileAddress.forEach((mobileAddres) => {
                if (mobileAddres.dataset.value !== dot.dataset.value)
                    mobileAddres.classList.remove("address_active")

            })

            dot.classList.toggle("card__dot_active")

            mobileAddress.find((mobileAddres) => mobileAddres.dataset.value === dot.dataset.value).classList.toggle("address_active")
        })
    })
});

