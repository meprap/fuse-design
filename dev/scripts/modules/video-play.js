class PlayVideo {
    constructor() {
        this.videoPlay();
        this.videoModulePlay();
        this.submitPopupForm();
        this.hideForm();
        this.clickvdo();
    }
    clickvdo(){
        const el = document.querySelectorAll('.card-video');
        if (el) {
            for (var i = 0; i < el.length; i++) {
                el[i].addEventListener('click', this.playvdo);
            }
        }
    }
    playvdo(){
        this.querySelector(':scope > .btn-control').style.display = "none";
        this.querySelector(':scope > .card-figure').style.display = "none";
        this.querySelector(':scope > .iframe-video').src += "?autoplay=1";
    }
    videoPlay() {
        const el = document.querySelectorAll('.card-video__video-play');
        if (el) {
            for (var i = 0; i < el.length; i++) {
                el[i].addEventListener('click', this.hideContent);
            }
        }
        const el2 = document.querySelectorAll('.card-video-btn');
        if (el2) {
            for (var i = 0; i < el2.length; i++) {
                el2[i].addEventListener('click', this.playModalVideo);
            }
        }
    }

    videoModulePlay() {
        const el1 = document.querySelectorAll('.video-module__video-poster-play');
        if (el1) {
            for (var i = 0; i < el1.length; i++) {
                el1[i].addEventListener('click', this.hideContent);
            }
        }
    }

    hideContent() {
        this.parentElement.style.display = 'none';
        this.parentElement.nextSibling.src += "?autoplay=1";
    }
    playModalVideo() {
        const source = this.parentElement.querySelector('.card-video__video-iframe').src;
        document.querySelector('.modal-video__iframe').src = source;
    }

    validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    submitPopupForm = () => {
        const videoFormBtn = document.querySelector('.video-form-btn');
        if (videoFormBtn) {
            videoFormBtn.addEventListener('click', (event) => {
                event.preventDefault();
                const email = document.querySelector('.modal-video-form [name="email"]').value;
                const videoFormModal = document.querySelector('#videoFormModal');
                if (this.validateEmail(email)) {
                    this.setFormValLocalStorage(email);
                    this.hideForm();
                }
            });
        }
    }

    hideForm = () => {
        if (this.getFormValLocalStorage()) {
            const popUpFormBtn = document.querySelectorAll('[data-bs-target="#videoFormModal"]');
            [...popUpFormBtn].forEach(btn => {
                btn.remove();
            });
        }
    }

    setFormValLocalStorage(value) {
        localStorage.setItem("email", value);
    }

    getFormValLocalStorage() {
        return localStorage.getItem("email");
    }
}

export default PlayVideo;
new PlayVideo();
