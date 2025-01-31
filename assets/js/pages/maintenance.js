document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
        input.addEventListener("change", () => {
            input.classList.remove('error')
        })
    })


    const header = document.querySelector('.header');
    document.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            header.classList.add('header_black');
        } else {
            header.classList.remove('header_black');
        }
    })

    const maintenance = document.querySelector('.maintenance');
    const maintenanceItems = maintenance.querySelectorAll('.content__item');

    maintenanceItems.forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("content__item_open")
        })
    })
});

