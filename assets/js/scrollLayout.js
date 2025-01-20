document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("scroll", () => {
        const sections = document.querySelectorAll(".animation-section")
        sections.forEach((section) => {
            const lay = section.nextElementSibling
            if (lay.getBoundingClientRect().y === 0) {
                lay.style.position = 'static';
                section.style.position = 'static';
            }
            if (lay.getBoundingClientRect().y > 0) {
                lay.style.position = '';
                section.style.position = '';
            }
        })
    })
});

