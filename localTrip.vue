<template>
  <div class="slideshow-container" @mouseover="showText" @mouseleave="hideText">
    <h1>Trip from as</h1>
    <div class="slideshow">
      <div v-for="(trip, index) in trips" :key="index" class="mySlides fade">
        <div class="trip-card">
          <div class="trip-content">
            <div class="trip-image-container">
              <img :src="trip.image" alt="Trip Image" class="trip-image">
            </div>
            <div class="trip-details" :class="{ 'show-text': textVisible }">
              <h2>{{ trip.title }}</h2>
              <p>{{ trip.description }}</p>
              <p>Duration: {{ trip.duration }}</p>
              <p>Price: {{ trip.price }}</p>
            </div>
          </div>
        </div>
      </div>
      <a class="prev" @click="plusSlides(-1)">&#10094;</a>
      <a class="next" @click="plusSlides(1)">&#10095;</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocalTrips',
  data() {
    return {
      trips: [
        {
          title: 'Explore the Albanian Riviera',
          description: 'Discover stunning beaches, charming villages, and crystal-clear waters along the Albanian Riviera.',
          duration: '3 days',
          price: '$300',
          image: 'https://images.pexels.com/photos/2233391/pexels-photo-2233391.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          title: 'Hike in the Accursed Mountains',
          description: 'Embark on an adventurous hike through the rugged terrain of the Accursed Mountains, offering breathtaking views and unique wildlife.',
          duration: '4 days',
          price: '$400',
          image: 'https://images.pexels.com/photos/2189700/pexels-photo-2189700.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          title: 'Discover Cultural Heritage in Gjirokastër',
          description: 'Explore the UNESCO World Heritage Site of Gjirokastër, known for its well-preserved Ottoman architecture and rich history.',
          duration: '2 days',
          price: '$250',
          image: 'https://images.pexels.com/photos/13287511/pexels-photo-13287511.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        // Add more trips as needed
      ],
      slideIndex: 1,
      textVisible: false
    };
  },
  mounted() {
    this.showSlides(this.slideIndex);
  },
  methods: {
    plusSlides(n) {
      this.showSlides(this.slideIndex += n);
    },
    currentSlide(n) {
      this.showSlides(this.slideIndex = n);
    },
    showSlides(n) {
      let i;
      const slides = document.getElementsByClassName("mySlides");
      if (n > slides.length) { this.slideIndex = 1 }
      if (n < 1) { this.slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[this.slideIndex - 1].style.display = "block";
    },
    showText() {
      this.textVisible = true;
    },
    hideText() {
      this.textVisible = false;
    }
  }
};
</script>

<style scoped>
.slideshow {
  position: relative;
  overflow: hidden;
  margin-top: 20px;
}

.mySlides {
  display: none;
  text-align: center;
}

.trip-card {
  background-color: rgb(243, 237, 229);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.trip-content {
  display: flex;
}

.trip-image-container {
  flex: none;
  background-color: #eee8de;
}

.trip-image {
  max-width: 100%;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.trip-details {
  flex: 2;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  background-color: blanchedalmond;
}

.trip-details.show-text {
  opacity: 1;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 16px;
  color: white;
  font-weight: bold;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
}

.prev {
  left: 0;
}

.next {
  right: 0;
}
</style>
