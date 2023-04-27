<script>
import { store } from "../assets/data/store";

export default {
  name: "AppHeader",
  components: {},
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header class="d-flex justify-content-between text-align-center flex-column">
        <!-- img whit icon -->
    <div class="d-flex justify-content-between text-align-center">
      <img class="p-2" src="../assets/img/avada-music-logo.png" alt="Logo Header" />
      <div class="p-4">
        <font-awesome-icon icon="fa-solid fa-bars" style="color: #ffffff" />
      </div>
    </div>
        <!-- ./ img whit icon -->

        <!-- creare componente jumbotron -->


        <!-- title and paragraph  -->
    <div class="jumbo_text m-auto">
      <div class="container text-center ">
        <h1 class="title_text">Untold Stories</h1>
        <p>There is an untold story behind favorite song.</p>
        <!-- ./ title and paragraph  -->
        <!-- btn header -->
        <button class="bg_btn">LATEST ALBUM</button>
        <button class="bg_trasparent">LIVE DATES</button>
      </div>
    </div>
        <!-- ./ btn header -->
        <!-- ./ creare componente jumbotron -->
  </header>
</template>

<style lang="scss" scoped>
header {
  background-image: url(../assets/img/home_slider.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  height: 800px;
  .bg_btn {
    background-color: #eb4b54;
    color: white;
    margin-right: 7px;
    padding: 0 1rem;
  }
  .bg_trasparent {
    background: transparent;
    color: white;
    margin-left: 7px;
    border: solid 1px white;
    padding: 0 1rem;
  }
}
</style>
