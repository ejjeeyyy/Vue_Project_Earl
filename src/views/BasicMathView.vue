
<template>


<v-container fluid id="">    </v-container>

<div class="text-center mt-5 ">
<h1 class="font-weight-light">Simple Calculator</h1>
<v-divider class="mx-2 mt-5"></v-divider>
<br>

</div>


<v-card elevation="5" class="mx-auto my-12 rounded-xl"
  width="75%">
<v-container fluid >
  <v-text-field class="mx-4" variant="solo" label="First Input" v-model.number="fNumber" type="number"></v-text-field>
  <v-text-field class="mx-4" variant="solo" label="Second Input" v-model.number="sNumber" type="number"></v-text-field>
  
  <v-btn prepend-icon="mdi-calculator-variant-outline" @click="doSum" class="mx-4 bg text-black">Calculate</v-btn> <br><br>
  <v-divider class="mx-6 mt-5"></v-divider>
   <div class="div_class_answer text-center" >

      <v-card-title class="text-h4 font-weight-light bg text-black my-5 mx-4">Answer</v-card-title>
      <v-divider class="mx-6 mt-5"></v-divider>
      <v-card-text class="text-subtitle-2">
        <div class="text-center">
        <v-row class="mx-2 my-2 "> 
       <v-card class="mx-2 my-5 pa-6" width="18%"> <p class="mx-4"> The sum is = <a class="text-purple">{{sum}}</a> </p></v-card>
       <v-card class="mx-2 my-5 pa-6" width="18%"> <p class="mx-4"> The difference is = <a class="text-purple">{{diff}}</a>  </p></v-card>
       <v-card class="mx-2 my-5 pa-6" width="18%"> <p class="mx-4"> The product is = <a class="text-purple">{{prod}}</a></p></v-card>
       <v-card class="mx-2 my-5 pa-6" width="18%"> <p class="mx-4"> The quotient is = <a class="text-purple">{{quotient}}</a></p></v-card>
       <v-card class="mx-2 my-5 pa-6" width="18%"> <p class="mx-4"> The average is = <a class="text-purple">{{ave}}</a></p></v-card>
      </v-row>
      </div>
      </v-card-text>

  </div>

</v-container>
</v-card>

 </template>

<script setup>
  import {ref} from 'vue'

  const fNumber=ref()
  const sNumber=ref()
  const sum=ref(0)
  const diff=ref(0)
  const prod=ref(0)
  const quotient=ref(0)
  const ave=ref(0)

  function doSum(){
    sum.value = fNumber.value + sNumber.value
    diff.value = fNumber.value - sNumber.value
    prod.value = fNumber.value * sNumber.value
    quotient.value = fNumber.value / sNumber.value
    ave.value = (fNumber.value + sNumber.value) / 2
    return
  }
</script>

<style>

</style>


