document.addEventListener("DOMContentLoaded", () => {
    const datepickers = document.querySelectorAll('.datepicker');
    datepickers.forEach(datepicker => {

        // Получаем ссылки на элементы интерфейса
        const datepickerInput = datepicker.querySelector(".datepicker-input"); // Поле ввода для отображения выбранной даты
        const datepickerIcon = datepicker.querySelector(".datepicker-icon"); // Иконка календаря для открытия/закрытия
        const datepickerCalendar = datepicker.querySelector(".datepicker-calendar"); // Основной элемент календаря
        const datepickerTitle = datepicker.querySelector(".datepicker-title"); // Заголовок с названием месяца
        const datepickerDays = datepicker.querySelector(".datepicker-days"); // Сетка дней месяца
        const datepickerWeekdays = datepicker.querySelector(".datepicker-weekdays"); // Сетка дней недели
        const prevButton = datepicker.querySelector(".datepicker-prev"); // Кнопка для перехода к предыдущему месяцу
        const nextButton = datepicker.querySelector(".datepicker-next"); // Кнопка для перехода к следующему месяцу

        let currentDate = new Date(); // Устанавливаем текущую дату для начального отображения

        const weekdays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]; // Названия дней недели

        // Функция для отображения дней недели в календаре
        const renderWeekdays = () => {
            datepickerWeekdays.innerHTML = ""; // Очищаем содержимое сетки дней недели
            weekdays.forEach((day) => {
                const className = ["Сб", "Вс"].includes(day) ? "weekend" : ""; // Добавляем класс для выходных
                datepickerWeekdays.innerHTML += `<div class="${className}">${day}</div>`; // Отображаем дни недели
            });
        };

        // Функция для отображения календаря
        const renderCalendar = (date) => {
            const year = date.getFullYear(); // Получаем текущий год
            const month = date.getMonth(); // Получаем текущий месяц (0-11)
            const currentMonth = new Date().getMonth(); // Месяц сегодняшнего дня
            const currentYear = new Date().getFullYear(); // Год сегодняшнего дня
            const currentDay = new Date().getDate(); // День сегодняшнего дня

            // Устанавливаем заголовок с названием месяца
            datepickerTitle.textContent = date.toLocaleString("default", {
                month: "long",
            });

            const stringMonth = date.toLocaleString("default", {month: "numeric"}); // Номер месяца в строковом формате
            const yearString = year.toString().slice(2, 4); // Последние две цифры года

            // Определяем количество дней в текущем и предыдущем месяце
            const firstDayOfMonth = new Date(year, month, 1).getDay(); // День недели первого дня месяца
            const daysInMonth = new Date(year, month + 1, 0).getDate(); // Количество дней в месяце
            const daysInPrevMonth = new Date(year, month, 0).getDate(); // Количество дней в предыдущем месяце
            const lastDayOfMonth = new Date(year, month, daysInMonth).getDay(); // День недели последнего дня месяца

            // Понедельник — первый день недели (смещение дней)
            const firstDayIndex = (firstDayOfMonth + 6) % 7;

            datepickerDays.innerHTML = ""; // Очищаем сетку дней

            // Добавляем пустые дни в начале месяца
            for (let i = 0; i < firstDayIndex; i++) {
                datepickerDays.innerHTML += `<div class="datepicker-prevday">${daysInPrevMonth - firstDayIndex + i + 1}</div>`;
            }

            // Отображаем все дни текущего месяца
            for (let day = 1; day <= daysInMonth; day++) {
                const dayIndex = new Date(year, month, day).getDay(); // Определяем день недели
                const weekendClassName = [6, 0].includes(dayIndex) ? "weekend" : ""; // Класс для выходных
                const activeClassName = `${day}.${stringMonth}.${yearString}` === datepickerInput.getAttribute("date") ? "active" : ""; // Класс для выбранного дня
                const disabledClassName = day < currentDay && month === currentMonth && year === currentYear ? "disabled" : ""; // Класс для прошлых дней

                datepickerDays.innerHTML += `<div class="datepicker-day ${weekendClassName} ${disabledClassName} ${activeClassName}">${day}</div>`;
            }

            // Добавляем пустые дни в конце месяца
            for (let i = 0; i < 7 - lastDayOfMonth; i++) {
                datepickerDays.innerHTML += `<div class="datepicker-nextday">${i + 1}</div>`;
            }

            // Блокируем кнопку "Назад" для текущего месяца
            if (month <= currentMonth && currentYear >= year) {
                prevButton.classList.add("disabled");
            } else {
                prevButton.classList.remove("disabled");
            }

            // Добавляем обработчики для выбора дня
            datepicker.querySelectorAll(".datepicker-day").forEach((dayElement) => {
                dayElement.addEventListener("click", (e) => {
                    const selectedDay = e.target.textContent; // Получаем текст выбранного дня

                    // Устанавливаем значение в поле ввода
                    datepickerInput.value = `${selectedDay} / ${stringMonth} / ${yearString}`;
                    datepickerInput.setAttribute("date", `${selectedDay}.${stringMonth}.${yearString}`);
                    datepickerCalendar.classList.remove("active"); // Скрываем календарь
                    datepickerInput.classList.remove("active");
                    datepickerInput.classList.remove("error");
                });
            });
        };

        // Переключение отображения календаря
        const toggleCalendar = () => {
            datepickerCalendar.classList.toggle("active"); // Переключаем класс активности
            datepickerInput.classList.toggle("active");
            renderCalendar(currentDate); // Отображаем календарь для текущей даты
        };

        // Обработчики событий для открытия/закрытия календаря
        datepickerInput.addEventListener("click", toggleCalendar);
        datepickerIcon.addEventListener("click", toggleCalendar);

        // Переход к предыдущему месяцу
        prevButton.addEventListener("click", () => {
            currentDate.setMonth(currentDate.getMonth() - 1); // Изменяем месяц
            renderCalendar(currentDate); // Обновляем календарь
        });

        // Переход к следующему месяцу
        nextButton.addEventListener("click", () => {
            currentDate.setMonth(currentDate.getMonth() + 1); // Изменяем месяц
            renderCalendar(currentDate); // Обновляем календарь
        });

        // Закрытие календаря при клике вне его
        document.addEventListener("click", (e) => {
            if (!e.target.closest(".datepicker")) {
                datepickerCalendar.classList.remove("active"); // Скрываем календарь
                datepickerInput.classList.remove("active");
            }
        });

        // Инициализация: отображаем дни недели
        renderWeekdays();

    });
});