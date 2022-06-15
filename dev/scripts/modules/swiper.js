import Swiper from 'swiper/bundle';

// import Swiper, { Navigation, Pagination } from 'swiper';

class SwiperSliderA01 {
    constructor() {
        this.swiperOne();
        this.swiperTwo();
        this.swiperFour();
        this.portHoleHtml = new Array();
        this.relatedArticlesHtml = new Array();
        this.videoCategoryThumbnail = new Array();
        var anchor2 = document.querySelectorAll(".swiper-a02");
        if (anchor2) {
            for (var i = 0; i < anchor2.length; i++) {
                this.portHoleHtml[i] = anchor2[i].innerHTML;
            }
        }
        var anchor3 = document.querySelectorAll(".swiper-a03");
        if (anchor3) {
            for (var i = 0; i < anchor3.length; i++) {
                this.relatedArticlesHtml[i] = anchor3[i].innerHTML;
            }
        }
        var anchor5 = document.querySelectorAll(".swiper-a05");
        if (anchor5) {
            for (var i = 0; i < anchor5.length; i++) {
                this.videoCategoryThumbnail[i] = anchor5[i].innerHTML;
            }
        }
        this.checkWindow();
    }

    // Swiper A01
    swiperA01(container, prev, next) {
        var swiperElms = document.querySelectorAll(container);
        swiperElms.forEach((element) => {
            var nextArrow = element.querySelector(next);
            var prevArrow = element.querySelector(prev);
            new Swiper(element, {
                slidesPerView: 'auto',
                spaceBetween: 12,
                pagination: {
                    el: '.swiper-a01 .swiper-pagination',
                    clickable: true,
                    type: 'custom',
                    renderCustom: function (swiper, current, total) {
                        var out = ''
                        for (var i = 1; i < total + 1; i++) {
                            let swiperNext = element.closest('.swiper-a01').querySelector('.swiper-button-next');
                            let swiperPrev = element.closest('.swiper-a01').querySelector('.swiper-button-prev');
                            console.log(total)
                            if(current === (total-1)){
                                swiperNext.classList.add('swiper-button-disabled');
                            }
                            if (swiperNext.classList.contains('swiper-button-disabled')) {
                                swiperNext.classList.remove('is-active');
                                swiperPrev.classList.add('is-active');
                                swiperNext.style.setProperty('display', 'none', 'important');
                                swiperPrev.style.removeProperty('display');

                            }
                            else if(swiperPrev.classList.contains('swiper-button-disabled')) {
                                swiperPrev.classList.remove('is-active');
                                swiperPrev.style.setProperty('display', 'none', 'important');
                                swiperNext.classList.add('is-active');
                                swiperNext.style.removeProperty('display');
                            }
                            if (i == current) {
                                out = out + '<span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex=' + i + ' role="button" aria-label="Go to slide ' + i + 1 + '"></span>';
                            } else {
                                out = out + '<span class="swiper-pagination-bullet" tabindex=' + i + ' role="button" aria-label="Go to slide ' + i + 1 + '"></span>';
                            }
                        };
                        return out;
                    },

                },
                navigation: {
                    nextEl: '.swiper-a01 .swiper-button-next',
                    prevEl: '.swiper-a01 .swiper-button-prev',
                },
                keyboard: {
                    // el: '.swiper-a01',
                    enabled: true,
                    onlyInViewport: false,
                },
                breakpoints: {
                    768: {
                        spaceBetween: 16,
                    },
                    1280: {
                        spaceBetween: 32,
                    },
                },
            });
        });
    }

