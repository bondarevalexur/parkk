document.addEventListener("DOMContentLoaded", () => {
    const isMobile = window.innerWidth < 900
    const selectorAddon = isMobile ? "-mobile" : ""
    const logoBlock = document.querySelector('.animation-logo');
    let rightArrow = logoBlock.querySelector(`.right-arrow${selectorAddon}`);
    let leftArrow = logoBlock.querySelector(`.left-arrow${selectorAddon}`);
    let title = logoBlock.querySelector(`.logo-wrapper${selectorAddon}`);
    let word = logoBlock.querySelector(`.p-word${selectorAddon}`);
    const text = logoBlock.querySelector(`.text`);

    // Зададим константы из Фигма, так-как размеры меняются в процессе анимации
    let arrowWidth = isMobile ? 25.4 : 51.47;
    let logoWidth = isMobile ? 340 : 689;
    let arrowsWidth = isMobile ? 389.8 : 725.95;
    let wordsGap = isMobile ? 14.62 : 29.05;
    let titleWidth = isMobile ? 227 : 459;
    let textWidth = isMobile ? 253 : 380;
    let wordWidth = isMobile ? 68 : 137;

    // Вычислим высоту заголовка, чтоб начать анимацию, когда блок коснется hedera
    const topGap = document.querySelector(".header").getBoundingClientRect().height

    function getState() {

        const top = logoBlock.getBoundingClientRect().y - topGap
        const nextBlockTop = logoBlock.nextElementSibling.getBoundingClientRect().y

        const containerWidth = logoBlock.getBoundingClientRect().width;
        const leftMargin = (containerWidth - logoWidth) / 2
        const rightArrowOffset = leftMargin + logoWidth - arrowWidth + top
        const leftArrowOffset = leftMargin - top

        if (top > window.innerHeight) {
            // console.log("Блок не виден, не проводить никаких вычислений")

            return;
        }


        if (top > 0) {
            // console.log("анимация еще не началась \n стартовое состояние компонентов\n ")


            const rightArrowOffset = leftMargin + logoWidth - arrowWidth
            const leftArrowOffset = leftMargin


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
            text.style.display = "none"


            return;
        }

        if (nextBlockTop < window.innerHeight) {
            // console.log("нижний блок появился,\n  анимация закончена\n ")


            rightArrow.style.display = "block"
            rightArrow.style.left = `${(containerWidth - arrowsWidth) / 2}px`;

            leftArrow.style.display = "block"
            leftArrow.style.left = `${(containerWidth - arrowsWidth) / 2 + arrowsWidth - arrowWidth}px`;

            word.style.display = "none"

            text.style.display = "block"
            text.style.left = `${(containerWidth - textWidth) / 2}px`

            title.style.display = "none"
            title.style.left = `${leftMargin + wordsGap + wordWidth}px`
            title.style.width = `${titleWidth}px`
            title.querySelector("svg").style.marginLeft = `0`;

            // logoBlock.style.position = "sticky"

            return;
        }

        {
            // В остальных случаях проводим вычисления состояния блока для анимирования
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
    }

    getState()

    window.addEventListener("resize", () => {
        rightArrow.style.display = "none"
        leftArrow.style.display = "none"
        title.style.display = "none"
        word.style.display = "none"

        const isMobile = window.innerWidth < 900
        const selectorAddon = isMobile ? "-mobile" : ""

        rightArrow = logoBlock.querySelector(`.right-arrow${selectorAddon}`);
        leftArrow = logoBlock.querySelector(`.left-arrow${selectorAddon}`);
        title = logoBlock.querySelector(`.logo-wrapper${selectorAddon}`);
        word = logoBlock.querySelector(`.p-word${selectorAddon}`);


        // Зададим константы из Фигма, так-как размеры меняются в процессе анимации
        arrowWidth = isMobile ? 25.4 : 51.47;
        logoWidth = isMobile ? 340 : 689;
        arrowsWidth = isMobile ? 389.8 : 725.95;
        wordsGap = isMobile ? 14.62 : 29.05;
        titleWidth = isMobile ? 227 : 459;
        textWidth = isMobile ? 253 : 380;
        wordWidth = isMobile ? 68 : 137;

        getState()
    })

    document.addEventListener("scroll", () => {
        getState()
    })
});