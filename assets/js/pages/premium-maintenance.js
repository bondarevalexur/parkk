document.addEventListener("DOMContentLoaded", () => {
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


    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
        input.addEventListener("change", () => {
            input.classList.remove('error')
        })
    })

    const faqBlock = document.querySelector('.faq');
    const questions = faqBlock.querySelectorAll('.question');
    questions.forEach((question) => {
        const answers = question.querySelector(".question__answer");

        question.addEventListener("click", () => {
            if (question.classList.contains('question_open')) {
                setTimeout(() => question.classList.remove('question_open'), 200);
                answers.classList.remove('question__answer_open')
            } else {
                question.classList.add('question_open');
                setTimeout(() => answers.classList.add('question__answer_open'), 200);
            }
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

    const maintenance = document.querySelector('.maintenance');
    const maintenanceItems = maintenance.querySelectorAll('.content__item');

    maintenanceItems.forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("content__item_open")
        })
    })
});

