document.addEventListener("DOMContentLoaded", () => {
    const logoBlock = document.querySelector('.animation-logo');
    const rightArrow = logoBlock.querySelector('.right-arrow');
    const leftArrow = logoBlock.querySelector('.left-arrow');
    const title = logoBlock.querySelector('.logo-wrapper');
    const word = logoBlock.querySelector('.p-word');
    const text = logoBlock.querySelector('.text');

    document.addEventListener("scroll", () => {
        const top = logoBlock.getBoundingClientRect().y
        const half = logoBlock.getBoundingClientRect().width / 2

        if (top < 0 && top > -664) {
            if (top > -280) {
                word.style.left = `${half - 345 - top}px`;
            }

            title.style.left = `${half - 345 + 168 - top}px`;
            title.style.width = `${Math.round(458 + top * 2) - 2}px`;
            title.querySelector("svg").style.marginLeft = `${-168 + top}px`;

            if (top < -229) {
                title.style.display = "none"
            } else {
                title.style.display = "block"
            }

            if (top < -444) {
                word.style.display = "none"
                text.style.display = "block"
            } else {
                word.style.display = "block"
                text.style.display = "none"
            }

            if (top < -355) {
                leftArrow.style.display = 'block';
                leftArrow.style.left = `${half + 23 - top - 360}px`;
            } else {
                leftArrow.style.display = 'none';
            }

            rightArrow.style.left = `${half + 291 + top}px`;

        }
    })
});