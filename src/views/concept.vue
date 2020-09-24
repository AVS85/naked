<template>
  <div class="container-fluid mainSlide">
    <div class="bgMainSlide"
    style="background-image: url(/assets/bg/concept-main.jpg)"></div>

    <menuTop /> 

    <div class="labelMainSlide">
        <img src="assets/icons/concept.svg" alt="">
    </div>
 
    <div class="btnNav">
        <!-- <router-link to="#" v-scroll-to="'#lsDesign'" class="btn">Проектирование</router-link> 
        <router-link to="#" v-scroll-to="'#lsManufacture'" class="btn">Производство</router-link> 
        <router-link to="#" v-scroll-to="'#lsMaterials'" class="btn">Материалы</router-link> 
        <router-link to="#" v-scroll-to="'#lsProjects'" class="btn">Реализованные проекты</router-link>  -->
    </div>

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
