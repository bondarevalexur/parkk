document.addEventListener("DOMContentLoaded", () => {
    let needOverflow = true;

    const popupOpenButtons = document.querySelectorAll('.popup-open-button');
    const popup = document.querySelector('.popup');
    const popupThanks = popup.querySelector('#js-thanks');
    const popupMain = popup.querySelector('#js-main');
    const form = popup.querySelector('.popup-form');
    const close = popup.querySelector('.popup__close');
    const questionSelect = popup.querySelector('[name="question-type"]');
    const buttonPopupForm = popup.querySelector('.popup-form__button');
    const agreeCheckbox = popup.querySelector('.agree .checkbox');
    const testBlock = popup.querySelector('.test');
    const technicBlock = popup.querySelector('.technic');
    const commentBLock = popup.querySelector('.comment');
    const eventBLock = popup.querySelector('.event-type');
    const blocks = {
        "test": testBlock,
        "technic": technicBlock,
        "order": commentBLock,
        "car-care": commentBLock,
        "event": eventBLock
    };


    popupOpenButtons.forEach((button) => {

        button.addEventListener('click', (e) => {
            const popupStart = button.dataset.popup;
            popup.style.display = "flex";
            popup.style.top = `${window.scrollY}px`;

            if (document.body.style.overflow === "hidden") {
                needOverflow = false;
            } else {
                document.body.style.overflow = "hidden";
            }


            switch (popupStart) {
                case "premium":
                    buttonPopupForm.classList.add('popup-form__button_premium');
                    questionSelect.value = "Техническое обслуживание";
                    questionSelect.dataset.value = "technic";
                    break;

                case "event":
                    buttonPopupForm.classList.add('popup-form__button_premium');
                    questionSelect.value = "Запись на событие";
                    questionSelect.dataset.value = "event";
                    break;

                case "electric":
                    buttonPopupForm.classList.add('popup-form__button_premium');
                    questionSelect.value = "Запись в сервис";
                    questionSelect.dataset.value = "car-care";
                    break;

                case "electric-car":
                    buttonPopupForm.classList.add('popup-form__button_premium');
                    questionSelect.value = "Заказ электромобиля";
                    questionSelect.dataset.value = "order";
                    break;

                default:
                    buttonPopupForm.classList.remove('popup-form__button_premium');
                    questionSelect.value = "Тест-драйв";
                    questionSelect.dataset.value = "test";
            }

            const event = new Event("change");
            questionSelect.dispatchEvent(event);

            setTimeout(() => {
                popup.classList.add("popup_visible")
            }, 300);
        })
    })


    questionSelect.addEventListener('change', (e) => {
        Object.values(blocks).forEach((block) => {
            block.style.display = "none";
        })

        const value = e.target.dataset.value

        const currentBlock = blocks?.[value];
        if (currentBlock)
            currentBlock.style.display = "";

        if (value === "technic") {
            buttonPopupForm.classList.add('popup-form__button_premium');
        } else {
            buttonPopupForm.classList.remove('popup-form__button_premium');
        }
    })

    function flattenDeep(array) {
        return array.reduce((acc, value) => {
            // Если значение — это массив, рекурсивно вызываем flattenDeep
            if (Array.isArray(value)) {
                acc.push(...flattenDeep(value));
            } else {
                acc.push(value); // Если не массив, добавляем в результат
            }
            return acc;
        }, []);
    }

    function getElements(el) {
        if (el.children.length > 1) {
            return [...el.children].map(getElements)
        }

        return el
    }

    form.addEventListener("submit", e => {
        e.preventDefault()
        const actualElements = [...e.target.children].filter((el) => el.style.display !== "none")
        const actualInputs = flattenDeep(actualElements.map(getElements)).filter((el) => el.tagName === "INPUT")
        const jsonObject = {}

        let isValid = true

        actualInputs.forEach((input) => {
            if (!input.value) {
                input.classList.add("error");
                isValid = false
                return;
            }
            jsonObject[input.name] = input.value;
        })

        if (isValid) {
            console.log("Объект для отправки на бэк", jsonObject);

            popupThanks.style.display = "flex";
            popupMain.style.display = "none";
        }
    })


    close.addEventListener("click", (e) => {
        e.preventDefault()
        popup.classList.remove("popup_visible")

        if (needOverflow) {
            document.body.style.overflow = "auto";
        } else {
            needOverflow = true
        }

        setTimeout(() => {
            popup.style.display = "none";
        }, 300);
    })

    // Закрытие списка при клике вне контента
    popup.addEventListener("click", (e) => {
        if (!e.target.closest(".popup__content")) {
            popup.classList.remove("popup_visible")

            if (needOverflow) {
                document.body.style.overflow = "auto";
            } else {
                needOverflow = true
            }

            setTimeout(() => {
                popup.style.display = "none";
            }, 300);
        }
    });

    agreeCheckbox.addEventListener("change", (e) => {
        buttonPopupForm.classList.toggle("popup-form__button_disabled");
    })

})