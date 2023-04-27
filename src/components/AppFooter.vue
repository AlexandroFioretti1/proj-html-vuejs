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
          <li><a href="" class="text-light">Home</a></li>
          <li><a href="">Meet The Brand</a></li>
          <li><a href="">Live Dates</a></li>
          <li><a href="">Latest News</a></li>
          <li><a href="">Fans</a></li>
        </ul>
      </div>
    </nav>
    <!-- ./ navbar whit footer -->

    <!-- section footer_copyright -->
    <section id="copyright_footer">
      <div class="d-flex justify-content-between text-align-center p-3">
        <ul class="list-unstyled d-flex text-center align-items-center p-4 gap-2">
          <li>&copy; Copyright 2012 - 2020 |</li>
          <li>AVADA THEME BY THEMEFUSION |</li>
          <li>ALL RIGHTS RESERVED |</li>
          <li>POWERED BY WORDPRESS</li>
        </ul>
        
        <div class="social gap-2 d-flex justify-content-between text-align-center p-4">
        <div>fb</div>
        <div>tw</div>
        <div>insta</div>
        <div>yt</div>
      </div>
      </div>
    </section>
    <!-- ./ section footer_copyright -->
  </footer>
</template>

<style lang="scss" scoped>
#copyright_footer{
  background-color: #292d39;
  color: #aeaeaf;

}
</style>
