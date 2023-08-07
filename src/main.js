import './assets/main.css'
import BarcodeGenerator from "./views/HomeView.vue";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import JlDatatable from 'jl-datatable'


// Vue.component("barcode-generator", BarcodeGenerator);

const app = createApp(App)

app.component('jl-datatable', JlDatatable)

app.use(router)

app.mount('#app')
