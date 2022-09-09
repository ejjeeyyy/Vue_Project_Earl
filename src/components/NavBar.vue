<template>
  <nav>
      <v-toolbar app class="bg-indigo-darken-1 text-white">
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="font-weight-light">Midterm </span>
        <span>Project</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
    <v-menu
      open-on-hover
      
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="white"
          v-bind="props"
        >
          Menu
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          router
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

      <!-- <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn> -->
      
      
      </v-toolbar>

     <v-navigation-drawer app v-model="drawer" class="bg-indigo-darken-4 text-white">
       <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          
        </v-list-item>
      
     </v-navigation-drawer>
  </nav>
</template>

<script setup>
  import { ref } from 'vue'
    
  const drawer = ref(false)

  const  items =  ref([
           { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/dashboard' },
           { title: 'Simple Calculator', icon: 'mdi-calculator', path: '/basicMath' },
           { title: 'String App', icon: 'mdi-code-string', path: '/stringApp'},
           { title: 'Quiz App', icon: 'mdi-head-question-outline', path: '/axios' },
           { title: 'Vuetify Research', icon: 'mdi-vuetify', path: '/vuetifyresearch' },
           { title: 'About Me', icon: 'mdi-account-circle', path: '/about'},
           { title: 'About Application', icon: 'mdi-information-outline', path: '/aboutapp'},
           
           
        ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }

 
</script>
