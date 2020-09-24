<template>
  <div class="home">
    
    <div class="container-fluid mainSlide">
      <div class="bgMainSlide"
      style="background-image: url(/assets/bg/pr-derbent-main.jpg)"></div>
      <menuTop /> 
      <div class="blockTitle">
        <div class="title">КОНЦЕПЦИЯ ПАРКА</div>
        <div class="icon"><img src="/assets/icons/scrollDown.svg" alt=""></div>
      </div>

    </div>

  <div class="sectionLayout1 lite"
  style=" ">
    <div class="row justify-content-end">
      <div class="d-none d-lg-flex col-lg-6 cntIMG"
      style="background-image: url(/assets/bg/pr-derbent-about.jpg)"></div>
    </div>
    <div class="container-fluid slideContent noborder">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-5 leftSide">
          <h3 class="title">Концепция центрального парка г.Дербент</h3>
          <p class="text">Для благоустройства парка в городе Дербент были созданы концепция и предпроектное предложение на изготовление и монтаж декоративных сидений амфитеатра, приствольных решеток, решеток фонтана и других декоративных элементов, выполненных в стиле народного орнамента Дагестана.</p>
          <p class="text">Стилизация  народного  орнамента  Дагестана  соединена в геометрицески завершенные формы, которые, подобно сукну, объединяют все этносы дагестанского народа на одном ковре – в одном парке.</p>
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
