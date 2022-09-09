<template>

  <v-row justify="center">
    <v-col
      cols="12"
      sm="5"
      class="mx-auto my-12"
    >
      <v-card
        elevation="24"
        class="rounded-xl"
      >
        <v-card-title class="text-center bg-teal text-white">
          <span class="text-h4 white--text ">String Manipulator</span>

        </v-card-title>
    <div class="text" >
        <h3> <v-text-field label="Enter any String" type='text'  v-model.text="vowel" @change='answer'></v-text-field></h3>
    
    <v-card-text
    
    >
        <div id="app"><h3>
        Vowels: {{ vow }}<br>
        Number of Characters: {{ count }}<br>
        Consonants: {{ conso }}<br>
        Vowel to : {{ con }}<br>
        </h3></div>
    </v-card-text>
    </div>
    


      </v-card>
    </v-col>
  </v-row>
    
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
