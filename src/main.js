import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false



  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBf3Ux1DzmYO-rqOlsbwQC2RiOheC78m_g",
    authDomain: "my-address-pj-6bbdf.firebaseapp.com",
    databaseURL: "https://my-address-pj-6bbdf.firebaseio.com",
    projectId: "my-address-pj-6bbdf",
    storageBucket: "my-address-pj-6bbdf.appspot.com",
    messagingSenderId: "189232431599",
    appId: "1:189232431599:web:968b2170a277fb0499b61a",
    measurementId: "G-9XWF3G4J71"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
