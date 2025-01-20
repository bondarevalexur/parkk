document.addEventListener("DOMContentLoaded", () => {
    const selects = document.querySelectorAll(".select");
    selects.forEach(select => {
        const selectInput = select.querySelector(".select__input");
        const selectIcon = select.querySelector(".select__icon");
        const selectOptions = select.querySelector(".select__options");
        const options = selectOptions.querySelectorAll(".select__option");

        // Переключение видимости списка опций
        const toggleOptions = () => {


            if (selectOptions.style.display === "none") {
                selectOptions.style.display = "block";

                setTimeout(() => {
                    selectOptions.classList.toggle("active");
                    select.classList.toggle("active");
                    selectInput.classList.toggle("active");
                }, 0);
            } else {
                selectOptions.classList.remove("active");
                select.classList.remove("active");
                selectInput.classList.remove("active");

                setTimeout(() => {
                    selectOptions.style.display = "none";
                }, 300);
            }
        };

        // Обновление значения инпута
        const updateValue = (value, text) => {
            selectInput.value = text;
            selectInput.dataset.value = value; // Сохраняем значение в атрибуте data

            const event = new Event("change");
            selectInput.dispatchEvent(event);

            selectOptions.classList.remove("active");
            select.classList.remove("active");
            selectInput.classList.remove("active");

            setTimeout(() => {
                selectOptions.style.display = "none";
            }, 300);
        };

        // Обработчик клика по иконке или инпуту
        selectIcon.addEventListener("click", toggleOptions);
        selectInput.addEventListener("click", toggleOptions);

        // Обработчик выбора опции
        options.forEach((option) => {
            option.addEventListener("click", () => {
                const value = option.dataset.value;
                const text = option.textContent;
                updateValue(value, text);
            });
        });

        // Закрытие списка при клике вне Select
        document.addEventListener("click", (e) => {
            if (!e.target.closest(".select")) {
                selectOptions.classList.remove("active");
                select.classList.remove("active");
                selectInput.classList.remove("active");

                setTimeout(() => {
                    selectOptions.style.display = "none";
                }, 300);
            }
        });
    });
});