import Swiper from 'swiper/bundle';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

class Animation{
  constructor() {
    this.lottieAnimation();
  }
  lottieAnimation(){

    const mediaQueryList = window.matchMedia('(max-width: 767px)');
    if(mediaQueryList.matches) {
      lottieForMobile();
    }
    else {
      lottieForLargeScreen();
    }
    
    window.matchMedia("(max-width: 768px)").addEventListener("change", e => { 
      if(e.matches) {
        document.getElementById('firstLottie').innerHTML='';
        document.getElementById('secondLottie').innerHTML='';
        document.getElementById('thirdLottie').innerHTML='';
        lottieForMobile();
      }
      else {
        lottieForLargeScreen();
      }
    });

    function lottieForLargeScreen(){
      LottieInteractivity.create({
        mode: 'scroll',
        player: '#firstLottieLarge',
        actions: [
            {
              visibility: [0, 0.3],
              type: 'seek',
              frames: [1, 1],
            },
            {
              visibility: [0.3, 0.45],
              type: 'seek',
              frames: [1, 40],
            },
            {
              visibility: [0.45, 1.0],
              type: 'seek',
              frames: [40, 40],
            },
          ],
      });
      LottieInteractivity.create({
        mode: 'scroll',
        player: '#secondLottieLarge',
        actions: [
            {
              visibility: [0, 0.45],
              type: 'seek',
              frames: [1, 1],
            },
            {
              visibility: [0.45, 0.6],
              type: 'seek',
              frames: [1, 40],
            },
            {
              visibility: [0.6, 1.0],
              type: 'seek',
              frames: [40, 40],
            },
          ],
      });
      LottieInteractivity.create({
        mode: 'scroll',
        player: '#thirdLottieLarge',
        actions: [
            {
              visibility: [0, 0.6],
              type: 'seek',
              frames: [1, 1],
            },
            {
              visibility: [0.6, 0.75],
              type: 'seek',
              frames: [1, 40],
            },
            {
              visibility: [0.75, 1.0],
              type: 'seek',
              frames: [40, 40],
            },
          ],
      });
  }
    function lottieForMobile(){

      let lottie1 = bodymovin.loadAnimation({
        container: document.getElementById('firstLottie'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'https://assets10.lottiefiles.com/packages/lf20_dgb1giim.json',
      });

      let lottie2 =  bodymovin.loadAnimation({
        container: document.getElementById('secondLottie'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'https://assets6.lottiefiles.com/packages/lf20_k3zb2fto.json',
      });

      let lottie3 = bodymovin.loadAnimation({
        container: document.getElementById('thirdLottie'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'https://assets2.lottiefiles.com/packages/lf20_qne7yq0l.json',
      });  

        var swiperElms = document.querySelectorAll('.infographic2-carousel .swiper');
        swiperElms.forEach((element) => {
            new Swiper(element, {
                slidesPerView: 'auto',
                spaceBetween: 12,
                pagination: {
                    el: '.infographic2-carousel .swiper-pagination',
                    clickable: true,
                    type: 'custom',
                    renderCustom: function (swiper, current, total) {
                      var out = ''
                      for (var i = 1; i < total+1; i++) {
                        if (i == current) {
                          out = out + '<span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex='+i+' role="button" aria-label="Go to slide '+i+1+'"></span>';
                        }
                        else {
                          out = out + '<span class="swiper-pagination-bullet" tabindex='+i+' role="button" aria-label="Go to slide '+i+1+'"></span>';
                        }
                      };
                      return out;
                    },
            
                },
                on:{
                  slideChange: function() {
                    playLottie();
                  },
                },
            });
        });

      function playLottie(){
        lottie1.playSegments([0,40], true);
        lottie2.playSegments([0,40], true);
        lottie3.playSegments([0,40], true);
      }
      function resetLottie(){
        lottie1.playSegments([0,1], true);
        lottie2.playSegments([0,1], true);
        lottie3.playSegments([0,1], true);
      }
      ScrollTrigger.create({
        trigger: '#firstLottie',
        start: 'top center',
        pin:'false',
        toggleActions: "none none none none",
        onEnter: function() { 
          playLottie();
        }, 
        onLeave: function() { 
          resetLottie();
        },
        onEnterBack:function(){
          playLottie();
        },
        onLeaveBack:function(){
          resetLottie();
        },
      });
    }
  }
  
}

export default Animation;
new Animation();
