document.addEventListener("DOMContentLoaded", () => {
    const popupOpenButtons = document.querySelectorAll('.video-popup-open-button');
    const popup = document.querySelector('.video-popup');
    const close = popup.querySelector('.video-popup__close');
    const video = popup.querySelector('.video-tag');

    let currentScroll = 0;
    let isFullScreen = false;

    video.addEventListener("fullscreenchange", (e) => {
        // скролл к сохраненному состоянию, при выходе из полноэкранного просмотра видео
        if (isFullScreen) {
            window.scrollTo({top: currentScroll});
        }

        isFullScreen = !isFullScreen;
    })

    popupOpenButtons.forEach((button) => {
        button.addEventListener('click', (e) => {

            const videoSrc = `${button.dataset.video}`
            video.src = videoSrc;
            currentScroll = window.scrollY

            popup.style.display = "flex";
            popup.style.top = `${window.scrollY}px`;
            document.body.style.overflow = "hidden";

            setTimeout(() => {
                popup.classList.add("video-popup_visible")
                video.play();
            }, 300);
        })
    })


    close.addEventListener("click", (e) => {
        video.pause()

        e.preventDefault()
        popup.classList.remove("popup_visible")
        document.body.style.overflow = "auto";

        setTimeout(() => {
            popup.style.display = "none";
        }, 300);
    })

    popup.addEventListener("click", (e) => {
        if (!e.target.closest(".video-popup__content")) {
            popup.classList.remove("popup_visible")
            video.pause()
            document.body.style.overflow = "auto";

            setTimeout(() => {
                popup.style.display = "none";
            }, 300);
        }
    });
})