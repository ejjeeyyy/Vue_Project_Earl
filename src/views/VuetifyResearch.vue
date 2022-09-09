

<template>
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
  
      <br>
  
  
      
      <v-card
    elevation="24"
    class="mx-auto my-12 rounded-xl"
    width="80%"
  
  
  >    <v-img
    contain
    max-height="176"
    max-width="219"
    src="https://avatars.githubusercontent.com/u/22138497?s=200&v=4"
  ></v-img>
      <h1 class="ab">About Vuetify</h1>
      <br>
      <div class="container6"><p>Vuetify is a Vue UI Library with handmade Components that adhere to the Material Design guideline. 
          Vuetify is a Vue reusable semantic component framework. JavaScript with the goal of providing clean, semantic, and reusable components. 
          Bootstrap is a free and open-source CSS framework for front-end web development that is responsive and mobile-first. 
          Many components of the library may be found in the sidebar; Vuetify: Material Component Framework for VueJS 2. Vuetify is a Vue component framework. js 2. 
          It strives to provide clean, semantic, and reusable components that make it easy to construct your application.
          </p>
  
          <br>
          <p>Vuetify official website: <a href="https://vuetifyjs.com/en/">Vuetify</a></p>
          <br>
    </div>
  </v-card>
    </WelcomeItem>
  
  </template>
  
  <style>
  .pic6 {
    border-radius: 50%;
    margin-left: 170px;
  }
  .ab{
    margin-top: 20px;
    margin-left: 40px;
    color: teal;
  }
  .p1{
    text-align: justify;
    text-justify: auto;
  }
  
  .container6{
    text-align: justify;
    margin-left: 40px;
    margin-right: 40px;
  }
  a{
    color: hsla(160, 100%, 37%, 1);
  }
  </style>
  