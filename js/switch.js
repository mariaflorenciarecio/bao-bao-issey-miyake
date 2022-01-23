///////////////////////////
// SELECCIONAR ELEMENTOS //
///////////////////////////

const switchBtn = document.querySelector(".switch")
const video = document.querySelector(".hero__video")

////////////
// SWITCH //
////////////

switchBtn.addEventListener("click", function() {
    if (!switchBtn.classList.contains("slide")) {
        switchBtn.classList.add("slide");
        video.pause();
    } else {
        switchBtn.classList.remove("slide");
        video.play();
    }
});