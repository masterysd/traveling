<template>      
    <h1 style="color: black; text-align:center;">
      sugestion from user
    </h1>
    <div>
      <form @submit.prevent="addSuggestion" class="form">
        <input type="text" v-model="title" placeholder="Title" class="form-control mb-2">
        <textarea v-model="description" placeholder="Description" class="form-control mb-2"></textarea>
        <input type="text" v-model="price" placeholder="Price" class="form-control mb-2">
        <input type="text" v-model="location" placeholder="Location" class="form-control mb-2">
        <input type="text" v-model="photo" placeholder="Photo or Video URL" class="form-control mb-2">
        <button type="submit" class="btn btn-primary">Add Suggestion</button>
      </form>
      <div class="card-group">
        <div class="card" v-for="(suggestion, index) in suggestions" :key="index">
          <img :src="suggestion.photo" alt="Suggestion Photo or Video" class="card-img-top">
          <div class="card-body text-center">
            <h5 class="font-weight-normal mt-3">
              <a href="javascript:;" class="text-decoration-none">{{ suggestion.title }}</a>
            </h5>
            <p class="mb-0">{{ suggestion.description }}</p>
          </div>
          <hr class="dark horizontal my-0">
          <div class="card-footer d-flex">
            <p class="font-weight-normal my-auto">{{ suggestion.price }}</p>
            <i class="material-icons position-relative ms-auto text-lg me-1 my-auto">place</i>
            <p class="text-sm my-auto">{{ suggestion.location }}</p>
            <button @click="deleteSuggestion(index)" class="btn btn-danger ms-auto">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        title: '',
        description: '',
        price: '',
        location: '',
        photo: '',
        suggestions: []
      };
    },
    methods: {
      addSuggestion() {
        if (!this.title || !this.description || !this.price || !this.location || !this.photo) return;
        this.suggestions.push({
          title: this.title,
          description: this.description,
          price: this.price,
          location: this.location,
          photo: this.photo
        });
        // Clear input fields
        this.title = '';
        this.description = '';
        this.price = '';
        this.location = '';
        this.photo = '';
      },
      deleteSuggestion(index) {
        this.suggestions.splice(index, 1);
      }
    }
  };
  </script>
  
  <style scoped>
  .form {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  
  .form-control {
    width: 100%;
    display: block;
    padding: 10px 0;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .form-control::placeholder{
    padding: 0 15px;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  .btn-danger {
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 8px 16px;
    cursor: pointer;
  }
  
  .card-group {
    display: flex;
    justify-content: space-around; 
    flex-wrap: wrap; 
    margin-bottom: 20px;
    padding-bottom: 102px;
    /*background-color: #f0eadf;*/
  }
  
  .card {
    width: 300px;
    margin: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .card-body {
    padding: 20px;
  }
  
  .card-footer {
    background-color: #f8f9fa;
    padding: 10px;
    display: flex;
    align-items: center;
  }
  
  .card-img-top {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .material-icons {
    font-size: 24px;
    margin-right: 5px;
  }
  
  .text-primary {
    color: #007bff;
  }
  
  .text-info {
    color: #17a2b8;
  }
  
  .text-sm {
    font-size: 14px;
    color: #6c757d;
  }
  
  .font-weight-normal {
    font-weight: normal;
  }
  </style>
   