<template>
  <div class="home">
    
    <div class="container-fluid mainSlide">
      <div class="bgMainSlide"
      style="background-image: url(/assets/bg/pr-murmansk-main.jpg)"></div>
      <menuTop /> 
      <div class="blockTitle">
        <div class="title">СЕВЕРНОЕ СИЯНИЕ</div>
        <div class="icon"><img src="/assets/icons/scrollDown.svg" alt=""></div>
      </div>

    </div>

  <div class="sectionLayout1 lite"
  style=" ">
    <div class="row justify-content-end">
      <div class="d-none d-lg-flex col-lg-6 cntIMG"
      style="background-image: url(/assets/bg/pr-murmansk-about.jpg)"></div>
    </div>
    <div class="container-fluid slideContent noborder">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-5 leftSide">
          <h3 class="title">Концепция центрального парка г.Мурманск</h3>
          <p class="text">Парк выполнен в стиле «Арктик-стайл». Рубленые геометрицеские формы, символизирующие глыбы льда, подсвецены цветами северного сияния,  цто придаёт парку уникальную узнаваемую форму.</p>
          <p class="text">Название «Северное сияние» подцёркивает принадлежность к городу Мурманск, в гербе которого заклюцены два символа — ледокол и северное сияние.</p>
          <p class="text">Тротуарная плитка имеет треугольную форму и в комбинации из двух цветов создает эффект обломков льда, цто объединяет центральную цасть парка «ледокол» со всем парком.</p>
        </div>
        <div class="col-auto rightSide">
          <!-- <img src="/assets/bg/landscape-manufacture.png" alt=""> -->
        </div>
      </div>
    </div>
  </div>


  <otherProject/>
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
import otherProject from '@/components/otherProject.vue'
import footer2 from '@/components/footer2.vue'


export default {
  name: 'Home',
  components: {
    // mainSlide,
    // contents,
    menuTop,
    otherProject,
    footer2
  }
}
</script>
