<script>
import { canvas } from '../assets/data/canvas';
export default {
    name: "OffCanvas",
    data(){
        return{
            canvas
        }
    }
}
</script>
 
<template>
    <section id="off_canvas">
        <nav class="navbar bg-light fixed-top p-0">
            <div class="container-fluid">
                <div
                    class="bg-transparent position-fixed top-0 start-0 w-100 d-flex justify-content-between align-items-center">
                    <a class="navbar-brand bg-transparent" href="#">
                        <img class="p-5" src="../assets/img/avada-music-logo.png" alt="Logo Header" />
                    </a>
                    <button class="navbar-toggler bg-transparent me-4" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="offcanvas offcanvas-end w-100 d-flex flex-column justify-content-center align-items-center gap-4 "
                    tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header w-100 position-fixed top-0 start-0 ">
                        <img class="p-5" src="../assets/img/avada-music-logo.png" alt="Logo Header" />
                        <button type="button" class="btn-close me-4" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body d-flex justify-content-center align-items-center flex-column gap-3">
                        <ul class="navbar-nav text-center pe-3 gap-5 d-flex flex-column justify-content-between align-items-center ">
                            <li v-for="item in canvas" class="nav-item">
                                <a class="nav-link" :href="item.path">{{ item.name }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </section>
</template>

<style lang="scss" scoped></style>