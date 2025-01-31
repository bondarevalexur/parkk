document.addEventListener("DOMContentLoaded", () => {// Находим бургер и меню
    const videoWrapper = document.querySelector('.advantages__video-wrapper');
    const videoPlay = videoWrapper.querySelector('.advantages__video-play');
    const video = videoWrapper.querySelector('.advantages__video');

    videoWrapper.addEventListener("click", () => {
        if (video.paused === true) {
            video.play();
            videoPlay.style.display = 'none';
        } else {
            video.pause();
            videoPlay.style.display = 'block';
        }
    })


    const feedback = document.querySelector('.feedback');
    const videos = feedback.querySelectorAll('.feedback-slide__video');
    videos.forEach(videoBlock => {
        // videoBlock.classList.add("")

        const play = videoBlock.querySelector(".video-play")
        const video = videoBlock.querySelector(".video-tag")

        videoBlock.addEventListener("click", () => {
            if (video.paused === true) {
                video.play();
                play.style.display = 'none';
            } else {
                video.pause();
                play.style.display = 'block';
            }
        })
    })
})


