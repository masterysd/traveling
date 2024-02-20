<template>
    <Header></Header>
      <main class="MainContainer">
        <router-view />
      </main>
      <footer>
        &copy; {{ currentYear }} Made with Love
      </footer>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: 'App',
  components:{
    Header
  },
  data() {
    return {
      currentYear: ''
    };
  },
  created() {
    this.setCurrentYear();
  },
  methods: {
    setCurrentYear() {
      const now = new Date();
      this.currentYear = now.getFullYear();
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding: 0;
  margin: 0;
  background-color: #ebe7e0;
}
.MainContainer{
  height: 100%;
    min-height: calc( 100vh - 120px);}
    
.logo {
    width: 100px;
  }
  
  .register input, .login input , .add input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
    border-radius: 10px;
  }
  
  .register button, .login button , .add button  {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    border-radius: 10px;
    background-color: skyblue;
    color: wheat;
    cursor: pointer;
  }
  
</style>
