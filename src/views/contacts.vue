<template>
  <div class="home">
    <!-- <menuTop />  -->
    <!-- <mainSlide /> -->
    <!-- <contents /> -->

  <div class="container-fluid mainSlide">

    <div class="bgMainSlide"
    style="background-image: url(/assets/bg/contacts-main.jpg)"></div>

    <menuTop /> 
    <div class="row contacts">
      <div class="col">
        <div class="item">
          <p class="title">Адрес:</p>
          <p>117041 г. Москва, ул. Адмирала Руднева, д. 20, офис 20</p>
        </div>
        <div class="item">
          <p class="title">Генеральный директор:</p>
          <p>Стрелкович Николай Владимирович</p>
          <p>+7 916 380 7112</p>
          <p>ns@naked.ru.com</p>
        </div>
        <div class="item">
          <p class="title">Технический отдел:</p>
          <p>Алексей Муромцев </p>
          <p>+7 926 284 9939</p>
          <p>tech@naked.ru com</p>
        </div>
      </div>

    </div>
    
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
  // border: 1px solid #fff
  // display: flex
  // justify-content: center
  color: #fff
  text-align: center
  font-size: 16px
  .item
    // border: 1px solid #fff
    // text-align: left
    padding: 15px 0 15px 0
    .title
      // font-size: 18px
      // font-weight: bold
      text-transform: uppercase
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
