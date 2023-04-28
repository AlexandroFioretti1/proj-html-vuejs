<script>
import { store } from "../assets/data/store";
import MusicLife from "./MusicLife.vue"
import InfoBrand from "./InfoBrand.vue";
import LatestBrand from "./LatestBrand.vue";
import ViewNews from "./ViewNews.vue";
import InfoAlbum from "./InfoAlbum.vue";
import LiveDates from "./LiveDates.vue";
import ViewDates from "./ViewDates.vue";

export default {
  name: "AppMain",
  components: {
    MusicLife,
    InfoBrand,
    LatestBrand,
    ViewNews,
    InfoAlbum,
    LiveDates,
    ViewDates,

  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main>
    <!-- section Music_Life -->
    <MusicLife />
    <!-- ./ section Music_Life -->

    <!--  section latest Brand News -->
    <InfoBrand />
    <!-- ./ section latest Brand News -->

    <!-- section tecnology -->
    <LatestBrand />
    <!-- ./ section tecnology -->

    <!-- section view_news-->
    <ViewNews />
    <!-- ./ section view_news-->


    <!-- section whit img-background and paragraph -->
    <InfoAlbum />
    <!-- ./ section whit img-background and paragraph -->


    <!-- section whit live dates-->
    <LiveDates />
    <!-- ./ section whit live dates-->


    <!-- section view_news-->
    <ViewDates />
    <!-- ./ section view_news-->
  </main>
</template>

<style lang="scss" scoped>

</style>
