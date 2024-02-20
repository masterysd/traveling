<template>
  <div>
    <div class="travel-form">
      <h2>Plan Your Dream Trip</h2>
      <form @submit.prevent="submitForm" class="form">
        <!-- Your form inputs -->
        <div class="form-group">
          <label for="place">What type of place do you prefer?</label>
          <select v-model="place" id="place" class="form-control">
            <option value="" disabled>Select an option</option>
            <option value="beach">Beach</option>
            <option value="mountain">Mountain</option>
            <option value="city">City</option>
            <option value="countryside">Countryside</option>
          </select>
        </div>
        <div class="form-group">
          <label>Who will you be traveling with?</label>
          <div class="radio-group">
            <input type="radio" id="alone" value="alone" v-model="companion">
            <label for="alone">Alone</label>
          </div>
          <div class="radio-group">
            <input type="radio" id="family" value="family" v-model="companion">
            <label for="family">With Family</label>
          </div>
          <div class="radio-group">
            <input type="radio" id="friends" value="friends" v-model="companion">
            <label for="friends">With Friends</label>
          </div>
        </div>
        <div class="form-group">
          <label for="days">Number of days:</label>
          <input type="number" id="days" v-model="days" class="form-control" min="1">
        </div>
        <div class="form-group">
          <label>Do you have pets?</label>
          <div class="radio-group">
            <input type="radio" id="yes" value="yes" v-model="pets">
            <label for="yes">Yes</label>
          </div>
          <div class="radio-group">
            <input type="radio" id="no" value="no" v-model="pets">
            <label for="no">No</label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        
        <!-- Display matching data -->
        <div v-if="matchingData" class="matching-data">
  <h3>Matching Data:</h3>
  <ul>
    <li v-for="(data, index) in matchingData" :key="index">
      <!-- Display each piece of matching data -->
      <span>{{ data.propertyName }}</span> <!-- Corrected from item.propertyName to data.propertyName -->
      <span>{{ data }}</span>
    </li>
  </ul>
</div>

        
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      place: '',
      companion: '',
      days: '',
      pets: '',
      matchingData: null
    };
  },
  methods: {
    async submitForm() {
  try {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        place: this.place,
        companion: this.companion,
        days: this.days,
        pets: this.pets
      })
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    // Parse response as JSON
    const data = await response.json();

    // Check if data is returned
    if (!data) {
      throw new Error('No matching data found');
    }

    // Store retrieved data in matchingData
    this.matchingData = data;

    console.log('Form submitted successfully');
    this.resetForm();
  } catch (error) {
    console.error('Error submitting form:', error.message);
  }
},
    resetForm() {
      // Reset form fields
      this.place = '';
      this.companion = '';
      this.days = '';
      this.pets = '';
    }
  }
}
</script>
<style scoped>
.travel-form {
  max-width: 500px;
  margin: 0 auto;
}

.form {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-control {
  width: 100%;
  padding: 10px 0;
  display: block;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}
.form-control::placeholder{
  padding: 15px 0;
}

.radio-group {
  margin-bottom: 10px;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
