<template>
  <div class="home">
    <!-- <menuTop />  -->
    <mainSlide />
    <contents />
    <footer2 />
  </div>
</template>

<style lang="sass">
// .home
//   padding: 40px
   
</style>


<script>
import mainSlide from '@/components/parkAngels/mainSlide.vue'
import contents from '@/components/parkAngels/contents.vue'

import footer2 from '@/components/footer2.vue'


export default {
  name: 'Home',
  components: {
    mainSlide,
    contents,
    footer2
  }
}
</script>
