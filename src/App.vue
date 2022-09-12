<template>
   <v-app class="bg-blue-grey-lighten-5" id="appvue">
    <v-main>
       <Navbar/>
       <router-view></router-view>
    </v-main>
   </v-app>
</template>

<script setup>
  import Navbar from '@/components/NavBar.vue';
</script>

<style>
#appvue
{
   /* background: url(./assets/cover.png);
   background-size: cover;
   height:25%;
    filter: brightness(50%); */
}


</style>