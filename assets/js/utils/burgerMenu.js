document.addEventListener("DOMContentLoaded", () => {// Находим бургер и меню
    const header = document.querySelector('.header');
    const headerContainer = header.querySelector('.header__container');
    const burger = header.querySelector('.burger');
    const nav = header.querySelector('.nav');
    const headerBackdrop = header.querySelector('.header-backdrop');

// Добавляем обработчик клика
    burger.addEventListener('click', () => {
        if (document.body.style.overflow !== "hidden"
        ) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }


        headerContainer.classList.toggle("header__container_visible")
        nav.classList.toggle('nav_visible')
        burger.classList.toggle('burger_visible');
        headerBackdrop.classList.toggle('header-backdrop_visible');
    });


    headerBackdrop.addEventListener("click", (e) => {
        headerContainer.classList.remove("header__container_visible");
        nav.classList.remove("nav_visible");
        burger.classList.remove("burger_visible");
        headerBackdrop.classList.remove('header-backdrop_visible');
        document.body.style.overflow = "auto";
    });
})

