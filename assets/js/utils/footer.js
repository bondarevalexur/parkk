document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".footer");
    const designerLog = footer.querySelector(".footer__designer-logo");
    const logo = designerLog.querySelector("svg");

    logo.addEventListener("mouseover", (e) => {
        designerLog.classList.add("footer__designer-logo_active")
    })


    document.addEventListener("mousemove", function (e) {
        const footerRect = footer.getBoundingClientRect()

        if (designerLog.classList.contains("footer__designer-logo_active")) {
            const top = Number(e.clientY) - footerRect.y
            const left = Number(e.clientX) - footerRect.x

            if (e.clientY < window.innerHeight - 100 && e.clientX < window.innerWidth - 100) {
                // designerLog.style.cssText = `left:${left}px; top:${top}px;`;
            }
        }
        if (e.clientX < footerRect.width / 2 || e.clientX > window.innerWidth - 20 || e.clientY < footerRect.top || e.clientY > window.innerHeight - 20) {
            designerLog.classList.remove("footer__designer-logo_active")
            designerLog.style.cssText = designerLog.style.cssText = "";
        }
    });
});




