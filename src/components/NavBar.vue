<template>


  <nav>

    <v-app-bar fixed dense>
      <v-toolbar id="toolbar" app class=" text-white">
        <v-app-bar-nav-icon icon="mdi-webpack" color="yellow" @click='toggleDrawer'></v-app-bar-nav-icon>
        <div class="my-4 text-white">

          <p class="text-white text-h5 f">Midterm Project</p>
          <!-- <v-divider color="white" width="" class="mb-5 mt-3"></v-divider> -->
        </div>
        <v-spacer></v-spacer>

        <div v-if="user.loggedIn">
          <div class="text-right">
        <p class="mx-5 text-subtitle-1 text-white">
          {{user.data.displayName}} <br>

        <p class="text-subtitle-2 font-weight-light">{{ user.data.email }}</p>
      </p>  
      </div>
        </div>

        <div v-else class="alert alert-danger" role="alert">
        <v-btn variant="text" router :to="register"> Register </v-btn>
        <v-btn variant="text" router :to="login"> Login </v-btn>
        </div>

        <!-- <v-avatar
      class="mr-3"
      size="50"
    >
    <img
          src="@/assets/me.jpg"
          alt="EarlJohn"
          height="50"
          width="50"
          >
    </v-avatar> -->


        <!-- dropdown menu -->
        
        <v-menu open-on-hover>

          <template v-slot:activator="{ props }">
            <div v-if="user.loggedIn">
            <v-btn icon="mdi" class="mr-6" v-bind="props" clickable="no">
              
              <v-avatar size="50">
                <img src="@/assets/me.jpg" alt="EarlJohn" height="50" width="50">
              </v-avatar>
              
            </v-btn>
          </div>
          </template>
          <div v-if="user.loggedIn">
            <v-list>
              <v-list-item  @click.prevent="signOut" prepend-icon="mdi-logout">LOGOUT
              </v-list-item>
            </v-list>
          </div>
        </v-menu>

        <!-- <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn> -->


      </v-toolbar>
    </v-app-bar>

    <div v-if="user.loggedIn">
    <v-navigation-drawer fluid expand-on-hover rail id="navv" app v-model="drawer" class=" text-white">
      <!-- <v-toolbar-title >
        <div class="my-4 text-white">
          
        <v-btn variant="text" color="yellow" class="font-weight-light text-h5 text-white" prepend-icon="mdi-webpack" > <p class="text-white">Midterm Project</p></v-btn>
        <v-divider color="white" width="" class="mb-5 mt-3"></v-divider>
        </div>
      </v-toolbar-title>
       -->
      <div class="mt-2">
        <v-list-item v-for="item in items" :key="item.title" router :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>

        </v-list-item>
      </div>
    </v-navigation-drawer>
    </div>
  </nav>
</template>

<script>

import { ref } from 'vue'
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { auth } from '../firebase'


export default {
  methods: {
    toggleDrawer() 
    { this.drawer = !this.drawer }
    
  },
  data() {
    return {
      register: '/register',
      login: '/login',
      drawer: true,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/dashboard' },
        { title: 'Simple Calculator', icon: 'mdi-calculator', path: '/basicMath' },
        { title: 'String App', icon: 'mdi-code-string', path: '/stringApp' },
        { title: 'Quiz App', icon: 'mdi-head-question-outline', path: '/axios' },
        { title: 'Vuetify Research', icon: 'mdi-vuetify', path: '/vuetifyresearch' },
        { title: 'About Me', icon: 'mdi-account-circle', path: '/about' },
        { title: 'Quiz Record', icon: 'mdi-history', path: '/quizrecord' },

        { title: 'About Application', icon: 'mdi-information-outline', path: '/aboutapp' },
        
      ],
      rail: false,
    }
  },
  name: "DashboardComponent",

  setup() {

    const store = useStore()
    const router = useRouter()

    auth.onAuthStateChanged(user => {
      store.dispatch("fetchUser", user);
    });

    const user = computed(() => {
      return store.getters.user;
    });

    const signOut = async () => {
      await store.dispatch('logOut')
      router.push('/')
    }

    return { user, signOut }
  }



};



</script>

<style >
#navv {
  /* background-color: #790252; */
  background-color: #792853;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.23), rgba(0, 0, 0, 0.23)), ;
  /* background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.287), rgba(0, 0, 0, 0.327),rgba(0, 0, 0, 0.440),
    rgba(0, 0, 0, 0.327), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)) , url('src/assets/covercut.png');
     */

}

#toolbar {

  background-color: #4C0033;
}

#fullname{
  text-transform: uppercase;
}
</style>