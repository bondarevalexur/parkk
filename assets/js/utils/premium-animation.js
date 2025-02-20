document.addEventListener("DOMContentLoaded", () => {
    const isMobile = window.innerWidth < 900
    const selectorAddon = isMobile ? "-mobile" : ""
    const logoBlock = document.querySelector('.animation-logo-about');
    let rightArrow = logoBlock.querySelector(`.right-arrow${selectorAddon}`);
    let leftArrow = logoBlock.querySelector(`.left-arrow${selectorAddon}`);
    const text = logoBlock.querySelector(`.text`);

    // Зададим константы из Фигма, так-как размеры меняются в процессе анимации
    let arrowWidth = isMobile ? 25.4 : 51.47;
    let textWidth = isMobile ? 301 : 695;
    let arrowGap = isMobile ? 60 : 156 - arrowWidth / 2;
    let heightGap = isMobile ? 253 : 400
    let headerHeight = document.querySelector(".header").getBoundingClientRect().height
    let leftGap = isMobile ? 30 : 80;
    let rightGap = isMobile ? 7 : 30;
    let topBorder = 0


    // Вычислим высоту заголовка, чтоб начать анимацию, когда блок коснется hedera
    const topGap = headerHeight

    function init(isFirst = false) {
        const containerWidth = logoBlock.getBoundingClientRect().width;
        const leftMargin = (containerWidth - textWidth) / 2

        const top = logoBlock.getBoundingClientRect().y - topGap
        const leftArrowBorder = Number((containerWidth - arrowWidth - leftGap) / 2)

        rightArrow.style.display = "block"
        rightArrow.style.left = `${leftArrowBorder}px`

        leftArrow.style.display = "block"
        leftArrow.style.left = `${leftArrowBorder + arrowWidth + rightGap}px`

        text.style.display = "block"
        text.style.left = `${leftMargin}px`;
        text.style.maxWidth = `${textWidth}px`;
        text.style.width = `${0}px`;
        text.querySelector("h2").style.width = `${textWidth}px`;
        if (text.querySelector("p")) text.querySelector("p").style.width = `${textWidth}px`;
        text.querySelector(".container").style.width = `${0}px`;
        text.querySelector(".container").style = `min-width: ${textWidth}px`;
    }


    function step() {

        const containerWidth = logoBlock.getBoundingClientRect().width;
        const leftMargin = (containerWidth - textWidth) / 2

        const top = logoBlock.getBoundingClientRect().y - topGap - 300

        if (top > 0) {
            init()
        }

        if (top < topBorder) {
            const rightArrowOffset = Number((containerWidth - arrowWidth - leftGap) / 2) + top
            const leftArrowOffset = Number((containerWidth - arrowWidth - leftGap) / 2) + arrowWidth + rightGap - top

            const leftArrowBorder = leftMargin - arrowGap

            const titleLeft = Number((containerWidth) / 2) + top
            const titleCurrentWidth = Math.round( - top * 2) - 2


            console.log(rightArrowOffset <= leftArrowBorder)
            if (rightArrowOffset >= leftArrowBorder) {
                rightArrow.style.left = `${rightArrowOffset}px`;
                leftArrow.style.left = `${leftArrowOffset}px`;

                text.style.left = `${titleLeft}px`;
                text.style.width = `${titleCurrentWidth}px`;
                text.querySelector(".container").style.marginLeft = `${(titleCurrentWidth - textWidth)/2}px`;
            } else {
                const rightArrowOffset = leftMargin - arrowGap
                const leftArrowOffset = leftMargin + textWidth - arrowWidth + arrowGap

                rightArrow.style.left = `${rightArrowOffset}px`;
                leftArrow.style.left = `${leftArrowOffset}px`;
            }

            if (titleCurrentWidth < 0) {
                text.style.display = "none"
            } else {
                text.style.display = "block"
            }
        } else {
            text.style.left = `${leftMargin}px`;
            text.style.width = `${0}px`;
            text.querySelector("h2").style.marginLeft = `${0}px`;
            text.querySelector(".container").style.marginLeft = `${0}px`;
        }



        // if (footer.getBoundingClientRect().y < headerHeight + logoBlock.getBoundingClientRect().height) {
        //     const leftArrowBorder = (containerWidth - arrowWidth - leftGap) / 2
        //
        //     rightArrow.style.left = `${leftArrowBorder}px`;
        //     leftArrow.style.left = `${leftArrowBorder + arrowWidth + rightGap}px`;
        //     text.style.left = `${leftMargin}px`
        //
        // }
    }

    step()

    init(true)

    document.addEventListener("scroll", () => {
        step()
    })


    window.addEventListener("resize", () => {
        rightArrow.style.display = "none"
        leftArrow.style.display = "none"

        const isMobile = window.innerWidth < 900
        const selectorAddon = isMobile ? "-mobile" : ""

        rightArrow = logoBlock.querySelector(`.right-arrow${selectorAddon}`);
        leftArrow = logoBlock.querySelector(`.left-arrow${selectorAddon}`);


        // Зададим константы из Фигма, так-как размеры меняются в процессе анимации
        arrowWidth = isMobile ? 25.4 : 51.47;
        textWidth = isMobile ? 301 : 575;
        arrowGap = isMobile ? 60 : 156 - arrowWidth / 2;
        heightGap = isMobile ? 253 : 400
        headerHeight = document.querySelector(".header").getBoundingClientRect().height
        leftGap = isMobile ? 30 : 80;
        rightGap = isMobile ? 7 : 30;
        topBorder = 0


        init()
    })
});