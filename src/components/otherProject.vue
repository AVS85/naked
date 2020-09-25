<template>
<div class="otherProjectLayout container-fluid">
    <div class="row">
      <div class="col title">Другие проекты</div>
    </div>
    <div class="row">
        <div class="col-lg-4 slide">
            <div><img src="/assets/bg/otherProject-1.jpg" alt=""></div>
            <div class="info">
            <div class="">
                <div class="name">Парк «СЕВЕРНОЕ СИЯНИЕ»</div>
                <div class="city">г. Мурманск, 2020</div>
            </div>
            <div class="learnMore">Подробнее</div>
            </div>  
        </div>
        <div class="col-lg-4 slide">
            <div><img src="/assets/bg/otherProject-2.jpg" alt=""></div>
            <div class="info">
            <div class="">
                <div class="name">Парк</div>
                <div class="city">г. Дербент, 2020</div>
            </div>
            <div class="learnMore">Подробнее</div>
            </div>   
        </div>
         <div class="col-lg-4 slide">
            <div><img src="/assets/bg/otherProject-3.jpg" alt=""></div>
            <div class="info">
            <div class="">
                <div class="name">Благоустройство территории жилого комплека</div>
                <div class="city">г. Минск, 2018</div>
            </div>
            <div class="learnMore">Подробнее</div>
            </div>   
        </div>
    </div>
</div>
</template>

<style lang="sass">
.otherProjectLayout
  // border: 1px solid red
  padding: 80px 40px 90px 70px
  .title
    font-size: 36px
    font-weight: bold
    padding-bottom: 60px
  .slide
    // border: 1px solid red
    img
      width: 100%
    .info
      display: flex
      justify-content: space-between
      padding: 24px 0
      .name
        font-size: 18px
        font-weight: bold
      .city
        font-size: 18px
        font-weight: normal
      .learnMore
        font-size: 16px
        font-weight: bold 
        padding-left: 35px
</style>