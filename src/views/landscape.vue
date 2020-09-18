<template>
  <div class="home">
    <!-- <menuTop />  -->
    <mainBlock />
    <design />
    <footer2 />
  </div>
</template>

<style lang="sass">
// .home
//   padding: 40px
   
</style>


<script>
// @ is an alias to /src
// import menuTop from '@/components/menuTop.vue'
import mainBlock from '@/components/landscape/main.vue'
import design from '@/components/landscape/design.vue'
// import HelloWorld from '@/components/HelloWorld.vue'

import footer2 from '@/components/footer2.vue'


export default {
  name: 'Home',
  components: {
    // menuTop,
    mainBlock,
    design,
    footer2
  }
}
</script>
