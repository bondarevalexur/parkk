document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("scroll", (e) => {
        const sections = document.querySelectorAll(".animation-section")
        sections.forEach((section) => {
            const lay = section.nextElementSibling
            const isHigher = section.getBoundingClientRect().height > window.innerHeight

            const isException = section.classList.contains("animation-logo")

            if (!isException && isHigher && window.innerHeight - section.getBoundingClientRect().height < section.getBoundingClientRect().y) {
                lay.style.position = 'static';
                section.style.position = 'static';
            }

            if (isHigher && (lay.getBoundingClientRect().y - window.innerHeight < 0) && lay.getBoundingClientRect().y > 0) {
                section.style.top = `-${section.getBoundingClientRect().height - window.innerHeight}px`
                lay.style.position = 'sticky';
                section.style.position = 'sticky';

                lay.nextElementSibling.style = "position:sticky; z-index:2"
            }

            if (lay.getBoundingClientRect().y === 0) {
                lay.style.position = 'static';
                section.style.position = 'static';
            }
            if (!isHigher && lay.getBoundingClientRect().y > 0) {
                lay.style.position = '';
                section.style.position = '';

                lay.nextElementSibling.style = "position:sticky; z-index:2"
                lay.nextElementSibling.nextElementSibling.style = "position:sticky; z-index:2"
            }
        })
    })
});

