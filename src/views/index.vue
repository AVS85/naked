<template>
  <div class="indexLayout">

    <menuTop /> 

    <div class="swiper-container indexSlider">
      <div class="swiper-wrapper">
        <div class="swiper-slide slide">
          <div class="img"><img src="/assets/icons/landscape.svg" alt=""></div>
          <div class="desc">ddddddddddddddd</div>
          <div class="btn"><button>Подробнее</button></div>
        </div>
        <div class="swiper-slide slide">
          <div class="img"><img src="/assets/icons/landscape.svg" alt=""></div>
          <div class="desc">122222222222222</div>
          <div class="btn"><button>Подробнее</button></div>
        </div>
      </div> 
      <div class="swiper-button-next">12</div>
      <div class="swiper-button-prev">23</div> 
    </div>
    <button>+</button>
    <div class="footer">
      © Naked, 2020. Все права защищены
    </div>
  </div>
</template>

<style lang="sass">
.swiper-container
  width: 100%
  height: 100%

.indexLayout
  border: 1px solid red
  background: #949494
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  justify-content: space-between
  padding: 40px
  min-height: 100vh
  // max-width: 100%
  .indexSlider
    border: 1px solid red
    .slide
      border: 1px solid green
      // width: 100%
      // min-height: 100
</style>


<script>
import menuTop from '@/components/menuTop.vue'
// import footer2 from '@/components/footer2.vue'

export default {
  // name: 'Home',
  data() {
    return {
      swiperProject: Object
    }
  },
  components: {
    menuTop,
    // footer2
  },
  mounted() {
    this.swiperProject = new Swiper('.indexSlider', {
      // runCallbacksOnInit: false,
      slidesPerView: 1,
      spaceBetween: 30,
      // freeMode: true,
      // centeredSlides: true,
      loop: true,
      // loopPreventsSlide: true,
      // slideToClickedSlide: true,
      // effect: 'fade',
      // speed: 500,
      // grabCursor: true,
      // autoplay: {
      //   delay: 0,
      //   disableOnInteraction: false,
      //   reverseDirection: true
      // },
      // navigation: {
      //   nextEl: '.sw-project-slider-next',
      //   prevEl: '.sw-project-slider-prev',
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })

    console.log(this.swiperProject);
  },
}
</script>
