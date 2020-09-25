<template>
<div class="home">
  <div class="container-fluid mainSlide">
    <div class="bgMainSlide"
    style="background-image: url(/assets/bg/concept-main.jpg)"></div>

    <menuTop /> 

    <div class="labelMainSlide">
        <img src="assets/icons/concept.svg" alt="">
    </div>
 
    <!-- <div class="btnNav"> -->
        <!-- <router-link to="#" v-scroll-to="'#lsDesign'" class="btn">Проектирование</router-link> 
        <router-link to="#" v-scroll-to="'#lsManufacture'" class="btn">Производство</router-link> 
        <router-link to="#" v-scroll-to="'#lsMaterials'" class="btn">Материалы</router-link> 
        <router-link to="#" v-scroll-to="'#lsProjects'" class="btn">Реализованные проекты</router-link>  -->
    <!-- </div> -->
      <div class="blockTitle">
        <!-- <div class="title">ПАРК АНГЕЛОВ</div> -->
        <div class="icon"><img src="/assets/icons/scrollDown.svg" alt=""></div>
      </div>
  </div>

  <div class="sectionLayoutProject dark">
    <div class="container-fluid">
      <div class="slideContent row flex-row-reverse justify-content-between  d-flex align-items-stretch">
        <div class="col-lg-4 leftSide">
          <h3 class="title">Мурманск</h3>
          <p class="text">Название «Северное сияние» подцёркивает принадлежность к городу Мурманск, в гербе которого заклюцены два символа — ледокол и северное сияние.</p>
          <p class="text">Тротуарная плитка имеет треугольную форму и в комбинации из двух цветов создает эффект обломков льда, цто объединяет центральную цасть парка «ледокол» со всем парком.</p>
        </div>
        <div class="col-lg-8 rightSide">
          <div class="imgOutBorder"
          style="background-image: url(/assets/bg/pr-murmansk-about.jpg)"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="sectionLayoutProject dark">
    <div class="container-fluid">
      <div class="slideContent row justify-content-between  d-flex align-items-stretch">
        <div class="col-lg-4 leftSide">
          <h3 class="title">Концепция центрального парка г.Дербент</h3>
          <p class="text">Для благоустройства парка в городе Дербент были созданы концепция и предпроектное предложение на изготовление и монтаж декоративных сидений амфитеатра, приствольных решеток, решеток фонтана и других декоративных элементов, выполненных в стиле народного орнамента Дагестана.</p>
          <p class="text">Стилизация  народного  орнамента  Дагестана  соединена в геометрицески завершенные формы, которые, подобно сукну, объединяют все этносы дагестанского народа на одном ковре – в одном парке.</p>
        </div>
        <div class="col-lg-8 rightSide">
          <div class="imgOutBorder"
          style="background-image: url(/assets/bg/pr-derbent-about.jpg)"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="sectionLayoutProject dark">
    <div class="container-fluid">
      <div class="slideContent row flex-row-reverse justify-content-between  d-flex align-items-stretch">
        <div class="col-lg-4 leftSide">
          <h3 class="title">Жилой комплекс Минск</h3>
          <p class="text">Для благоустройства территории многофункционального комплекса с гостиницей на берегу р. Свислоць в г. Минске компанией Naked была создана концепция декоративных клумб с облицовкой из стали Corten с художественной фрезеровкой и деревянными лавками.</p>
          <p class="text">По индивидуальному дизайну были разработаны панели с художественной перфорацией из стали Corten толщиной 3 мм     с  контражурной  подсветкой  и  с  художественной  фрезеровкой в виде национальной белорусской "вязанки" из стали Corten толщиной 2мм продублированы на рассеивающий композитный материал с подсветкой. Узор соцетается с архитектурными элементами зданий МФК.</p>
        </div>
        <div class="col-lg-8 rightSide">
          <div class="imgOutBorder"
          style="background-image: url(/assets/bg/pr-minsk-about.jpg)"></div>
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
// @ is an alias to /src
import menuTop from '@/components/menuTop.vue'
// import mainBlock from '@/components/concept/main.vue'
// import landscape from '@/components/landscape/landscape.vue'
// import HelloWorld from '@/components/HelloWorld.vue'

import footer2 from '@/components/footer2.vue'


export default {
  name: 'Home',
  components: {
    menuTop,
    // mainBlock,
    // landscape,
    footer2
  }
}
</script>
