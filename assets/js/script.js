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


const newsSwiper = new Swiper('.news-slider', {
    wrapperClass: 'news-wrapper',
    slideClass: 'news-slide',
    slidesPerView: "auto",
    spaceBetween: 20,
    loopFillGroupWithBlank: false,
    navigation: {
        nextEl: '.news-next',
        prevEl: '.news-prev',
    },
});


document.addEventListener("DOMContentLoaded", () => {
    const faqBlock = document.querySelector('.faq');
    const questions = faqBlock.querySelectorAll('.question');
    questions.forEach((question) => {
        question.addEventListener("click", () => {
            question.classList.toggle('question_open');
        })
    })

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
});

