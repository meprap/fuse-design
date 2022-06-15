// import Marquee3k from 'marquee3000';

class Marquee {
    constructor() {
        this.breforeMarkqueeData = document.querySelector('.marquee-content');
        this.htmlData = this.breforeMarkqueeData.innerHTML;
        this.events();
        this.mobileWidth = 0;
    }

    htmlMarquee() {
        setTimeout(() => {
            if (window.innerWidth > this.mobileWidth && !this.breforeMarkqueeData.classList.contains('marqueeplay')) {
                const root = document.documentElement;
                const marqueeElementsDisplayed =
                    getComputedStyle(root).getPropertyValue('--marquee-elements-displayed');
                const marqueeContent = document.querySelector('ul.marquee-content');
                marqueeContent.classList.add('marqueeplay');

                root.style.setProperty('--marquee-elements', marqueeContent.children.length);

                for (let i = 0; i < marqueeElementsDisplayed; i++) {
                    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
                }
            }
        }, 250);
    }
    
    resize() {
        window.addEventListener('resize', () => {
            if (window.innerWidth > this.mobileWidth) {
                this.htmlMarquee();
            } else {
                this.breforeMarkqueeData.classList.remove('marqueeplay');
                document.querySelector('.marquee-content').innerHTML = this.htmlData;
            }
        });
    }

    events() {
        this.htmlMarquee();
        this.resize();
    }
}

export default Marquee;
new Marquee();
