document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("scroll", (e) => {
        const sections = document.querySelectorAll(".animation-section")
        sections.forEach((section) => {
            const lay = section.nextElementSibling

            const isHigher = section.getBoundingClientRect().height > window.innerHeight

            if (isHigher && window.innerHeight - section.getBoundingClientRect().height < section.getBoundingClientRect().y) {
                lay.style.position = 'static';
                section.style.position = 'static';
            }

            if (isHigher && (lay.getBoundingClientRect().y - window.innerHeight < 0) && lay.getBoundingClientRect().y > 0) {
                lay.style.position = 'sticky';
                section.style.position = 'sticky';
                section.style.top = `-${415}px`;
            }

            if (lay.getBoundingClientRect().y === 0) {
                lay.style.position = 'static';
                section.style.position = 'static';
            }
            if (!isHigher && lay.getBoundingClientRect().y > 0) {
                lay.style.position = '';
                section.style.position = '';
            }
        })
    })
});

