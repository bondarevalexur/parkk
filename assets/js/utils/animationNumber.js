document.addEventListener("DOMContentLoaded", () => {
    const statisticBlock = document.querySelector('.statistic');

    if (statisticBlock) {
        const animateNumbersList = statisticBlock.querySelectorAll('.animate-number-js');

        document.addEventListener("scroll", () => {

            animateNumbersList.forEach((item) => {
                const top = item.getBoundingClientRect().y
                const animationGap = Number(item.dataset.animationgap ?? 0)
                const startAnimation = Boolean(item.dataset.startAnimation ?? false)

                if (top + animationGap < window.innerHeight && !startAnimation) {
                    item.dataset.startAnimation = true
                    item.innerHTML = "0"

                    const time = Number(item.dataset.time)
                    const toValue = Number(item.dataset.value)
                    const stepValue = Number(item.dataset.step)
                    const addSymbol = item.dataset.symbol || ""

                    const interval = setInterval(() => {
                        const itemValue = Number(item.innerHTML.replace(addSymbol, ""))

                        if (itemValue < toValue) {
                            item.innerHTML = `${itemValue + stepValue}${addSymbol ?? ""}`
                        } else {
                            item.innerHTML = `${toValue}${addSymbol ?? ""}`
                        }
                    }, time)


                    setTimeout(() => {
                        clearInterval(interval)

                        item.innerHTML = `${toValue}${addSymbol ?? ""}`
                    }, 2000)


                }
            })
        })
    }
});