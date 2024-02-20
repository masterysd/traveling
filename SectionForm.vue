<template>
    <div class="main-content">
      <h1>follow the soul to best adventure</h1>
      <b-jumbotron 
        :header="jumbotronHeader" 
        :lead="jumbotronLead"
        @mouseover="handleMouseOver"
        @mouseleave="handleMouseLeave"
      >
        <template #header>
          <h1 class="display-4">{{ jumbotronHeader }}</h1>
        </template>
  
        <template #lead>
          <p class="lead">{{ jumbotronLead }}</p>
          <p>Customize it further to suit your needs!</p>
        </template>
  
        <hr class="my-4">
  
        <p>
          Customize the content and styling of this jumbotron to create stunning landing pages or showcase featured content.
        </p>
  
        <b-button variant="primary" href="#">Learn More</b-button>
      </b-jumbotron>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SpecialJumbotron',
    data() {
      return {
        jumbotronHeader: 'Welcome to My Website',
        jumbotronLead: 'Explore the world of BootstrapVue with this custom jumbotron!'
      };
    },
    methods: {
      handleMouseOver() {
        // Change the jumbotron content when the mouse enters
        this.jumbotronHeader = 'Special Offer!';
        this.jumbotronLead = 'Limited time offer: Get 50% off on all products!';
      },
      handleMouseLeave() {
        // Reset the jumbotron content when the mouse leaves
        this.jumbotronHeader = 'Welcome to My Website';
        this.jumbotronLead = 'Explore the world of BootstrapVue with this custom jumbotron!';
      }
    }
  }
  </script>
  
  <style scoped>
  /* Apply transition to the jumbotron */
  b-jumbotron {
    margin: 20px;
    padding: 20px;
    /* width: 100%; */
    display: block;
    text-align: center;
    transform: scale(0.8);
    transition: transform 0.5s ease; /* Add a transition effect */
    background-image: url(https://images.pexels.com/photos/18190171/pexels-photo-18190171/free-photo-of-northern-mockingbird-on-cactus.jpeg?auto=compress&cs=tinysrgb&w=120&lazy=load);
  }
  
  /* Define a hover effect for the jumbotron */
  b-jumbotron:hover {
    transform: scale(1); /* Scale the jumbotron on hover */
  }
  
  /* Define animation for header */
  .jumbotron-animation {
    animation: bounceHeader 1s ease-in-out infinite alternate; /* Apply the animation to the header */
  }
  
  /* Define animation for lead */
  .lead-animation {
    animation: glowLead 1s ease-in-out infinite alternate; /* Apply the animation to the lead */
  }
  
  /* Define keyframes for header animation */
  @keyframes bounceHeader {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
  
  /* Define keyframes for lead animation */
  @keyframes glowLead {
    0% {
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    }
    100% {
      text-shadow: 0 0 15px rgba(255, 255, 255, 1);
    }
  }
  </style>
  