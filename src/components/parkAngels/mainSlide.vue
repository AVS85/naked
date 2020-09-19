<template>
  <div class="container-fluid mainSlide">

    <div class="bgMainSlide"
    style="background-image: url(/assets/bg/park-angelov-main.jpg)"></div>

    <menuTop /> 
    
    <div class="blockTitle">
      <div class="title">ПАРК АНГЕЛОВ</div>
      <div class="icon"><img src="/assets/icons/scrollDown.svg" alt=""></div>
    </div>

  </div>
</template>

<style lang="sass">
.blockTitle
  display: flex
  flex-direction: column
  align-items: center
  .title
    font-size: 72px
    font-weight: bold
    color: #fff  
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
    padding: 0 0 40px 0
    .btn
      border: 1px solid $accentGrey
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