
<template>


<v-container fluid >
  <v-text-field label="First Input" v-model.number="fNumber"></v-text-field>
  <v-text-field label="Second Input" v-model.number="sNumber"></v-text-field>
  
  <v-btn prepend @click="doSum" class="bg-teal text-white">See Result</v-btn> <br><br>

   <div class="div_class_answer" >
    <v-card  width="100%">
      <v-card-title class="text-xs-h6 text-md-h5 text-lg-h4 bg-teal text-white">Answer</v-card-title>
      <v-card-text> <br>
        The sum is: {{sum}} <br><br>
        The difference is: {{diff}} <br><br>
        The product is: {{prod}} <br><br>
        The quotient is: {{quotient}} <br><br>
        The average is: {{ave}}
      </v-card-text>
    </v-card>
  </div>


</v-container>
 </template>

<script setup>
  import {ref} from 'vue'

  const fNumber=ref(0)
  const sNumber=ref(0)
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


