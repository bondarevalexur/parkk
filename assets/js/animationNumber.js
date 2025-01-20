document.addEventListener("DOMContentLoaded", () => {
    const statisticBlock = document.querySelector('.statistic');
    const sold = statisticBlock.querySelector('.sold');
    const year = statisticBlock.querySelector('.year');
    const subject = statisticBlock.querySelector('.subject');
    let startAnimation = false

    document.addEventListener("scroll", () => {
        const top = statisticBlock.getBoundingClientRect().y

        if (top < 555 && !startAnimation) {
            startAnimation = true;

            sold.innerHTML = "0"
            year.innerHTML = "0"
            subject.innerHTML = "0"

            const interval = setInterval(() => {
                const soldValue = Number(sold.innerHTML)
                const yearValue = Number(year.innerHTML)

                if (soldValue < 719) {
                    sold.innerHTML = String(soldValue + 5)
                } else {
                    sold.innerHTML = "719"
                }

                if (yearValue < 2023) {
                    year.innerHTML = String(yearValue + 13)
                } else {
                    year.innerHTML = "2023"
                }
            }, 10)

            const intervalSubject = setInterval(() => {
                const subjectValue = Number(subject.innerHTML.replace("+", ""))

                if (subjectValue < 11) {
                    subject.innerHTML = `${subjectValue + 1}+`
                }
            }, 100)

            setTimeout(() => {
                clearInterval(interval)
                clearInterval(intervalSubject)
            }, 2000)
        }

    })
});