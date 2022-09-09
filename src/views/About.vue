

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>

    <!-- <img alt="Vue logo" class="pic" src="@/assets/techno.png" width="125" height="125" />
    <br> -->
    <v-card
  elevation="24"
  class="mx-auto my-12"
  width="80%"


>

<br><br>

<v-avatar
      class="pic"
      size="200"
    >
    <img
          src="@/assets/me.jpg"
          alt="EarlJohn"
          height="220"
          width="220"
          >
    </v-avatar>
      <h1 class="pl">Earl John Francisco</h1>
    <br>
    <div class="container"><p>I am Earl John Francisco, I'm 21 years old, I live in Sampaloc, Manila.
    I am a 4th year student taking Bachelor of Science in Information Technology at <a target="_blank" href="https://tip.edu.ph/">Technological Institute of the Philippines</a>.  
    I love playing basketball and online games. I also like watching animes, creating projects, like website and mobile application.
    </p>
  </div>
  <br><br>

   <!-- <img alt="Vue logo" class="pic2" src="@/assets/programming.jpg" width="250" height="150" />
    <br> -->

    <h1 class="ps">Programming Skills</h1>
    <br>


    <div class="container1"><p>Here are the <a class="a1">programming languages</a> and framework that I experienced working on:</p>
<br>
      <ul class="ml-4">
        <li>Java</li>
        <li>PHP</li> 
        <li>Kotlin</li> 
        <li>Python</li> 
        <li>Laravel Framework</li> 
        <li>Django Framework</li> 
      </ul>
           
      <p class="p">I also created different projects such as ecommerce, android application, and more.
      Now, I am currently studying <a class="a1">Vue Js</a> to widen my expertise on different programming languages.</p>
      </div>


    <!-- <div class="container2">
      
    </div> -->
  
 
    <!-- <img alt="Vue logo" class="ap" src="@/assets/bsit.jpg" width="250" height="150" />
    <br> -->
    <h1 class="ap1">About Program</h1>
    <br>
    <div class="container3"><a class="aap">Bachelor of Science in Information Technology</a> (BSIT) is a program where it study the use of any computers, storage,
      networking and other physical devices, infrastructure and processes to create, process, store, secure and exchange all forms of electronic data. Typically, IT is used in the context of business operations, as opposed to technology used for personal or entertainment purposes. 
      The commercial use of IT encompasses both computer technology and telecommunications.
    </div><br><br>
<!-- 
    <img alt="Vue logo" class="pic4" src="@/assets/tip.png" width="200" height="200" />
    <br> -->
    <h1 class="as">About T.I.P.</h1>
    <br>
    <div class="container"><p>The Technological Institute of the Philippines is a private, non-sectarian, 
      tertiary level institution that specializes in Engineering and Computing programs. It also offers
       programs in Architecture, Business Administration, Maritime Studies, and Teacher Education. T.I.P. 
       has two branches, T.I.P. Manila and T.I.P. <br><br>

       Official Website: <a target="_blank" href="https://tip.edu.ph/">Technological Institute of the Philippines</a>.  
    </p><br><br>
  
  </div>
</v-card>

  </WelcomeItem>

</template>

<style>
/* Personal Life */
.pic {
  margin-bottom: 20px;
  margin-left: 50px;

}
.pl{

  margin-left: 40px;
  color: teal;
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
  color: teal;
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
    color: rgb(66, 78, 79);
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
  color: teal;
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
    color:teal;
}
/* About TIP */
.pic4 {
  border-radius: 50%;
  margin-left: 170px;
}
.as{
  margin-left: 40px;
  color: teal;
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

</style>