    // Swiper A02 (porthole-module Swiper)
    swiperA02(container) {
        var swiperElms = document.querySelectorAll(container);
        swiperElms.forEach((element) => {

            new Swiper(element, {
                slidesPerView: 1,
                spaceBetween: 0,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    type: 'custom',
                    renderCustom: function (swiper, current, total) {
                        var out = ''
                        for (var i = 1; i < total + 1; i++) {
                            if (i == current) {
                                out = out + '<span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex=' + i + ' role="button" aria-label="Go to slide ' + i + 1 + '"></span>';
                            } else {
                                out = out + '<span class="swiper-pagination-bullet" tabindex=' + i + ' role="button" aria-label="Go to slide ' + i + 1 + '"></span>';
                            }
                        }
                        ;
                        return out;
                    },

                },
                // paginationClickable: true,
                keyboard: {
                    enabled: true,
                    onlyInViewport: false,
                },
            });
        });
    }

    // Swiper A03
    swiperA03(container, prev, next) {
        var swiperElms = document.querySelectorAll(container);
        swiperElms.forEach((element) => {
            var nextArrow = element.querySelector(next);
            var prevArrow = element.querySelector(prev);
            new Swiper(element, {
                slidesPerView: 'auto',
                spaceBetween: 12,
                pagination: {
                    el: '.swiper-a03 .swiper-pagination',
                    clickable: true,
                    type: 'custom',
                    renderCustom: function (swiper, current, total) {
                        var out = ''
                        for (var i = 1; i < total + 1; i++) {
                            if (i == current) {
                                out = out + '<span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex=' + i + ' role="button" aria-label="Go to slide ' + i + 1 + '"></span>';
                            } else {
                                out = out + '<span class="swiper-pagination-bullet" tabindex=' + i + ' role="button" aria-label="Go to slide ' + i + 1 + '"></span>';
                            }
                        };
                        return out;
                    },

                },
                navigation: {
                    nextEl: '.swiper-a01 .swiper-button-next',
                    prevEl: '.swiper-a01 .swiper-button-prev',
                },
                keyboard: {
                    // el: '.swiper-a01',
                    enabled: true,
                    onlyInViewport: false,
                },
            });
        });
    }

    // Swiper A04
    swiperA04(container, prev, next) {
        var swiperElms = document.querySelectorAll(container);
        swiperElms.forEach((element) => {
            var nextArrow = element.querySelector(next);
            var prevArrow = element.querySelector(prev);
            new Swiper(element, {
                slidesPerView: 'auto',
                spaceBetween: 12,
                pagination: {
                    el: '.swiper-a04 .swiper-pagination',
                    clickable: true,
                    type: 'custom',
                    renderCustom: function (swiper, current, total) {
                        var out = ''
                        for (var i = 1; i < total + 1; i++) {
                            let swiperNext = element.closest('.swiper-a04').querySelector('.swiper-button-next');
                            let swiperPrev = element.closest('.swiper-a04').querySelector('.swiper-button-prev');
                            if(current === (total-1)){
                                swiperNext.classList.add('swiper-button-disabled');
                            }
                            if (swiperNext.classList.contains('swiper-button-disabled')) {
                                swiperNext.classList.remove('is-active');
                                swiperPrev.classList.add('is-active');
                                swiperNext.style.setProperty('display', 'none', 'important');
                                swiperPrev.style.removeProperty('display');

                            }
                            else if(swiperPrev.classList.contains('swiper-button-disabled')) {
                                swiperPrev.classList.remove('is-active');
                                swiperPrev.style.setProperty('display', 'none', 'important');
                                swiperNext.classList.add('is-active');
                                swiperNext.style.removeProperty('display');
                            }
                            if (i == current) {
                                out = out + '<span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex=' + i + ' role="button" aria-label="Go to slide ' + i + 1 + '"></span>';
                            } else {
                                out = out + '<span class="swiper-pagination-bullet" tabindex=' + i + ' role="button" aria-label="Go to slide ' + i + 1 + '"></span>';
                            }
                        };
                        return out;
                    },

                },
                navigation: {
                    nextEl: '.swiper-a04 .swiper-button-next',
                    prevEl: '.swiper-a04 .swiper-button-prev',
                },
                keyboard: {
                    // el: '.swiper-a01',
                    enabled: true,
                    onlyInViewport: false,
                },
                breakpoints: {
                    768: {
                        spaceBetween: 16,
                    },
                    1280: {
                        spaceBetween: 32,
                    },
                },
            });
        });
    }

    // Swiper A05
    swiperA05(container, prev, next) {
        var swiperElms = document.querySelectorAll(container);
        swiperElms.forEach((element) => {
            var nextArrow = element.querySelector(next);
            var prevArrow = element.querySelector(prev);
            new Swiper(element, {
                slidesPerView: 'auto',
                spaceBetween: 32,
                pagination: {
                    el: '.swiper-a05 .swiper-pagination',
                    clickable: true,
                    type: 'custom',
                    renderCustom: function (swiper, current, total) {
                        var out = ''
                        for (var i = 1; i < total + 1; i++) {
                            if (i == current) {
                                out = out + '<span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex=' + i + ' role="button" aria-label="Go to slide ' + i + 1 + '"></span>';
                            } else {
                                out = out + '<span class="swiper-pagination-bullet" tabindex=' + i + ' role="button" aria-label="Go to slide ' + i + 1 + '"></span>';
                            }
                        }
                        ;
                        return out;
                    },

                },
                navigation: {
                    nextEl: '.swiper-a05 .swiper-button-next',
                    prevEl: '.swiper-a05 .swiper-button-prev',
                },
                keyboard: {
                    // el: '.swiper-a01',
                    enabled: true,
                    onlyInViewport: false,
                },
            });
        });
    }

    checkWindow() {
        window.addEventListener('resize', () => {
            this.windowHandler();
        }, false);
        window.addEventListener('load', () => {
            this.windowHandler();
        }, false);
    }

    windowHandler() {
        if (window.innerWidth < 768) {
            if (document.querySelectorAll(".swiper-a02")) {
                this.swiperA02('.swiper-a02 .swiper');
            }
            if (document.querySelectorAll(".swiper-a03")) {
                this.swiperA03('.swiper-a03 .swiper', '.swiper-a03 .swiper-button-next', '.swiper-a03 .swiper-button-prev');
            }
            if (document.querySelectorAll(".swiper-a05")) {
                this.swiperA05('.swiper-a05 .swiper', '.swiper-a05 .swiper-button-next', '.swiper-a05 .swiper-button-prev');
            }
        } else {
            var anchor2 = document.querySelectorAll(".swiper-a02");
            if (anchor2) {
                for (var i = 0; i < anchor2.length; i++) {
                    anchor2[i].innerHTML = this.portHoleHtml[i];
                }
            }
            var anchor3 = document.querySelectorAll(".swiper-a03");
            if (anchor3) {
                for (var i = 0; i < anchor3.length; i++) {
                    anchor3[i].innerHTML = this.relatedArticlesHtml[i];
                }
            }
        }
    }
    // Swiper A01
    swiperQuote(container, prev, next) {
        var swiperElms = document.querySelectorAll(container);
        swiperElms.forEach((element) => {
            var nextArrow = element.querySelector(next);
            var prevArrow = element.querySelector(prev);
            new Swiper(element, {
                slidesPerView: '1',
                loop: true,
                pagination: {
                    el: '.quote-carousel .swiper-pagination',
                    clickable: true,
                    type: 'custom',
                    renderCustom: function (swiper, current, total) {
                        var out = ''
                        for (var i = 1; i < total + 1; i++) {
                            if (i == current) {
                                out = out + '<span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex=' + i + ' role="button" aria-label="Go to slide ' + i + 1 + '"></span>';
                            } else {
                                out = out + '<span class="swiper-pagination-bullet" tabindex=' + i + ' role="button" aria-label="Go to slide ' + i + 1 + '"></span>';
                            }
                        }
                        ;
                        return out;
                    },

                },
                navigation: {
                    nextEl: '.quote-carousel .swiper-button-next',
                    prevEl: '.quote-carousel .swiper-button-prev',
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: false,
                },
                on: {
                    init: this.hideControls(),
                },
                // watchOverflow: true,
            });
        });
        // if ($('.swiper-a01 .swiper').length == 1) {
        //     $('.swiper-wrapper').addClass('disabled');
        //     $('.swiper-pagination').addClass('disabled');
        // }
    }

    hideControls() {
        var qc = document.querySelectorAll(".quote-carousel .swiper-slide");
        if (qc.length == 1) {
            document.querySelector('.swiper-control').classList.add("swiper-control-disabled");
            document.querySelector('.swiper-pagination').classList.add("swiper-pagination-disabled");
        }
    }

    swiperOne() {
        this.swiperA01('.swiper-a01 .swiper', '.swiper-a01 .swiper-button-next', '.swiper-a01 .swiper-button-prev');
    }

    swiperFour() {
        this.swiperA04('.swiper-a04 .swiper', '.swiper-a04 .swiper-button-next', '.swiper-a04 .swiper-button-prev');
    }

    swiperTwo() {
        this.swiperQuote(
            '.quote-carousel .swiper',
            '.quote-carousel .swiper-button-next',
            '.quote-carousel .swiper-button-prev'
        );
    }
}

export default SwiperSliderA01;
new SwiperSliderA01();
