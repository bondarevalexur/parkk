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

