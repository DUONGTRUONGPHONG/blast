import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import Ant from 'ant-design-vue/lib'
import VueSocialSharing from 'vue-social-sharing'
import { initializeApp } from "firebase/app";
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import 'ant-design-vue/dist/antd.css'; 
import './assets/index.css'
import axios from 'axios'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Ant).use(VueSocialSharing).use(Vuelidate).use(axios)


/* add icons to the library */
library.add(fas,fab,far)
dom.watch()

Vue.config.productionTip = false
const firebaseConfig = {
  apiKey: "AIzaSyC--m_U66q2FnQHzoWxCBcZoddlsguQxno",
  authDomain: "login-ecdc5.firebaseapp.com",
  projectId: "login-ecdc5",
  storageBucket: "login-ecdc5.appspot.com",
  messagingSenderId: "400464652203",
  appId: "1:400464652203:web:97709af4286ecd05e894ee",
  measurementId: "G-W02QPBPSRS"
};
initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
/* add font awesome icon component */




