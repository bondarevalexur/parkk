document.addEventListener("DOMContentLoaded", () => {
    const isMobile = window.innerWidth < 768
    const selectorAddon = isMobile ? "-mobile" : ""
    const logoBlock = document.querySelector('.animation-logo-about');
    const rightArrow = logoBlock.querySelector(`.right-arrow${selectorAddon}`);
    const leftArrow = logoBlock.querySelector(`.left-arrow${selectorAddon}`);
    const text = logoBlock.querySelector(`.text`);

    const containerWidth = logoBlock.getBoundingClientRect().width;

    // Зададим константы из Фигма, так-как размеры меняются в процессе анимации
    const arrowWidth = isMobile ? 25.4 : 51.47;
    const textWidth = isMobile ? 301 : 575;
    const arrowGap = isMobile ? 60 : 156 - arrowWidth / 2;
    const heightGap = isMobile ? 253 : 400
    const headerHeight = document.querySelector(".header").getBoundingClientRect().height
    const leftGap = isMobile ? 30 : 80;
    const rightGap = isMobile ? 7 : 30;
    const topBorder = 0

    const leftMargin = (containerWidth - textWidth) / 2

    // Вычислим высоту заголовка, чтоб начать анимацию, когда блок коснется hedera
    const topGap = headerHeight + heightGap

    function init(isFirst = false) {

        const top = logoBlock.getBoundingClientRect().y - topGap
        const rightArrowOffset = leftMargin - top * Number(isFirst) - arrowGap
        const leftArrowOffset = leftMargin + textWidth - arrowWidth + arrowGap + top * Number(isFirst)

        rightArrow.style.display = "block"
        rightArrow.style.left = `${rightArrowOffset}px`

        leftArrow.style.display = "block"
        leftArrow.style.left = `${leftArrowOffset}px`

        text.style.display = "block"
        text.style.left = `${leftMargin}px`
        text.querySelector("h2").style.width = `${textWidth}px`;
    }


    function step() {
        const top = logoBlock.getBoundingClientRect().y - topGap

        if (top < topBorder) {

            const rightArrowOffset = leftMargin - top - arrowGap
            const leftArrowOffset = leftMargin + textWidth - arrowWidth + top + arrowGap

            const leftArrowBorder = (containerWidth - arrowWidth - leftGap) / 2

            const titleLeft = leftMargin - top
            const titleCurrentWidth = Math.round(textWidth + top * 2) - 2


            if (rightArrowOffset <= leftArrowBorder) {
                rightArrow.style.left = `${rightArrowOffset}px`;
                leftArrow.style.left = `${leftArrowOffset}px`;

                text.style.left = `${titleLeft}px`;
                text.style.width = `${titleCurrentWidth}px`;
                text.querySelector("h2").style.marginLeft = `${top}px`;
            } else {
                rightArrow.style.left = `${leftArrowBorder}px`;
                leftArrow.style.left = `${leftArrowBorder + arrowWidth + rightGap}px`;
            }

            if (titleCurrentWidth < 0) {
                text.style.display = "none"
            } else {
                text.style.display = "block"
            }
        } else {
            text.style.left = `${leftMargin}px`;
            text.style.width = `${textWidth}px`;
            text.querySelector("h2").style.marginLeft = `${0}px`;
        }

        if (top > 0) {
            init()
        }

        if (logoBlock.nextElementSibling.getBoundingClientRect().y < headerHeight + logoBlock.getBoundingClientRect().height) {
            const leftArrowBorder = (containerWidth - arrowWidth - leftGap) / 2

            rightArrow.style.left = `${leftArrowBorder}px`;
            leftArrow.style.left = `${leftArrowBorder + arrowWidth + rightGap}px`;
            text.style.left = `${leftMargin}px`

        }
    }

    step()

    init(true)

    document.addEventListener("scroll", () => {
        step()
    })
});