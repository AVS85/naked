<template>
  <div class="home">
    
    <div class="container-fluid mainSlide">
      <div class="bgMainSlide"
      style="background-image: url(/assets/bg/pr-minsk-main.jpg)"></div>
      <menuTop /> 
      <div class="blockTitle">
        <div class="title">ЖИЛОЙ КОМПЛЕКС</div>
        <div class="icon"><img src="/assets/icons/scrollDown.svg" alt=""></div>
      </div>

    </div>

  <div class="sectionLayout1 lite"
  style=" ">
    <div class="row justify-content-end">
      <div class="d-none d-lg-flex col-lg-6 cntIMG"
      style="background-image: url(/assets/bg/pr-minsk-about.jpg)"></div>
    </div>
    <div class="container-fluid slideContent noborder">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-5 leftSide">
          <h3 class="title">Благоустройство территории<br>жилого комплекса г. Минск</h3>
          <p class="text">Для благоустройства территории многофункционального комплекса с гостиницей на берегу р. Свислоць в г. Минске компанией Naked была создана концепция декоративных клумб с облицовкой из стали Corten с художественной фрезеровкой и деревянными лавками.</p>
          <p class="text">По индивидуальному дизайну были разработаны панели с художественной перфорацией из стали Corten толщиной 3 мм     с  контражурной  подсветкой  и  с  художественной  фрезеровкой в виде национальной белорусской "вязанки" из стали Corten толщиной 2мм продублированы на рассеивающий композитный материал с подсветкой. Узор соцетается с архитектурными элементами зданий МФК.</p>
        </div>
        <div class="col-auto rightSide">
          <!-- <img src="/assets/bg/landscape-manufacture.png" alt=""> -->
        </div>
      </div>
    </div>
  </div>



    <footer2 />
  </div>
</template>

<style lang="sass">
// .home
//   padding: 40px
   
</style>


<script>
// import mainSlide from '@/components/parkAngels/mainSlide.vue'
// import contents from '@/components/parkAngels/contents.vue'

import menuTop from '@/components/menuTop.vue'
import footer2 from '@/components/footer2.vue'


export default {
  name: 'Home',
  components: {
    // mainSlide,
    // contents,
    menuTop,
    footer2
  }
}
</script>
