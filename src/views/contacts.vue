<template>
  <div class="home">
    <!-- <menuTop />  -->
    <!-- <mainSlide /> -->
    <!-- <contents /> -->

  <div class="container-fluid mainSlide">

    <div class="bgMainSlide"
    style="background-image: url(/assets/bg/contacts-main.jpg)"></div>

    <menuTop /> 
    <div class="contacts">ns@naked.ru.com <br>+7 916 380 7112</div>
    
    <div class="blockTitle">
      <div class="title"></div>
      <!-- <div class="icon">
        <img src="/assets/icons/scrollDown.svg" alt="">
      </div> -->
    </div>
  </div>

  
  <!-- <footer2 /> -->
  </div>
</template>

<style lang="sass">
.contacts
  // display: flex
  // justify-content: center
  color: #fff
  text-align: center
  font-size: 24px
</style>


<script>
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
