<template>
  <div class="signup-container">
    <div class="signup-form">
      <img class="logo" src="../assets/trv.jpg" alt="Logo" />
      <h1>Sign Up</h1>
      <form @submit.prevent="signUp">
        <div class="form-group">
          <input type="text" v-model="name" placeholder="Enter Name" />
        </div>
        <div class="form-group">
          <input type="text" v-model="email" placeholder="Enter Email" />
        </div>
        <div class="form-group">
          <input type="password" v-model="password" placeholder="Enter Password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <router-link to="/login">Login</router-link>
      </p>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SignUp',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      error: '', // New property to store error messages
    };
  },
  methods: {
    async signUp() {
      // Check if any field is empty
      if (!this.name || !this.email || !this.password) {
        this.error = 'Please fill in all fields';
        return;
      }

      // Make the sign-up request
      try {
        let result = await axios.post('http://localhost:3000/users', {
          email: this.email,
          password: this.password,
          name: this.name
        });

        // Check if sign-up was successful
        if (result.status === 201) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: 'HoMe' });
        }
      } catch (error) {
        console.error('Error during sign-up:', error);
        this.error = 'An error occurred during sign-up';
      }
    },
  },
};
</script>

<style>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  background-image: radial-gradient(circle, #ffffff, #f5f5f5);
}

.signup-form {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 320px;
  animation: fadeInUp 0.5s ease forwards;
}

.logo {
  display: block;
  margin: 0 auto 20px;
  width: 120px;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;
}

input[type="text"]:focus,
input[type="password"]:focus {
  border-color: #4caf50;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

p {
  margin-top: 15px;
  text-align: center;
}

.error {
  color: red;
  text-align: center;
  margin-top: 10px;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
