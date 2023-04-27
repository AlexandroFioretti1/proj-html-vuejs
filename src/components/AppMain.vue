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
      <div class="container text-center pt-5">
        <h2>Latest Brand News</h2>
        <hr class="light_gray" />
        <p class="light_gray pb-5" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          voluptatem itaque ipsam eaque libero possimus at magnam ea hic
          doloribus.
        </p>
      </div>
    </section>
    <!-- ./ section latest Brand News -->

    <!-- section tecnology -->
    <div class="container">
      <div class="row">
        <div class="col-8 pt-5">
          <div class="tecnology">
            <img
              src="../assets/img/blog_music_techo-800x400.jpg"
              class="w-100"
              alt="#"
            />
            <div class="info_card">
              <h6>Tecnology Music</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, sequi?
              </p>
            </div>
          </div>
          <div class="container p-0">
            <div class="row">
              <div class="col-6">
                <div class="tecnology">
                  <img
                    src="../assets/img/blog_music_techo-800x400.jpg"
                    class="w-100"
                    alt="#"
                  />
                  <div class="info_card">
                    <h6>Tecnology Music</h6>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam, sequi?
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="tecnology">
                  <img
                    src="../assets/img/blog_music_techo-800x400.jpg"
                    class="w-100"
                    alt="#"
                  />
                  <div class="info_card">
                    <h6>Tecnology Music</h6>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam, sequi?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tecnology">
            <img
              src="../assets/img/blog_music_techo-800x400.jpg"
              class="w-100"
              alt="#"
            />
            <div class="info_card">
              <h6>Tecnology Music</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, sequi?
              </p>
            </div>
          </div>
        </div>
        <div class="col-4 pt-5">
          <div class="card_right">
            <img
              src="../assets/img/blog_music_techo-800x400.jpg"
              class="w-100"
              alt=""
            />
            <h6></h6>
            <p></p>
          </div>
          <div class="card_right">
            <img
              src="../assets/img/blog_music_techo-800x400.jpg"
              class="w-100"
              alt=""
            />
            <h6></h6>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    <!-- section tecnology -->
  </main>
</template>

<style lang="scss" scoped>

</style>
