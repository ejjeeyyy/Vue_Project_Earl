import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import firebase from 'firebase/compat/app'
import store from './store'

// import { i nitializeApp } from 'firebase/app'

// const app = createApp(App)

// app.use(router)

// app.mount('#app')
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebase = {
//   apiKey: "AIzaSyCyX-9L3BQSFLHRw15HOQ27Eb_XyAgVTiE",
//   authDomain: "vueproject-c6c48.firebaseapp.com",
//   databaseURL: "https://vueproject-c6c48-default-rtdb.firebaseio.com",
//   projectId: "vueproject-c6c48",
//   storageBucket: "vueproject-c6c48.appspot.com",
//   messagingSenderId: "62721318737",
//   appId: "1:62721318737:web:e5efb36bf126bfdff03d70",
//   measurementId: "G-C5CBFLY28K"
// };

// firebase.initializeApp(firebase);
// initializeApp(firebase);

// Initialize Firebase
// const app = initializeApp(firebase);
// const analytics = getAnalytics(app);


loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
