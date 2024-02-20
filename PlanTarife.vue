<template>
    <div class="business-plan">
      <section class="overview">
        <h2>Business Overview</h2>
        <p>{{ businessOverview }}</p>
      </section>
      <section class="mission">
        <h2>Mission Statement</h2>
        <p>{{ missionStatement }}</p>
      </section>
      <section class="goals">
        <h2>Goals</h2>
        <ul>
          <li v-for="(goal, index) in goals" :key="index">{{ goal }}</li>
        </ul>
      </section>
      <section class="strategies">
        <h2>Strategies</h2>
        <ul>
          <li v-for="(strategy, index) in strategies" :key="index">{{ strategy }}</li>
        </ul>
      </section>
      <section class="team">
        <h2>Team Members</h2>
        <ul>
          <li v-for="(member, index) in teamMembers" :key="index">{{ member.name }} - {{ member.role }}</li>
        </ul>
      </section>
      <section class="pricing">
        <h2>Pricing Plans</h2>
        <div class="pricing-table">
          <div class="plan">
            <h3>Basic Plan</h3>
            <p>Unlock comments</p>
            <p>Unlock replies</p>
            <p>Unlock likes</p>
            <p>Price: $10/month</p>
            <button @click="upgradePlan(10)" class="btn">Upgrade Plan</button>
          </div>
          <div class="plan">
            <h3>Pro Plan</h3>
            <p>All features in Basic Plan</p>
            <p>Unlock premium support</p>
            <p>Price: $20/month</p>
            <button @click="upgradePlan(20)" class="btn">Upgrade Plan</button>
          </div>
          <div class="plan">
            <h3>Enterprise Plan</h3>
            <p>All features in Pro Plan</p>
            <p>Customized solutions</p>
            <p>Price: Contact us</p>
            <button @click="contactUs" class="btn">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        businessOverview: 'Brief overview of the business and its industry.',
        missionStatement: 'Concise statement describing the purpose and goals of the business.',
        goals: [
          'Short-term goal 1',
          'Short-term goal 2',
          'Long-term goal 1',
          'Long-term goal 2'
        ],
        strategies: [
          'Marketing strategy',
          'Sales strategy',
          'Product development strategy',
          'Customer service strategy'
        ],
        teamMembers: [
          { name: 'John Doe', role: 'CEO' },
          { name: 'Jane Smith', role: 'COO' },
          { name: 'David Lee', role: 'CTO' }
        ]
      };
    },
    methods: {
      upgradePlan(price) {
        // Implement logic to upgrade user's plan
        alert('Upgrade to access this feature for $' + price + '/month!');
      },
      contactUs() {
        // Implement logic to contact for enterprise plan
        alert('Contact us for pricing details!');
      }
    }
  }
  </script>
  
  <style scoped>
  /* Global styles */
  .business-plan {
    font-family: Arial, sans-serif;
  }
  
  .business-plan main {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .business-plan h2 {
    margin-top: 40px;
  }
  
  .business-plan p,
  .business-plan ul {
    margin-top: 10px;
  }
  
  .pricing-table {
    display: flex;
    justify-content: space-around;
  }
  
  .plan {
    width: 300px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .plan h3 {
    margin-top: 0;
  }
  
  .plan p {
    margin-top: 10px;
  }
  
  .plan .btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .plan .btn:hover {
    background-color: #0056b3;
  }
  </style>
  