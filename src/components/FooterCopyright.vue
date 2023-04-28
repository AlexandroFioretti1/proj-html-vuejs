<script>
import {socialNets} from "../assets/data/socialNets"


export default {
  name: "FooterCopyright",
  data(){
    return{socialNets}
  },
}
</script>

<template>
  <!-- section footer_copyright -->
  <section id="copyright_footer">
    <div class="d-flex justify-content-between text-align-center p-3">
      <ul class="list-unstyled d-flex text-center align-items-center p-4 gap-2">
        <li>&copy; Copyright 2012 - 2020 |</li>
        <li>AVADA THEME BY THEMEFUSION |</li>
        <li>ALL RIGHTS RESERVED |</li>
        <li>POWERED BY WORDPRESS</li>
      </ul>
      <div class="social gap-2 d-flex justify-content-between text-align-center  p-4">
        <ul class="list-unstyled d-flex gap-3">
          <li v-for="brand in socialNets">
            <a :href="brand.path"><font-awesome-icon :icon="brand.name" style="color: #d6d6d6 ; font-size: 2rem;" /></a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!-- ./ section footer_copyright -->
</template>

<style lang="scss" scoped>

</style>