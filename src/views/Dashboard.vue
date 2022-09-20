<template>

<div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div v-if="user.loggedIn">

          <!-- <div class="card-header">Welcome, {{user.data.displayName}}</div>
          <div class="card-body">
            <div class="alert alert-success" role="alert">
            You are logged in!
            <div class="my-4">
                  <button  @click.prevent="signOut" class="btn btn-primary">Log Out</button>
            </div>
             </div>
          </div> -->

          </div>
          <div v-else class="alert alert-danger" role="alert">
          <v-container fluid>
          <div class="text-center">

<p class="text-h1 mt-16"> Hi, <v-spacer class="mb-10"></v-spacer> You're not Logged in.</p>
</div>
</v-container>
          </div>
        </div>
      </div>
    </div>
  </div>

<v-container fluid id="dashboard">
  <div v-if="user.loggedIn">
  <v-container> 
    <v-row>
  <div class="container" id="dbcontainer">

    <p class="text-h1"> Welcome, <a class="text-purple"> {{user.data.displayName}} </a>! <v-spacer class="mb-10"></v-spacer> This is my Final <br><v-spacer class="mb-10"></v-spacer> <a class="text-purple">Project </a></p>
  </div>
    
  <div class="egg" id="egg">
                <v-img src="@/assets/techno.png" max-height="300" class=""></v-img>
                <v-avatar
              color="#BDD9FF"
              size="370"
              class="mt-2"
                  

            >
            <img src="@/assets/TIPLOGO.png" height="408" width="408">
            </v-avatar>
            
            <div class="egg" id="egg2">
                <!-- <v-img src="@/assets/2.png" max-height="300" class=""></v-img> -->
            </div>
     
  
            </div>

            <div class="egg" id="egg3">
                <!-- <v-img src="@/assets/2.png" max-height="300" class=""></v-img> -->
            </div>

            <div class="egg" id="egg4">
                <!-- <v-img src="@/assets/2.png" max-height="300" class=""></v-img> -->
            </div>
    
</v-row>

</v-container>
</div>
</v-container>

</template>

<style>

  #dbcontainer{
    margin-top: 170px;
    margin-left: -110px;
    
  }
  .egg {
  display: block;
  margin-left: 50rem;
  margin-top: 180px;
  width: 456px;
  height: 400px;
  background-color: #792853;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  position: absolute;
}
#egg2{
  display: block;
  margin-left: 375px;
  margin-top: -350px;
  width: 10px;
  height: 10px;
  background-color: #792853;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}

#egg3{
  display: block;
  margin-left: 75rem;
  margin-top: 230px;
  width: 10px;
  height: 10px;
  background-color: #792853;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
#egg4{
  display: block;
  margin-left: 76.3rem;
  margin-top: 254px;
  width: 10px;
  height: 10px;
  background-color: #792853;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}

.verticalLine {
            margin-top: 130px;
            height: 500px;
            border-right: 1px solid #000900;
            position: absolute;
            right: 50%;
}
</style>

<script>
  import { useStore} from "vuex";
  import { useRouter } from "vue-router";
  import {computed} from "vue";
  import { auth } from "../firebase";
  
  
  export default {
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
  
      return {user,signOut}
   }
  
  
  
  };
  </script>