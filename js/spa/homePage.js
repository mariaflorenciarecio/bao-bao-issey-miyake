/////////////////
// PAGINA HOME //
/////////////////

// DOM VISTA "HOME"

const renderHome = () => {
    const spa = document.getElementById('spa');

    // DOM HERO

    const heroSection = document.createElement('section');
    heroSection.classList.add('hero');
    heroSection.innerHTML = `
        <h1>Bao Bao Issey Miyake</h1>
        <div class="hero__title">
            <p>Your</p>
            <div class="hero__effect">
                <span>clutch</span>
                <span>handbag</span>
                <span>crossbody</span>
                <span>backpack</span>
                <span>clutch</span>
            </div>
        </div>
        <p>Colección de carteras con un concepto y método de producción innovadores. Formas versátiles infinitas, generadas a partir de una estructura de piezas triangulares. Belleza, diversión, sorpresa y practicidad para cada momento de tu vida.</p>
        <div class="hero__button">
            <a href="#/tienda">Descubrir</a>
        </div>
        <video class="hero__video" autoplay muted loop>
            <source src="./assets/video/baobao-origin.mp4" type="video/mp4">
        </video>
        <button class="switch">
            <i class="fas fa-play"></i>
            <i class="fas fa-pause"></i>
            <span class="switch__button"></span>
        </button>
    `;
    spa.appendChild(heroSection);

    // DOM NOVEDADES

    const newInSection = document.createElement('section');
    newInSection.classList.add('store');
    newInSection.innerHTML = `
        <div id="new-in">
            <!-- productos renderizados -->
        </div>
    `;
    spa.appendChild(newInSection);

    // DOM SLIDER

    const sliderSection = document.createElement('section');
    sliderSection.classList.add('slider');
    sliderSection.innerHTML = `
        <div class="slider__slide">
            <img src="./assets/img/index/carteras-tote.png" alt="Bolsos de mano">
            <div class="overlay__content">
                <div class="overlay__buttons">
                    <a href="#/tienda" class="black-button">Ver colección</a>
                </div>
            </div>
        </div>
    `;
    spa.appendChild(sliderSection);

    // DOM ESENCIALES

    const essentialSection = document.createElement('section');
    essentialSection.classList.add('store');
    essentialSection.innerHTML = `
        <div id="essential">
            <!-- productos renderizados -->
        </div>
    `;
    spa.appendChild(essentialSection);

    // REPRODUCIR O PAUSAR VIDEO

    const switchBtn = document.querySelector(".switch")
    const video = document.querySelector(".hero__video")
    switchBtn.addEventListener("click", function() {
        if (!switchBtn.classList.contains("slide")) {
            switchBtn.classList.add("slide");
            video.pause();
        } else {
            switchBtn.classList.remove("slide");
            video.play();
        }
    });
};

// EXPORT

export default renderHome;