<script>
import { store } from "../assets/data/store";

export default {
  name: "AppMain",
  components: {},
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
    <section id="music_life">
      <div class="container text-center pt-5">
        <h2>Music Is Life</h2>
        <hr class="light_gray" />
        <p class="light_gray pb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          voluptatem itaque ipsam eaque libero possimus at magnam ea hic
          doloribus.
        </p>
      </div>
    </section>
    <!-- ./ section Music_Life -->

    <!-- ./ section latest Brand News -->
    <section id="latest_brand">
      <div class="container text-center pt-5 ">
        <h2>Latest Brand News</h2>
        <hr class="light_gray" />
        <p class="light_gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          voluptatem itaque ipsam eaque libero possimus at magnam ea hic
          doloribus.
        </p>
      </div>
    </section>
    <!-- ./ section latest Brand News -->

  </main>
</template>

<style lang="scss" scoped>
#latest_brand {
  background-color: #292d39;
  h2 {
    color: white;
  }

  .light_gray {
    color: #aeaeaf;
  }
}
</style>
