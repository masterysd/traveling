<template>
  <div class="login-container">
    <div class="login-form">
      <img class="logo" src="../assets/trv.jpg" alt="Logo" />
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <input type="text" v-model="email" placeholder="Enter Email" />
        </div>
        <div class="form-group">
          <input type="password" v-model="password" placeholder="Enter Password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <router-link to="/sing-up">Sign Up</router-link>
      </p>
      <p class="error-message">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
      error: '', // New property to store error messages
    }
  },
  methods: {
    async login() {
      // Check if email and password are filled
      if (!this.email || !this.password) {
        this.error = 'Please fill in all fields';
        return;
      }

      // Make the login request
      try {
        let result = await axios.get(
          `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        );

        // Check if login was successful
        if (result.status === 200 && result.data.length > 0) {
          localStorage.setItem("user-info", JSON.stringify(result.data[0]));
          this.$router.push({ name: 'HoMe' });
        } else {
          this.error = 'Invalid email or password';
        }
      } catch (error) {
        console.error('Error during login:', error);
        this.error = 'An error occurred during login';
      }
    },
  },
};
</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fdf4e9;

}

.login-form {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 320px;
}

.logo {
  display: block;
  margin: 0 auto 20px;
  width: 120px;
}

h1 {
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
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

.error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>
