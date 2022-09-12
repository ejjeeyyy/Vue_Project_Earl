

<template>


    <!-- <img alt="Vue logo" class="pic" src="@/assets/techno.png" width="125" height="125" />
    <br> -->



    <v-container fluid id="container">    </v-container>

    <v-container fluid class="bg-blue-grey-lighten-5">
      <v-container class="bg-blue-grey-lighten-5">
    <div>
    <v-avatar
      class="pic"
      size="300"
    >
    <img
          src="@/assets/techno.png"
          alt="EarlJohn"
          height="300"
          width="300"
          >
    </v-avatar>
    <div class="text-left mt-5 ">
    <h1 class="pl text-h2 font-weight-light">Earl John Francisco</h1>
    <p class="pit font-weight-light text-h6 mt-2">Technological Institute of the Philippines <br>4th Year BSIT</p>
    <br>

  </div>
  </div>

  
<!-- <br><br>
<br><br>
<br><br> -->

<v-container fluid class="bg-blue-grey-lighten-5 mt-14">
  <v-card 
  elevation="5"
  class="mx-auto my-12 rounded-xl"
  width="80%"

>

<br><br>


    <h1 class="ps font-weight-light">Programming Skills</h1>
    <br>


    <div class="container1 text-subtitle-2"><p>Here are the <a class="a1">programming languages</a> and framework that I experienced working on:</p>
<br>
      <ul class="ml-4">
        <li>Java</li>
        <li>PHP</li> 
        <li>Kotlin</li> 
        <li>Python</li> 
        <li>Laravel Framework</li> 
        <li>Django Framework</li> 
      </ul>
           
      <p class="p text-subtitle-2">I also created different projects such as ecommerce, android application, and more.
      Now, I am currently studying <a class="a1">Vue Js</a> to widen my expertise on different programming languages.</p>
      </div>
      <br>


    <!-- <div class="container2">
      
    </div> -->
  
 
    <!-- <img alt="Vue logo" class="ap" src="@/assets/bsit.jpg" width="250" height="150" />
    <br> -->
    <h1 class="ap1 font-weight-light">About Program</h1>
    <br>
    <div class="container3 text-subtitle-2"><a class="aap">Bachelor of Science in Information Technology</a> (BSIT) is a program where it study the use of any computers, storage,
      networking and other physical devices, infrastructure and processes to create, process, store, secure and exchange all forms of electronic data. Typically, IT is used in the context of business operations, as opposed to technology used for personal or entertainment purposes. 
      The commercial use of IT encompasses both computer technology and telecommunications.
    </div><br><br>
<!-- 
    <img alt="Vue logo" class="pic4" src="@/assets/tip.png" width="200" height="200" />
    <br> -->
    <h1 class="as font-weight-light">About T.I.P.</h1>
    <br>
    <div class="container text-subtitle-2"><p>The Technological Institute of the Philippines is a private, non-sectarian, 
      tertiary level institution that specializes in Engineering and Computing programs. It also offers
       programs in Architecture, Business Administration, Maritime Studies, and Teacher Education. T.I.P. 
       has two branches, T.I.P. Manila and T.I.P. <br><br>

       Official Website: <a target="_blank" href="https://tip.edu.ph/">Technological Institute of the Philippines</a>.  
    </p><br><br>
  
  </div>
</v-card>
</v-container>
</v-container>
</v-container>



</template>

<style>
/* Personal Life */
.pic {
  position: relative;
  margin-top: -130px;
      left: 170px;
}
.pit{
  margin-left: 490px; 
}
.pl{
  margin-left: 490px;
  color: black;
  margin-top: -200px;
}

.p1{
  text-align: justify;
  text-justify: auto;
}

.container{
  text-align: justify;
  margin-left: 40px;
  margin-right: 40px;
}

/* PROGRAMMING SKILLS */
.p{
  margin-top: 150px;
}

.pic2 {
  border-radius: 50%;
  margin-left: 160px;
}
.p1{
  text-align: justify;
  text-justify: auto;
}
.ps{
  margin-left: 40px; 
  color: black;
}
.container1{
  text-align: justify;
  margin-left: 40px;
  margin-right: 40px;
  columns: 2;
  column-gap: 80px;
  
  
}
.container2{
  text-align: justify;
  margin-left: 40px;
  margin-right: 40px;
  
}
ul{
    color: black;
}
.a1{
  color: hsla(160, 100%, 37%, 1);
}

/* About Program */
.ap{
  border-radius: 50%;
  margin-left: 170px;
}
.ap1{
  margin-left: 40px;
  color: black;
}
.p1{
  text-align: justify;
  text-justify: auto;
}

.container3{
  text-align: justify;
  margin-left: 40px;
  margin-right: 40px;
}
.ap{
    color:black;
}
/* About TIP */
.pic4 {
  border-radius: 50%;
  margin-left: 170px;
}
.as{
  margin-left: 40px;
  color: black;
}
.p1{
  text-align: justify;
  text-justify: auto;
}

.container{
  text-align: justify;
  margin-left: 40px;
  margin-right: 40px;
}

#container{
    background: url('cover.png');
    /* background-position: center; */

    
    background-size: cover;
    background-repeat: no-repeat;
    height:25%;   


    filter: brightness(80%);
    

  }


</style>
