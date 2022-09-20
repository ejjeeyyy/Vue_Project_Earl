<template>

 <v-container fluid id="">    </v-container>


<div class="text-center mt-5 ">
<h1 class="font-weight-light">About Application</h1>
<v-divider class="mx-2 mt-5"></v-divider>
<br>

</div>

<div class="text-center mx-16">
<v-container fluid id="sheets" class="bg">
    <v-row no-gutters>
      <v-col>
        <v-card class="pa-2 ma-2 rounded-xl" elevation="5">
            <p class="mt-3 mx-6 text-justify">The Dashboard show a welcoming message, this is where the website will land first 
              after running the program. If you are not yet logged in, it will display a text saying you are not logged in. 
              Then, once you logged in, it will eventually display a welcoming message.<br>
            </p>
            <br>
            <v-divider class="mx-2"></v-divider>
            <v-btn 
            variant="text" prepend-icon="mdi-view-dashboard-outline">Dashboard</v-btn>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-2 ma-2 rounded-xl " elevation="5">
            <p class="mt-3 mx-6 text-justify">The simple calculator page displays a two input box where user can enter 2 numbers and
                 and calculate its sum, difference, product, quotient, and average by clicking the calculate button after inputting 
                 two numbers.  
            </p>
                <br>
            <v-divider class="mx-2"></v-divider>
            <v-btn 
            variant="text" prepend-icon="mdi-calculator">Simple Calculator</v-btn>
        </v-card>
      </v-col>



      <v-responsive class="my-4" width="100%"></v-responsive>

      <v-col>
        <v-card class="pa-2 ma-2 rounded-xl" elevation="5">
            <p class="mt-3 mx-6 text-justify"> The String Manipulation page is where you can input a String 
              and it will show the vowel count, number of characters, consonants, and converted vowel 
              to asterisk.
                </p>
            <br><br>
            <v-divider class="mx-2"></v-divider>
            <v-btn 
            variant="text" prepend-icon="mdi-code-string">String Manipulation</v-btn>
        </v-card>
      </v-col>

      <v-col>
        <v-card  class="pa-2 ma-2 rounded-xl" elevation="5">  
            <p class="mt-3 mx-6 text-justify ">The Quiz app page is where you can take a quiz that is 
              created using axios. It will make an HTTP requests from the browser and can get its API.
              <br><br>
            </p>
                <br>
            <v-divider class="mx-2"></v-divider>
            <v-btn 
            variant="text" prepend-icon="mdi-head-question-outline">Quiz App</v-btn>
        </v-card>
      </v-col>
    </v-row>

<br><br>

    <v-row no-gutters>
      <v-col>
        <v-card class="pa-2 ma-2 rounded-xl" elevation="5">
            <p class="mt-3 mx-6 text-justify">The vuetify research page is where you can read some 
              info about vuetify. It consist of introduction and why to use Vuetify.<br><br>
            </p>
                <br>
            <v-divider class="mx-2"></v-divider>
            <v-btn 
            variant="text" prepend-icon="mdi-vuetify">Vuetify Research</v-btn>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-2 ma-2 rounded-xl" elevation="5">
            <p class="mt-3 mx-6 text-justify">The About Me page is where you can see information about me 
              like my school, program, profile picture, and programming skill.<br><br>
            </p>
            <br>
            <v-divider class="mx-2"></v-divider>
            <v-btn 
            variant="text" prepend-icon="mdi-account-circle">About Me</v-btn>
        </v-card>
      </v-col>

      <v-responsive class="my-4" width="100%"></v-responsive>

      <v-col>
        <v-card class="pa-2 ma-2 rounded-xl" elevation="5">
            <p class="mt-3 mx-6 ">This application is created for the completion of the midterm laboratories and midterm 
              project. This site is created using Vue Js framework and Vuetify. <br><br> 
            </p>
            <br>
            <v-divider class="mx-2"></v-divider>
         <v-btn 
            variant="text" prepend-icon="mdi-information-outline">About Application</v-btn>
        </v-card>
      </v-col>


    </v-row>

  </v-container>
</div>


    </template>

<style>
.plapp{
    margin-left: 330px;
}
#sheets{
    max-width: 70%;
}

</style>
        
        
        