import { createApp } from "vue";

import App from "./App.vue";

import * as bootstrap from 'bootstrap'

import "./assets/scss/app.scss";

import { library,} from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { 
    faBars,
} from "@fortawesome/free-solid-svg-icons";

import { 
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";

library.add(faBars, faFacebook, faInstagram, faYoutube, faTwitter)

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

