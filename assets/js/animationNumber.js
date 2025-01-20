document.addEventListener("DOMContentLoaded", () => {
    const statisticBlock = document.querySelector('.statistic');
    const sold = statisticBlock.querySelector('.sold');
    const years = statisticBlock.querySelectorAll('.year');
    const year1 = years[0]
    const year2 =years[1]
    const subjects = statisticBlock.querySelectorAll('.subject');
    const subject1 = subjects[0]
    const subject2 = subjects[1]
    let startAnimation = false

    document.addEventListener("scroll", () => {
        const top = statisticBlock.getBoundingClientRect().y

        if (top < 555 && !startAnimation) {
            startAnimation = true;

            sold.innerHTML = "0"
            year1.innerHTML = "0"
            year2.innerHTML = "0"
            subject1.innerHTML = "0"
            subject2.innerHTML = "0"

            const interval = setInterval(() => {
                const soldValue = Number(sold.innerHTML)
                const yearValue = Number(year1.innerHTML)

                if (soldValue < 719) {
                    sold.innerHTML = String(soldValue + 5)
                } else {
                    sold.innerHTML = "719"
                }

                if (yearValue < 2023) {
                    year1.innerHTML = String(yearValue + 13)
                    year2.innerHTML = String(yearValue + 13)
                } else {
                    year1.innerHTML = "2023"
                    year2.innerHTML = "2023"
                }
            }, 10)

            const intervalSubject = setInterval(() => {
                const subjectValue = Number(subject1.innerHTML.replace("+", ""))

                if (subjectValue < 11) {
                    subject1.innerHTML = `${subjectValue + 1}+`
                    subject2.innerHTML = `${subjectValue + 1}+`
                }
            }, 100)

            setTimeout(() => {
                clearInterval(interval)
                clearInterval(intervalSubject)
            }, 2000)
        }

    })
});