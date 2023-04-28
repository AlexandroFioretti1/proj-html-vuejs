<script>
import { ftNavbar } from "../assets/data/ftNavbar";
export default {
  name: "FooterNav",
  data (){
    return{
      ftNavbar,
    }
  }
}
</script>

<template>
  <nav id="footer_nav">
    <div class="d-flex justify-content-between text-align-center p-3">
      <img class="p-3" src="../assets/img/avada-music-logo.png" alt="Logo footer" />
      <ul class="list-unstyled d-flex text-center align-items-center p-4 gap-3">
        <li v-for="page in ftNavbar">
          <a :href="page.path" class="text-light">{{page.name}}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>

</style>