<template>
  <div class="about-pge">
    <h2>Welcome to Our Travel Page!</h2>
    <p>
      Hi, I'm <span class="highlight">{{ yourName }}</span>.
      I'm passionate about travel and love sharing my experiences with you.
    </p>
    <p>
      On this page, you'll find information about my travel adventures, tips,
      and recommendations.
    </p>

    <section class="section">
      <h3>Mission and Values</h3>
      <p>
        Our mission is to inspire and guide fellow travelers to discover the
        beauty of the world around us.
      </p>
      <p>
        We value authenticity, cultural appreciation, and the joy of
        exploration.
      </p>
    </section>

    <section class="section">
      <h3>Get in Touch</h3>
      <p>
        I'd love to hear from you! Feel free to reach out via email at
        <span class="highlight">{{ yourEmail }}</span> or connect on social
        media.
      </p>
    </section>
    <Carousel />
  </div>
</template>

<script>

export default {
  data() {
    return {
      yourName: "Diti",
      yourEmail: "nezajditi@gmail.com"
    };
  },
};
</script>

<style scoped>
.about-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: #333;
}

.highlight {
  color: #ff1a1a;
  font-weight: bold;
}

.section {
  margin-top: 20px;
}

h2,
h3 {
  color: #004080;
}

p {
  line-height: 1.6;
  margin-bottom: 15px;
}
</style>

