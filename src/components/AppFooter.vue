<script>
import { store } from "../assets/data/store";

export default {
  name: "AppFooter",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <footer>
    <!-- navbar whit footer -->
    <nav id="footer_nav">
      <div class="d-flex justify-content-between text-align-center p-3">
        <img class="p-2" src="../assets/img/avada-music-logo.png" alt="Logo footer"/>
        <ul class="list-unstyled d-flex text-center align-items-center p-4 gap-2">
          <li class="light_c">Home</li>
          <li>Meet The Brand</li>
          <li>Live Dates</li>
          <li>Latest News</li>
          <li>Fans</li>
        </ul>
      </div>
    </nav>
    <!-- ./ navbar whit footer -->

    <!-- footer_copyright -->
    <section id="copyright_footer">
      <div class="d-flex justify-content-between text-align-center p-3">
        <ul class="list-unstyled d-flex text-center align-items-center p-4 gap-2">
          <li class="light_c">&copy; Copyright 2012 - 2020 |</li>
          <li>AVADA THEME BY THEMEFUSION |</li>
          <li>ALL RIGHTS RESERVED |</li>
          <li>POWERED BY WORDPRESS</li>
        </ul>
        
      </div>
    </section>
    <!-- ./ footer_copyright -->
  </footer>
</template>

<style lang="scss" scoped>
#copyright_footer{
  background-color: #292d39;
  color: #aeaeaf;

}
</style>
