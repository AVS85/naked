<template>
    <div class="layoutFooter2 container-fluid">
        <div class="row align-items-center">
            <div class="col item itemL">
                <div class="link">© Naked, 2020. Все права защищены</div>
            </div>
            <div class="col-auto item">
                <img src="/assets/icons/fb.svg" alt="">
                <img src="/assets/icons/insta.svg" alt="">
            </div>
            <div class="col item itemR">
                <div class="link">Разработка сайта: Outlier</div>
            </div>
        </div>
    </div>
</template>
<style lang="sass">
.layoutFooter2
    // position: absolute
    background-color: $bgDark
    padding: 40px 70px 40px 70px
    // z-index: 99
    .item
        display: flex
        justify-content: center
        align-items: center
        border: 1px solid red
        // font-family: 'header'
        font-size: 15px
        .link
            color: #fff
            padding: 0 25px 0 25px
        img
            height: 20px
            width: 20px
            margin: 0 10px 0 10px
    .itemL
        justify-content: flex-start
    .itemR
        justify-content: flex-end
</style>