<template>
<v-container fluid id="dashboard">
  <v-container> 
    <v-row>
  <div class="container" id="dbcontainer">

    <p class="text-h1"> Hi, <br> <v-spacer class="mb-10"></v-spacer> This is my <br><v-spacer class="mb-10"></v-spacer> Midterm <a class="text-purple">Project </a></p>
  </div>

  <!-- <div class="verticalLine" width="80%"></div> -->
    
  <div class="egg" id="egg">
                <!-- <v-img src="@/assets/2.png" max-height="300" class=""></v-img> -->
                <v-avatar
              color="#BDD9FF"
              size="380"
              class="mt-2"

            >
            
            </v-avatar>
            
            <div class="egg" id="egg2">
                <!-- <v-img src="@/assets/2.png" max-height="300" class=""></v-img> -->
            </div>
     
  
            </div>
    
</v-row>

</v-container>
</v-container>

</template>

<style>

#dashboard{
    /* background-image: url('src/assets/cover.png'); */
    /* background-position: center;
    background-size: cover; */
    /* background-repeat: no-repeat;
    height:100%;   */
  }

  #dbcontainer{
    margin-top: 170px;
    margin-left: 200px;

  }
  .egg {
  display: block;
  margin-left: 300px;
  margin-top: 140px;
  width: 456px;
  height: 400px;
  background-color: #792853;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
#egg2{
  display: block;
  margin-left: 380px;
  margin-top: -350px;
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