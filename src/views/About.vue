<template>
  <div class="home">
    <!-- <menuTop />  -->
    <!-- <mainSlide /> -->
    <!-- <contents /> -->

    <div class="container-fluid mainSlide">

      <div class="bgMainSlide"
      style="background-image: url(/assets/bg/about-main.jpg)"></div>

      <menuTop /> 
      
      <div class="blockTitle">
        <div class="title"></div>
        <div class="icon"><img src="/assets/icons/scrollDown.svg" alt=""></div>
      </div>

    </div>

    <div id="lsDesign" class="sectionLayout1 dark"
      style="background-image: url(/assets/icons/aboutLabelCompany.svg)">
      <div class="row justify-content-end">
        <div class="d-none d-lg-flex col-lg-6 cntIMG"
          style="background-image: url(/assets/bg/about-company.jpg)"></div>
      </div>
      <div class="container-fluid slideContent">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-5 leftSide">
            <h3 class="title">Компания</h3>
            <p class="text">Naked - архитектурно-производственный консорциум, который специализируется на реализации любых идей по концептуальному оформлению городских пространств. Мы занимаемся разработкой уникальных решений по благоустройству парковых территорий, которые отличаются новизной идеи и современным стилем. </p>
            <p class="text">Основной задачей компании является создание единой художественной концепции пространства, которая объединяет все структурные элементы и позволяет придать любому объекту уникальный облик и индивидуальный неповторимый стиль.</p>
          </div>
          <div class="col-auto rightSide">
              <!-- <img src="/assets/bg/landscape-manufacture.png" alt=""> -->
          </div>
        </div>
      </div>
    </div>

      <div class="sectionLayoutProject dark">
        <div class="container-fluid">
          <div class="slideContent row flex-row-reverse justify-content-center  d-flex align-items-stretch">
            <div class="col-md-6 col-lg-5 leftSide">
              <h3 class="title">Николай Стрелкович</h3>
              <p class="text">Более 10 лет работы в коммерческой недвижимости и ритейле в России и Европе. Помимо работы в области торговой недвижимости, запускал и руководил уникальными проектами, в частности организовал торговую инфраструктуру на вокзалах Сочинского железнодорожного узла перед Олимпийскими играми Sochi-2014.</p>
              <p class="text">В 2016 году открыл фитнес-клуб в Москве в формате "у дома", в котором была реализована услуга "виртуальный тренер" совместно с известной школой "SEKTA".</p>
              <p class="text">В 2019 году был реализован проект национального значения по благоустройству "Парка Ангелов" в г.Кемерове. За личный вклад губернатором Кузбасса Цивилевым С.Е. присвоена личная государственная награда - медаль Алексея Леонова.</p>
              <p class="text">Образование: <br> Институт международной торговли и права, Passau Universität, Chester University.</p>
            </div>
            <div class="col-md-6 col-lg-5 rightSide">
              <div class="imgOutBorder"
              style="background-image: url(/assets/bg/about-nikolay-strelkovich.jpg)"></div>
            </div>
          </div>
        </div>
      </div>


      <div class="sectionLayoutProject dark">
        <div class="container-fluid">
          <div class="employees row">

            <div class="col-md-6 col-lg-4">
              <div class="teammateLayout">
                <div class="borderFoto">
                  <div class="foto">
                    <img src="/assets/bg/about-alexey-polushin.jpg" alt="">
                  </div>
                </div>
                <div class="inner">
                  <div class="name">АЛЕКСЕЙ  ПОЛЮШИН</div>
                  <div class="info">Более 10 лет работы в области разработки брендов и визуальных концепций для девелоперских компаний, многофункциональных комплексов, спортивных комплексов, торговых центров. Реализация крупных проектов как в России, так и за рубежом.</div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="teammateLayout">
                <div class="borderFoto">
                  <div class="foto">
                    <img src="/assets/bg/about-alexey-muromczev.jpg" alt="">
                  </div>
                </div>
                <div class="inner">
                  <div class="name">АЛЕКСЕЙ МУРОМЦЕВ</div>
                  <div class="info">Многолетний опыт в ландшафтном строительстве:  гольф поле чемпионского уровня, ландшафты загородных резиденций, общественных зон, МАФы, полигон испытаний ЯРЛ (скоростной трек и полоса препятствий для внедорожников), ДВФУ о. Русский ландшафт и искусственные водопады с потоком 1500 м3 в час.</div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="teammateLayout">
                <div class="borderFoto">
                  <div class="foto">
                    <img src="/assets/bg/about-yuliya-liteikina.jpg" alt="">
                  </div>
                </div>
                <div class="inner">
                  <div class="name">ЮЛИЯ ЛИТЕЙКИНА</div>
                  <div class="info">Опыт профессиональной деятельности в сфере маркетинговых коммуникаций с 2012 г. Консультант по стратегическому и операционному маркетингу, медиапланированию, менеджменту комплексного коммуникационного сопровождения брендов в сфере дизайна, строительства, архитектуры, IT. </div>
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </div>
      
    <footer2 />
  </div>
</template>

<style lang="sass">
.employees
  // border: 1px solid grey
  // padding: 40px
  .teammateLayout
    // border: 1px solid grey
    padding-bottom: 45px
    
    .borderFoto
      border: 14px solid $border
      position: relative
      // height: 40vmin
      height: 100%
      // width: calc(100% - 30px)
      padding: 0 25px 0px 25px
      @media (max-width: 992px)
        padding:  0 10px 0px 10px
      .foto
        position: relative
        top: 35px
        img
          width: 100%
    .inner
      position: relative
      // border: 1px solid #fff
      padding: 40px
      @media (max-width: 992px)
        padding:  0 25px 0px 25px
      .name
        font-size: 24px
        font-weight: bold
        padding: 35px 0 35px 0
      .info
        font-size: 18px
   
</style>


<script>
import menuTop from '@/components/menuTop.vue'
import footer2 from '@/components/footer2.vue'


export default {
  name: 'about',
  components: {
    menuTop,
    footer2
  }
}
</script>
