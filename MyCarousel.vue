<template>
  <div class="carousel-container">
    <h1 class="carousel-title">Discover Beautiful Places</h1>
    <div class="carousel">
      <div class="carousel-inner">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          :class="{ 'carousel-item': true, active: index === currentIndex }"
        >
          <div
            class="image-container"
            @mouseenter="showCaption(index)"
            @mouseleave="hideCaption(index)"
            @touchstart="showCaption(index)"
            @touchend="hideCaption(index)"
          >
            <img :src="slide.image" class="d-block w-100" :alt="slide.alt" />
            <div class="carousel-caption" v-if="showCaptions[index]">
              <div class="text-center">
                <h2 class="caption-title">{{ slide.title }}</h2>
                <p class="caption-text">{{ slide.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button @click="prevSlide" class="carousel-control-prev">
        <span class="carousel-control-icon" aria-hidden="true">&lt;</span>
      </button>
      <button @click="nextSlide" class="carousel-control-next">
        <span class="carousel-control-icon" aria-hidden="true">&gt;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          image:
            "https://images.pexels.com/photos/11517781/pexels-photo-11517781.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
          alt: "Slide 1",
          title: "A Breathtaking View from the Cliff",
          description:
            "Experience nature like never before with stunning vistas.",
        },
        {
          image:
            "https://images.pexels.com/photos/20119386/pexels-photo-20119386/free-photo-of-blooming-tree-branch-on-fabric.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
          alt: "Slide 2",
          title: "Discover Hidden Gems",
          description:
            "Find secret spots and hidden treasures in our destinations.",
        },
        {
          image:
            "https://images.pexels.com/photos/16658578/pexels-photo-16658578/free-photo-of-eagle.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
          alt: "Slide 3",
          title: "Embark on an Adventure",
          description: "Unleash your inner explorer and create memories.",
        },
      ],
      currentIndex: 0,
      showCaptions: [false, false, false],
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    showCaption(index) {
      this.showCaptions[index] = true;
    },
    hideCaption(index) {
      this.showCaptions[index] = false;
    },
  },
};
</script>

<style scoped>
/* Carousel styles remain unchanged */

.carousel-container {
  position: relative;
  text-align: center;
  margin-bottom: 40px;
}

.carousel-title {
  margin-top: 30px;
  font-size: 40px;
  font-weight: bold;
  color: #333;
}

.carousel {
  display: inline-block;
  margin-top: 30px;
}

.carousel-inner {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
}

.carousel-item {
  display: none;
  transition: opacity 0.5s ease;
}

.carousel-item.active {
  display: block;
}

.image-container {
  position: relative;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 20px; /* Adjusted padding for better appearance */
  box-sizing: border-box;
  width: 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-container:hover .carousel-caption,
.image-container.touch .carousel-caption {
  opacity: 1;
}

.carousel-caption h2 {
  font-size: 24px; /* Adjusted font size for better readability */
  margin-bottom: 10px; /* Adjusted margin for better appearance */
}

.carousel-caption p {
  font-size: 18px; /* Adjusted font size for better readability */
  margin-bottom: 0;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%; /* Center the controls vertically */
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 15px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  z-index: 2;
  font-size: 24px; /* Increased font size for better visibility */
}

.carousel-control-prev {
  left: 20px; /* Adjusted left position */
}

.carousel-control-next {
  right: 20px;
}

.carousel-control-icon {
  /* Styles for the carousel control icons */
}
</style>
