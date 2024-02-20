<template>
    <div class="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/AboutForm">About</router-link>  
      <router-link to="/guideTorue">Tour</router-link>
      <router-link to="/PlanTarife">Plan</router-link>
      <div class="dropdown">
        <button class="dropbtn">Create your trip</button>
        <div class="dropdown-content">
          <router-link to="/AddForm">Add New</router-link>
          <router-link to="/">Edit Existing</router-link>
        </div>
      </div>
      <a @click="logout">Logout</a>
    </div>   
  </template>
  
  <script>
  export default {
    name: 'AppHeader',
    methods:{
      logout() {
        localStorage.clear();
        this.$router.push({name:'Login'})
      }
    }
  }
  </script>
  
  <style>
  .nav {
    background-color: #a09898;
    overflow: hidden;
  }
  
  .nav a {
    float: left;
    color: whitesmoke;
    padding: 14px 14px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
  }
  
  .nav a:hover {
    background-color: #ddd;
    color: #333;
  }
  
  /* Dropdown */
  .dropdown {
    float: left;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    z-index: 1;
  }
  
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }
  
  .dropdown-content a:hover {
    background-color: #ddd;
  }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
  
  .dropbtn {
    font-size: 17px;  
    border: none;
    outline: none;
    color: whitesmoke;
    background-color: inherit;
    margin: 0;
    padding: 14px 14px;
  }
  </style>
  