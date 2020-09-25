<template>
<div class="home">
  <div class="container-fluid mainSlide">
    <div class="bgMainSlide"
    style="background-image: url(/assets/bg/collection-main.jpg)"></div>
    <menuTop /> 
    <div class="labelMainSlide">
        <img src="assets/icons/collection.svg" alt="">
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

  <div class="sectionLayout1 dark"
    style="background-image: url(/assets/icons/aboutLabelCompany.svg)">
    <div class="row justify-content-end">
      <div class="d-none d-lg-flex col-lg-6 cntIMG"
        style="background-image: url(/assets/bg/collection-about.jpg)"></div>
    </div>
    <div class="container-fluid slideContent">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-5 leftSide">
          <h3 class="title">Арт объекты</h3>
          <p class="text">Специалистами Naked разработана авторская технология промышленного производства арт-обьектов, которая позволяет воплотить любые  художественные  идеи  и создать параметрицеские формы любой сложности (усеценные сферы, конусы, гнутые конструкции, эффект морской волны и многих других) на выгодных условиях и в кратцайшие сроки.</p>
          <p class="text">Мы не только являемся авторами идей, но  и  создаем дизайн, находим необходимую технологию для реализации и производства арт-обьекта из разлицных материалов.</p>
        </div>
        <div class="col-auto rightSide">
            <!-- <img src="/assets/bg/landscape-manufacture.png" alt=""> -->
        </div>
      </div>
    </div>
  </div>

  <div class="sectionLayoutProject dark">
    <div class="container-fluid">
      <div class="slideContent row flex-row-reverse justify-content-between  d-flex align-items-stretch">
        <div class="col-lg-4 leftSide">
          <h3 class="title">Angel drum</h3>
          <p class="text">Лепестковый барабан...</p>
        </div>
        <div class="col-lg-8 rightSide">
          <div class="imgOutBorder"
          style="background-image: url(/assets/bg/collection-baraban.jpg)"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="sectionLayoutProject dark">
    <div class="container-fluid">
      <div class="slideContent row justify-content-between  d-flex align-items-stretch">
        <div class="col-lg-4 leftSide">
          <h3 class="title">Арт-объект "Чайки"</h3>
          <p class="text">Арт-объект установлен на территории премиального загородного поместья Agalarov Estate</p>
        </div>
        <div class="col-lg-8 rightSide">
          <div class="imgOutBorder"
          style="background-image: url(/assets/bg/collection-gulls.jpg)"></div>
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
    footer2
  }
}
</script>
