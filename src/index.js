import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// components
import App from './components/App.vue';

// services
import applicationService from './services/applications';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.debug = false;

// export so we can use in components
export let router = new VueRouter({
    hashbang: false
});

// define routes
//router.map({
//    '/': {
//        component: Home,
//        auth: true,
//        name: 'v1',
//    }
//});
//
//// fallback route
//router.redirect({
//    '*': '/'
//});

//applicationService.checkApp();

// expose the whole thing on element with 'app' as an id
router.start(App, '#app');