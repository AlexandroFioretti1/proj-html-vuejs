<script>
import { store } from "../assets/data/store";
import HeaderJumbo from "./HeaderJumbo.vue"
import JumboText from "./JumboText.vue"

export default {
  name: "AppHeader",
  components: {
    HeaderJumbo,
    JumboText
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header class="d-flex justify-content-between text-align-center flex-column">
    <HeaderJumbo />
    <JumboText />

  </header>
</template>

<style lang="scss" scoped></style>
