document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
        input.addEventListener("change", () => {
            input.classList.remove('error')
        })
    })


    const header = document.querySelector('.header');
    document.addEventListener("scroll", () => {
        if (window.scrollY > 627) {
            header.classList.add('header_black');
        } else {
            header.classList.remove('header_black');
        }
    })


    const filterBlock = document.querySelector('.filters');
    const toggle = filterBlock.querySelector('.toggle');
    const inStock = filterBlock.querySelector('#instock-checkbox');
    const order = filterBlock.querySelector('#order-checkbox');
    const filtersList = filterBlock.querySelector('.filters__list');
    const carsBrands = filtersList.querySelectorAll('li');


    toggle.querySelector(".toggle__input").addEventListener("change", (e) => {
        console.log(`выбран ${e.target.checked ? "Электрический" : "Гибрид"}`)
    })


    inStock.querySelector("input").addEventListener('change', (e) => {
        if(e.target.checked){
            console.log("учитывать в под заказ")
        }
        else {
            console.log("не учитывать под заказ")
        }
    })

    order.querySelector("input").addEventListener('change', (e) => {
        if(e.target.checked){
            console.log("учитывать в под заказ")
        }
        else {
            console.log("не учитывать под заказ")
        }
    })

    carsBrands.forEach((item) => {
        item.addEventListener('click', () => {
            if (item.dataset.value === "all") {
                carsBrands.forEach((item) => item.classList.remove('active'))
            } else {
                carsBrands.forEach((item) => item.dataset.value === "all" && item.classList.remove('active'))
            }

            item.classList.toggle('active')

            console.log(`выбрана марка ${item.dataset.value}`)
        })
    })

});

