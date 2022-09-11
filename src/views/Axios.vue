<template>

<v-container fluid id="">    </v-container>


<div class="text-center mt-5 ">
<h1 class="font-weight-light">Quiz Application</h1>
<v-divider class="mx-2 mt-5"></v-divider>
<br>

</div>

    <div>  
        <v-card
        elevation="5"
        class="mx-auto my-12 rounded-xl"
        width="80%"
        color=""
        >
        <h1 class="mt-5 text-center font-weight-light">Vue JS Get Data from API by Axios</h1>
            <div class="text-center"><v-btn @click="getQuestions" id="show" class="my-5 text-black" outlined> 
                Get Quiz</v-btn> </div>
        </v-card>    

        <v-card
        elevation="5"
        class="mx-auto my-12 rounded-xl"
        width="80%"
        >


        <v-list-item
        v-for="question in questions"
        :key="questions.id"
        class="my-10"
        >


        <v-list-item-title class="text-h5 ml-10 font-weight-light"> {{ question.question }}</v-list-item-title>
   
        <p class="mt-5 text-h6 ml-16 font-weight-light">Answer</p>
        <v-list-item class="text-success text-h5 ml-16 font-weight-light">
            ✓ {{ question.correct_answer }} 
        </v-list-item>

        <p class="mt-5 text-h6 ml-16 font-weight-light">Other Choices</p>
        <v-list-item class="text-error text-h6 ml-16 font-weight-light">
            ✗ {{ question.incorrect_answers }} 
        </v-list-item>

        <v-divider class="my-6">
        </v-divider>
        
        </v-list-item> 

        </v-card>

    </div> 
    </template>

<script setup>
    import { ref } from 'vue';
    import axios from 'axios'

    const questions=ref([])

    async function getQuestions (htmlStr) {

        axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy').then( response=> { 
        questions.value=(response.data.results)}).replace(/&#039;/g , "<");
        
    htmlStr = htmlStr.replace(/&lt;/g , "<");
        htmlStr = htmlStr.replace(/&gt;/g , ">");
        htmlStr = htmlStr.replace(/&quot;/g , "\"");
        htmlStr = htmlStr.replace(/&39;/g , "\'");
        htmlStr = htmlStr.replace(/&amp;/g , "&");


        return htmlStr;

    }

  

</script>


    