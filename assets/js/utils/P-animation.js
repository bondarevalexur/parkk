document.addEventListener("DOMContentLoaded", () => {
    const isMobile = window.innerWidth < 768
    const selectorAddon = isMobile ? "-mobile" : ""
    const logoBlock = document.querySelector('.animation-logo');
    const rightArrow = logoBlock.querySelector(`.right-arrow${selectorAddon}`);
    const leftArrow = logoBlock.querySelector(`.left-arrow${selectorAddon}`);
    const title = logoBlock.querySelector(`.logo-wrapper${selectorAddon}`);
    const word = logoBlock.querySelector(`.p-word${selectorAddon}`);
    const text = logoBlock.querySelector(`.text`);

    const containerWidth = logoBlock.getBoundingClientRect().width;

    // Зададим константы из Фигма, так-как размеры меняются в процессе анимации
    let arrowWidth = isMobile ? 25.4 : 51.47;
    let logoWidth = isMobile ? 340 : 689;
    let arrowsWidth = isMobile ? 389.8 : 725.95;
    let wordsGap = isMobile ? 14.62 : 29.05;
    let titleWidth = isMobile ? 227 : 459;
    let textWidth = isMobile ? 253 : 380;
    let wordWidth = isMobile ? 68 : 137;

    const topBorder = 0

    const leftMargin = (containerWidth - logoWidth) / 2

    // Вычислим высоту заголовка, чтоб начать анимацию, когда блок коснется hedera
    const topGap = document.querySelector(".header").getBoundingClientRect().height

    function init(isFirst = false) {
        if (window.innerHeight < logoBlock.nextElementSibling.getBoundingClientRect().y) {
            const top = logoBlock.getBoundingClientRect().y - topGap
            const rightArrowOffset = leftMargin + logoWidth - arrowWidth + top * Number(isFirst)
            const leftArrowOffset = leftMargin - top

            const wordWidth = word.getBoundingClientRect().width;

            rightArrow.style.display = "block"
            rightArrow.style.left = `${rightArrowOffset}px`

            leftArrow.style.display = "none"
            leftArrow.style.left = `${leftArrowOffset}px`

            word.style.display = "block"
            word.style.left = `${leftMargin}px`

            title.style.display = "block"
            title.style.left = `${leftMargin + wordsGap + wordWidth}px`
            title.style.width = `${titleWidth}px`
            title.querySelector("svg").style.marginLeft = `0`;


            text.style.left = `${(containerWidth - textWidth) / 2}px`
        } else {

            const top = logoBlock.getBoundingClientRect().y - topGap
            const rightArrowOffset = leftMargin + logoWidth - arrowWidth + top * Number(isFirst)
            const leftArrowOffset = leftMargin - top

            rightArrow.style.display = "block"
            rightArrow.style.left = `${rightArrowOffset}px`

            leftArrow.style.display = "block"
            leftArrow.style.left = `${leftArrowOffset}px`


            text.style.display = "block"
            text.style.left = `${(containerWidth - textWidth) / 2}px`

            logoBlock.style.position = "sticky"
        }

    }


    function step() {
        const top = logoBlock.getBoundingClientRect().y - topGap

        if (top < topBorder && window.innerHeight < logoBlock.nextElementSibling.getBoundingClientRect().y) {

            // Текущий отступ слева для буквы
            const wordLeft = leftMargin - top;
            // Центр блока для буквы Р
            const wordCenter = (containerWidth - wordWidth) / 2;
            // Двигаем букву, пока она не окажется на центре
            if (wordCenter > wordLeft) {
                word.style.left = `${wordLeft}px`;
            } else {
                // Если мы сильно резко проскролили вниз, то установим букву по центру
                if (wordCenter <= wordLeft) {
                    word.style.left = `${wordCenter}px`;
                }
            }

            const titleLeft = leftMargin + wordWidth + wordsGap - top
            const titleCurrentWidth = Math.round(titleWidth + top * 2) - 2
            title.style.left = `${titleLeft}px`;
            title.style.width = `${titleCurrentWidth}px`;
            title.querySelector("svg").style.marginLeft = `${top}px`;

            if (titleCurrentWidth < 0) {
                title.style.display = "none"
            } else {
                title.style.display = "block"
            }


            const rightArrowOffset = leftMargin + logoWidth - arrowWidth + top
            const leftArrowOffset = leftMargin - top


            const textLeftMargin = (containerWidth - textWidth) / 2
            const wordLeftMargin = (containerWidth - wordWidth) / 2

            if (rightArrowOffset < textLeftMargin) {
                word.style.display = "none"
                text.style.display = "block"
            } else {
                word.style.display = "block"
                text.style.display = "none"
            }

            if (rightArrowOffset < wordLeftMargin) {
                leftArrow.style.display = 'block';
            } else {
                leftArrow.style.display = 'none';
            }

            if (rightArrowOffset >= (containerWidth - arrowsWidth) / 2) {
                rightArrow.style.left = `${rightArrowOffset}px`;
                leftArrow.style.left = `${leftArrowOffset}px`;
            }
        }

        if (top > 0) {
            init()
        }

        if (window.innerHeight > logoBlock.nextElementSibling.getBoundingClientRect().y) {
            rightArrow.style.left = `${(containerWidth - arrowsWidth) / 2}px`;
            leftArrow.style.left = `${(containerWidth - arrowsWidth) / 2 + arrowsWidth - arrowWidth}px`;


            if (logoBlock.nextElementSibling.getBoundingClientRect().y > window.innerHeight / 2 - topGap) {
                logoBlock.style.position = "sticky"
            }
        }
    }

    init(true)

    step()


    // window.addEventListener('resize', ()=>{
    //     console.log(123123123)
    //
    //     const isMobile = window.innerWidth < 768
    //     arrowWidth = isMobile ? 25.4 : 51.47;
    //     logoWidth = isMobile ? 340 : 689;
    //     arrowsWidth = isMobile ? 389.8 : 725.95;
    //     wordsGap = isMobile ? 14.62 : 29.05;
    //     titleWidth = isMobile ? 227 : 459;
    //     textWidth = isMobile ? 253 : 380;
    //     wordWidth = isMobile ? 68 : 137;
    //
    //     const top = logoBlock.getBoundingClientRect().y - topGap
    //     const rightArrowOffset = leftMargin + logoWidth - arrowWidth + top
    //     const leftArrowOffset = leftMargin - top
    //
    //     const wordWidth1 = word.getBoundingClientRect().width;
    //
    //     rightArrow.style.display = "block"
    //     rightArrow.style.left = `${rightArrowOffset}px`
    //
    //     leftArrow.style.display = "none"
    //     leftArrow.style.left = `${leftArrowOffset}px`
    //
    //     word.style.display = "block"
    //     word.style.left = `${leftMargin}px`
    //
    //     title.style.display = "block"
    //     title.style.left = `${leftMargin + wordsGap + wordWidth}px`
    //     title.style.width = `${titleWidth}px`
    //     title.querySelector("svg").style.marginLeft = `0`;
    //
    //
    //     text.style.left = `${(containerWidth - textWidth) / 2}px`
    //     // init(true)
    //     step()
    // })

    document.addEventListener("scroll", () => {
        step()
    })
});