document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector('.card');
    const dots = card.querySelectorAll('.card__dot');
    const mobileAddress = [...document.querySelector('.mobile-address').querySelectorAll(".address")];

    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            dots.forEach((dot1) => {
                if (dot1 !== dot) {
                    dot1.classList.remove("card__dot_active")
                }
            })
            mobileAddress.forEach((mobileAddres) => {
                if (mobileAddres.dataset.value !== dot.dataset.value)
                    mobileAddres.classList.remove("address_active")

            })

            dot.classList.toggle("card__dot_active")

            mobileAddress.find((mobileAddres) => mobileAddres.dataset.value === dot.dataset.value).classList.toggle("address_active")
        })
    })
});

