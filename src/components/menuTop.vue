<template>
    <div class="layoutMenuTop container-fluid">
        <div class="row align-items-center">
            <div class="d-none d-lg-flex col item itemL">
                <div class="link">О нас</div>
                <div class="link">Контакты</div>
            </div>
            <div class="col-auto item">
                <img src="assets/icons/logoNaked.svg" alt="">
            </div>
            <div class="d-none d-md-flex col item itemR">
                <div class="link">
                    <router-link to="/park-angelov" >Concept</router-link>
                    </div>
                <div class="link">
                    <router-link to="/landscape" >Landscape</router-link>
                    </div>
                <div class="link">
                    <router-link to="/" >Collection</router-link>
                    </div>
                <div class="lang active">Ru</div>
                <div class="lang">En</div>
            </div>
        </div>
    </div>
</template>
<style lang="sass">
.layoutMenuTop
    // position: absolute
    padding: 0 30px 0 30px
    z-index: 99
    .item
        display: flex
        justify-content: center
        align-items: center
        border: 1px solid red
        font-family: 'header'
        font-size: 16px
        .link
            color: #fff
            padding: 0 25px 0 25px
            a
                color: #fff

            a:hover
                color: #fff
                
        .lang
            display: flex
            align-items: center
            justify-content: center
            color: #fff
            margin: 0 7px 0 7px
            height: 35px
            width: 35px
            &.active
                border: 0
                border-radius: 50%
                background-color: $accentGrey
    .itemL
        justify-content: flex-start
    .itemR
        justify-content: flex-end
</style>