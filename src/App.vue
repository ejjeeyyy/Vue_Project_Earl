<template>
   <v-app class="bg-indigo-lighten-5">
    <v-main>
       <Navbar/>
       <router-view></router-view>
    </v-main>
   </v-app>
</template>

<script setup>
  import Navbar from '@/components/NavBar.vue';
</script>
