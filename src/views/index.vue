<template>
  <div class="indexLayout"
  style="background-image: url(/assets/bg/index-landscape.jpg)">

    <menuTop /> 

    <div class="swiper-container indexSlider">
      <div class="swiper-wrapper">
        <div class="swiper-slide slide">
          <div class="img"><img src="/assets/icons/landscape.svg" alt=""></div>
          <div class="desc">Concept.</div>
          <div class="outBtn">
            <router-link to="/park-angelov" class="innerBtn">Подробнее</router-link>
          </div>
        </div>
        <div class="swiper-slide slide">
          <div class="img"><img src="/assets/icons/landscape.svg" alt=""></div>
          <div class="desc">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.</div>
          <div class="outBtn">
            <router-link to="/landscape" class="innerBtn">Подробнее</router-link>
          </div>
        </div>
        <div class="swiper-slide slide">
          <div class="img"><img src="/assets/icons/collection.svg" alt=""></div>
          <div class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dignissimos nesciunt optio at debitis harum ipsum adipisci quae? Optio molestias velit ducimus nobis recusandae eum alias suscipit consequatur nisi voluptates.</div>
          <div class="outBtn">
            <router-link to="/" class="innerBtn">Подробнее</router-link>
          </div>
        </div>
      </div> 
      <!-- <div class="swiper-button-next">12</div> -->
      <!-- <div class="swiper-button-prev">23</div>  -->
    </div>
    <div class="indexFooter container-fluid">
      <div class="row justify-content-between align-items-center">
        <div class="col-auto">© Naked, 2020. Все права защищены</div>
        <div class="col-auto">

          <div class="wr-paggination">
            <div class="item">
              <div class="line"> <div class="halfLine"></div> </div>
            </div>
            <div class="item">
              <div class="label">Concept</div>
              <div class="line">
                <div class="halfLine"></div>
                <div class="dotSm"></div>
                <div class="halfLine"></div>
              </div>
            </div>
            <div class="item"
            @click="swiperProject.slideTo(1)">
              <div class="label active">Landscape</div>
              <div class="line">
                <div class="halfLine"></div>
                <div class="dotLg"></div>
                <div class="halfLine"></div>
              </div>
            </div>
            <div class="item">
              <div class="label">Collection</div>
              <div class="line">
                <div class="halfLine"></div>
                <div class="dotSm"></div>
                <div class="halfLine"></div>
              </div>
            </div>
            <div class="item"> <div class="line"> <div class="halfLine"></div> </div>
            </div>
          </div>

        </div>

        <div class="col-auto">Разработка сайта: Outlier</div>
      </div>
      
    </div>
  </div>
</template>

<style lang="sass">
 
  
.wr-paggination
  // border: 1px dotted #fff
  display: flex
  align-items: flex-end
  padding: 10px
  .item
    // border: 1px dotted red

    .label
      // border: 1px dotted #fff
      font-size: 14px
      text-align: center
      &.active
        font-size: 16px
        font-weight: bold


    .line
      display: flex
      align-items: center
      // border: 1px dotted #fff
      height: 30px

      .halfLine
        border-bottom: 1px solid $accentGrey
        min-width: 35px
        width: 100%
      .dotSm
        border: 1px solid $accentGrey
        border-radius: 5px
        background: $accentGrey
        margin: 6px
        min-height: 8px
        min-width: 8px
      .dotLg
        border: 9px solid $accentGrey
        border-radius: 13px
        background: #fff
        margin: 6px
        min-height: 25px
        min-width: 25px 
  
 
 

.swiper-container
  width: 100%
  height: 100%

.indexLayout
  // border: 1px solid red
  background: #949494
  background-repeat: no-repeat
  background-size: cover
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  justify-content: space-between
  padding: 40px
  min-height: 100vh
  // max-width: 100%
  .indexSlider
    // border: 1px solid red
    color: #fff
    padding: 64px 0 64px 0
    .slide
      // border: 1px solid green
      // width: 100%
      // min-height: 100
      .img
        // border: 1px solid green
        width: 100%
        overflow: hidden
        img
          // width: 100%
          @media (max-width: 992px)
            width: 100%

      .desc
        // border: 1px solid yellow

        font-size: 18px
        line-height: 28px
        padding: 38px 0 38px 0
        max-width: 750px
      .outBtn
        border: 1px solid #fff
        height: 67px
        width: 187px
        .innerBtn
          display: flex
          align-items: center
          border-color: #fff
          border-style: solid
          border-width: 0 1px 1px 0
          background-color: transparent
          background-image: url(/assets/icons/arrowRightBtn.svg)
          background-repeat: no-repeat
          background-position: 90% 50%
          background-size: 12px
          color: #fff
          font-size: 18px
          font-weight: bold
          padding-left: 15px
          height: 60px
          width: 180px
  
  .indexFooter
    color: #fff
    font-size: 15px
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
      slidesPerView: 3,
      spaceBetween: 300,
      // freeMode: true,
      centeredSlides: true,
      // loop: true,
      // loopPreventsSlide: true,
      // slideToClickedSlide: true,
      effect: 'fade',
      speed: 500,
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
