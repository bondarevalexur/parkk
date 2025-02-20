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

    const preview = document.querySelector('.preview');
    const previewBlocks = preview.querySelectorAll('.preview__block');

    previewBlocks.forEach((previewBlock) => {
        const button = previewBlock.querySelector('.button');
        button.addEventListener("mouseover", () => {
            previewBlock.classList.add('preview__block_active');
        })

        button.addEventListener("mouseout", () => {
            previewBlock.classList.remove('preview__block_active');
        })
    })

    const advantages = document.querySelector('.advantages');
    const advantagesVideo = advantages.querySelector('.advantages__video');
    const advantagesVideoIcon = advantages.querySelector('.advantages__video-play');

    const scrollCalbac = () => {
        const top = advantagesVideo.getBoundingClientRect().y;
        const topGap = window.innerHeight - advantagesVideo.getBoundingClientRect().height;

        if (top < topGap && (advantagesVideo.paused || advantagesVideo.ended)) {
            advantagesVideo.play();
            advantagesVideoIcon.style.display = 'none';
            window.removeEventListener("scroll", scrollCalbac)
        }
    }

    window.addEventListener("scroll", scrollCalbac)

});

