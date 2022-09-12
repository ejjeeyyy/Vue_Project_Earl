<template>

  <v-container fluid>
  <div class="text-center mt-5 ">
    
<h1 class="font-weight-light">Quiz Application</h1>
<v-divider class="mx-2 mt-5"></v-divider>
<br>

</div>
  <div id="app" class="text-center">
    <v-container fluid class="bg-blue-grey-lighten-5 mt-14">
  <v-card 
  elevation="5"
  class="mx-auto my-12 rounded-xl"
  width="65%"

>
<h1 align="center" class="mt-6 bg-pink-darken-4 pa-3 font-weight-light">Category <br> Science: Gadgets</h1>
    <quiz @quiz-completed="handleQuizCompleted" :key="quizKey" />
    <custom-modal
      v-show="showModal"
      header="Congratulations!"
      subheader="You've completed your Quiz!"
      :score="score"
      @reload="updateQuiz"
      @close="showModal = false"
    />
  </v-card>
  </v-container>
  </div>
</v-container>
</template>

<script>
import CustomModal from "../components/CustomModal.vue";
import Quiz from "../components/Quiz.vue";

export default {
  components: { Quiz, CustomModal },
  name: "App",
  data() {
    return {
      quizKey: 0,
      showModal: false,
      score: {
        allQuestions: 0,
        answeredQuestions: 0,
        correctlyAnsweredQuestions: 0,
      },
    };
  },
  methods: {
    handleQuizCompleted(score) {
      this.score = score;
      this.showModal = true;
    },
    updateQuiz() {
      this.showModal = false;
      this.quizKey++;
    },
  },
};
</script>

<!-- <style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  line-height: 1.6;
}
</style> -->
