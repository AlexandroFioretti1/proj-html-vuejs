<script>

import { store } from "../assets/data/store";
import FooterNav from "./FooterNav.vue"
import FooterCopyright from "./FooterCopyright.vue"

export default {
  name: "AppFooter",
  components: {
    FooterNav,
    FooterCopyright,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <footer>
    <FooterNav />
    <FooterCopyright />
  </footer>
</template>

<style lang="scss" scoped>

</style>
