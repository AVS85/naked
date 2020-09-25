<template>
  <div class="container-fluid mainSlide">
    <div class="bgMainSlide"
    style="background-image: url(/assets/bg/pr-derbent-main.jpg)"></div>

    <menuTop /> 

    <div class="labelMainSlide">
        <img src="assets/icons/landscape.svg" alt="">
    </div>
 
    <div class="btnNav">
        <router-link to="#" v-scroll-to="'#lsDesign'" class="btn">Проектирование</router-link> 
        <router-link to="#" v-scroll-to="'#lsManufacture'" class="btn">Производство</router-link> 
        <router-link to="#" v-scroll-to="'#lsMaterials'" class="btn">Материалы</router-link> 
        <router-link to="#" v-scroll-to="'#lsProjects'" class="btn">Реализованные проекты</router-link> 
    </div>

  </div>
</template>

<style lang="sass">
 
.mainSlide
  position: relative
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center
  background: transparent
  min-height: 100vh
  padding: 40px
  .bgMainSlide
    position: absolute
    // border: 1px solid red
    bottom: 0
    background-repeat: no-repeat
    background-position: center
    background-size: cover
    filter: brightness(.75)
    min-height: 100% 
    width: 100% 
    z-index: -1
  .labelMainSlide
    // border: 1px solid red
    img
      width: 100%
  .btnNav

    // border: 1px solid red
    display: flex
    flex-wrap: wrap
    justify-content: center
    padding: 0 0 40px 0
    .btn
      // border: 1px solid $accentGrey
      border-radius: 25px 
      background-color: $accentGrey
      color: #fff
      font-size: 15px
      height: 45px  
      min-width: 225px
      margin: 15px 15px 0 15px

</style>

<script>
import menuTop from '@/components/menuTop.vue'

export default {
  name: 'Home',
  components: {
    menuTop,
  }
}
</script>