/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import '/node_modules/bootstrap/dist/js/bootstrap.min';
import 'boxicons';
import VueAxios from 'vue-axios';
//import VueRouter from 'vue-router';
import axios from 'axios';
import HomeComponent from './components/Vistas/Mascotas/HomeComponent.vue';
import NavComponent from './components/Layouts/NavComponent.vue';

const app = createApp({});


app.use(VueAxios, axios);
//Vue.use(VueRouter);

app.component('home-component', HomeComponent);
app.component('nav-component', NavComponent);
app.mount('#app');
