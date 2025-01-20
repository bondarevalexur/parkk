document.addEventListener("DOMContentLoaded", () => {
    const designerLog = document.querySelector(".footer__designer-logo");
    const logo = designerLog.querySelector("svg");


    logo.addEventListener("mouseover", (e) => {
        designerLog.classList.add(".footer__designer-logo_active")
    })


    document.addEventListener("mousemove", function (e) {
        if (designerLog.classList.contains(".footer__designer-logo_active")) {
            const top = Number(e.clientY) - 300
            const left = Number(e.clientX) - 100
            designerLog.style.cssText = designerLog.style.cssText = `left:${left}px; top:${top}px;`;
        }
        if (e.clientX < 860 || e.clientY < 380) {
            designerLog.classList.remove(".footer__designer-logo_active")
            designerLog.style.cssText = designerLog.style.cssText = "";
        }
    });
});


