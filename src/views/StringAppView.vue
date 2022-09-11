<template>

<v-container fluid id="">    


<div class="text-center mt-8 ">
<h1 class="font-weight-light">String Manipulator</h1>
<v-divider class=" mt-6"></v-divider>
<br>

</div>

<v-container>
<v-card elevation="5" class="mx-auto my-12 rounded-xl"
  width="70%">
  <v-row>
    <v-col


    >

 
    <div class="text" >
        <v-text-field class="mx-12 my-5" variant="solo" label="Enter any String" type='text'  v-model.text="vowel" @change='answer'>
        </v-text-field>
        <v-divider class="mx-10"></v-divider>

        <div id="app" class="mx-12 my-5 text-subtitle-1">
        Vowels: {{ vow }}<br>
        Number of Characters: {{ count }}<br>
        Consonants: {{ conso }}<br>
        Vowel to : {{ con }}<br>
        </div>
  
    </div>
    


    </v-col>
  </v-row>
</v-card>
</v-container>
</v-container>
</template>

<script>

export default {
    el: '#app',
    data() {
        return {
            vowel: "",
            vow: 0,
            count: 0,
            conso: 0,
            con: "",
        }
    },
    methods: {
        answer: function () {
            var vowelList = 'aeiouAEIOU';
            this.vow = 0;
            this.count = 0;
            this.conso = 0;
            this.con = "";
            //Count vowels
            for (var x = 0; x < this.vowel.length; x++) {
                if (vowelList.indexOf(this.vowel[x]) !== -1) {
                    this.vow = this.vow + 1;
                }
            }
            //Count Characters in the string
            for (var x = 0; x < this.vowel.length; x++) {
                this.count = this.count + 1;
            }
            //Count consonants
            for (var x = 0; x < this.vowel.length; x++) {
                if (vowelList.indexOf(this.vowel[x]) == -1) {
                    this.conso = this.conso + 1;
                }
            }
            //Convert to
            for (var x = 0; x < this.vowel.length; x++) {
                if (vowelList.indexOf(this.vowel[x]) !== -1) {
                    this.con += "*";
                } else {
                    this.con += this.vowel[x];
                }
            }
        }
    }
}
</script>
