document.addEventListener("DOMContentLoaded", () => {
    const isMobile = window.innerWidth < 768

    const whyUsSwiperText = new Swiper('.why-us-text-slider', {
        wrapperClass: 'why-us-text-wrapper',
        slideClass: 'why-us-text-slide',
        slidesPerView: "auto",
        spaceBetween: 20,
        loopFillGroupWithBlank: false,
        pagination: isMobile ?
            {
                el: ".why-us-pagination",
                type: "fraction"
            } : {
                el: ".why-us-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + "</span>";
                },
            },
        navigation: {
            nextEl: '.why-us-next',
            prevEl: '.why-us-prev',
        },
    });

    const whyUsSwiperPhoto = new Swiper('.why-us-photo-slider', {
        wrapperClass: 'why-us-photo-wrapper',
        slideClass: 'why-us-photo-slide',
        slidesPerView: "auto",
        spaceBetween: 20,
        loopFillGroupWithBlank: false,
        allowTouchMove: false
    });

    const equipmentSwiper = new Swiper('.what-us-slider', {
        wrapperClass: 'what-us-wrapper',
        slideClass: 'what-us-slide',
        direction: "vertical",
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        loopFillGroupWithBlank: false,
        pagination: {
            el: ".what-us-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.what-us-next',
            prevEl: '.what-us-prev',
        },
    });


    const previewSwiperText = new Swiper('.preview-slider', {
        wrapperClass: 'preview-wrapper',
        slideClass: 'preview-slide',
        slidesPerView: "auto",
        spaceBetween: isMobile ? 10 : 20,
        loopFillGroupWithBlank: false,
        navigation: {
            nextEl: '.preview-next',
            prevEl: '.preview-prev',
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
        if (window.scrollY > 300) {
            header.classList.add('header_black');
        } else {
            header.classList.remove('header_black');
        }
    })

    whyUsSwiperText.on("slideChange", (e) => {
        whyUsSwiperPhoto.slideTo(e.activeIndex )
    })

    whyUsSwiperPhoto.on("slideChange", (e) => {
        whyUsSwiperText.slideTo(e.activeIndex )
    })

    const whatUsDescription = document.querySelector('.what-us-description');
    const whatUsItems = whatUsDescription.querySelectorAll('.what-us-description__item');
    whatUsItems.forEach((item) => {
        item.addEventListener("click", () => {
            whatUsItems.forEach((item) => {
                item.classList.remove("what-us-description__item_active")
            })

            item.classList.add("what-us-description__item_active")

            equipmentSwiper.slideTo(Number(item.dataset.value))
        })
    })
});

