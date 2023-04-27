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
        <p class="light_gray pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatem itaque ipsam eaque libero possimus at magnam ea hic doloribus.</p>
      </div>
    </section>
    <!-- ./ section Music_Life -->

    <!--  section latest Brand News -->
    <section id="info_latest_brand">
      <div class="container text-center pt-5">
        <h2>Latest Brand News</h2>
        <hr class="light_gray" />
        <p class="light_gray pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatem itaque ipsam eaque libero possimus at magnam ea hic doloribus.</p>
      </div>
    </section>
    <!-- ./ section latest Brand News -->

    <!-- section tecnology -->
    <section id="latest_brand">
      <div class="container m-auto">
        <div class="row">
          <div class="col-8 pt-5">
            <div class="card my-3">
              <img src="../assets/img/blog_music_techo-800x400.jpg" class="w-100" alt="#" />
              <div class="info_card">
                <h5>Technology and music</h5>
                <p>Sed sit amet sem turpis. Curabitur cursus lacinia est at interdum risus id condimentum.</p>
              </div>
            </div>
            <div class="container p-0">
              <div class="row">
                <div class="col-6">
                  <div class="card my-3">
                    <img src="../assets/img/blog-post3-600x900.jpg" class="w-100" alt="#" />
                    <div class="info_card">
                      <h5>While my guitar gently weeps</h5>
                      <p>Sed sit amet sem turpis. Curabitur cursus lacinia est at interdum risus id condimentum.</p>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="card my-3">
                    <img src="../assets/img/blog-post4-600x900.jpg" class="w-100" alt="#" />
                    <div class="info_card">
                      <h5>It just sounds better</h5>
                      <p>Sed sit amet sem turpis. Curabitur cursus lacinia est at interdum risus id condimentum.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card my-3">
              <img src="../assets/img/blog_flavor_rock-600x300.jpg" class="w-100" alt="#" />
              <div class="info_card">
                <h5>The flavor of rock</h5>
                <p>Sed sit amet sem turpis. Curabitur cursus lacinia est at interdum risus id condimentum.</p>
              </div>
            </div>
          </div>
          <div class="col-4 d-flex flex-column pt-5">
            <div class="card my-3 flex-grow-1">
              <img src="../assets/img/blog-post1-600x900.jpg" class="w-100" alt="" />
              <h5>Taking it back to the old school</h5>
              <p>Sed sit amet sem turpis. Curabitur cursus lacinia est at interdum risus id condimentum.</p>
            </div>
            <div class="card my-3 flex-grow-1">
              <img src="../assets/img/blog-post2-600x900.jpg" class="w-100" alt="" />
              <h5>Sharing the stage with a legend</h5>
              <p>Sed sit amet sem turpis. Curabitur cursus lacinia est at interdum risus id condimentum.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ./ section tecnology -->

    <!-- section view_news-->
    <section id="view_news">
      <div class="container text-center p-5">
        <span> VIEW ALL LATEST NEWS </span>
      </div>
    </section>
    <!-- ./ section view_news-->

    <!-- section whit img-background and paragraph -->
    <section id="info_album" class="d-flex justify-content-center align-items-center">
      <div class="flex-column container d-flex text-center justify-content-between align-items-center p-5">
        <p>"I Just listened to it and said to myseld, "man, i really love this album." still, today, it just sounds so fresh. It sounds full of ideas. These guys wnew what they were doing. They're good. And they're inventrive. I haven't heard anything this year that's as inventive. Don't really expect to."</p>
        <img src="../assets/img/band_interview_play_icon.png" alt="#" />
      </div>
    </section>
    <!-- ./ section whit img-background and paragraph -->

    <!-- section whit live dates-->
    <section id="live_dates">
      <div class="container text-center p-5">
        <h2 class="p-2">Live Dates</h2>
        <hr class="light_gray p3"/>
        <p class="light_gray">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatem itaque ipsa ipsum recusandae quos eaque numquam eius soluta, consectetur ducimus, dolor esse, dolorum inventore adipisci magnam explicabo? Exercitationem nobis officia quas delectus, error dolorem! </p>
      </div> 
    <div class="container pb-5">
      <div class="accordion accordion-flush " id="accordionFlushExample">
        <div class="accordion-item mb-3">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed bg_color text-center justify-content-between " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">17/08/2020 GEM FESTIVAL 2020 ANAKALIA, GEORGIA.
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse bg_color" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <img src="../assets/img/accordion-open.png"  class="img-fluid" alt="">
            </div>
          </div>
        </div>
        <div class="accordion-item mb-3">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed bg_color text-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
             24/09/2020 GROOVEFEST DOMICAL REPUBLIC
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse bg_color" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body ">
              <img src="../assets/img/accordion-open.png"  class="img-fluid" alt="">
            </div>
          </div>
        </div>
        <div class="accordion-item mb-3">
          <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed bg_color text-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">31/10/2020 OASIS GESTIVAL 2020 MARRAKECH, MAROCCO</button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse bg_color" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body ">
               <img src="../assets/img/accordion-open.png"  class="img-fluid" alt="">
            </div>
          </div>
        </div>
        <div class="accordion-item mb-3">
          <h2 class="accordion-header" id="flush-headingFour">
            <button class="accordion-button collapsed bg_color text-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">07/11/2020 MOGA FESTIVAL - ESSEOURIA, MAROCCO</button>
          </h2>
          <div id="flush-collapseFour" class="accordion-collapse collapse bg_color" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body ">
              <img src="../assets/img/accordion-open.png"  class="img-fluid" alt="">
            </div>
          </div>
        </div>
        <div class="accordion-item mb-3 ">
          <h2 class="accordion-header" id="flush-headingFive">
            <button class="accordion-button collapsed bg_color text-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">10/12/2020 ENVISION FESTIVAL -UVITA, COSTA RICA</button>
          </h2>
          <div id="flush-collapseFive" class="accordion-collapse collapse bg_color" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body ">
              <img src="../assets/img/accordion-open.png"  class="img-fluid" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    <!-- ./ section whit live dates-->

    <!-- section view_news-->
    <section id="view_news">
      <div class="container text-center p-5">
        <span> VIEW ALL LIVES DATE </span>
      </div>
    </section>
    <!-- ./ section view_news-->
  </main>
</template>

<style lang="scss" scoped>


</style>
