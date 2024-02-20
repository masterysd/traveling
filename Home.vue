<template>
  <div class="home">
    <div class="banner-carousel">
        <div class="overlay"></div>
        <video autoplay loop muted style="object-fit: cover;width: 100%;height: 100%;border-radius: 10px;">
          <source src="../assets/pexels-daniel-ponomarev-9669392 (1080p).mp4" type="video/webm" />
          <source src="../assets/pexels-daniel-ponomarev-9669392 (1080p).mp4" type="video/mp4" />
        </video>
        <div class="text-content">
          <h1>Welcome to Your Travel Page</h1>
          <p>
            Explore amazing destinations and plan your next adventure!
          </p>
        </div>
    </div>
    <SectionForm />
    <localTrip />
      <MyCarousel />
      <testKing />


  </div>
</template>

<script>
import localTrip from "./localTrip.vue";
import MyCarousel from "./MyCarousel.vue";
import testKing from "../components/testKing.vue";
import SectionForm from './SectionForm.vue'
import axios from "axios";

export default {
  name: "HoMe",
  components: {
    localTrip,
    MyCarousel,
    testKing,
    SectionForm
  },
  data() {
    return {
      name: "",
      restorant: []
    };
  },
  methods: {
    async deleteRestaurant(id) {
      let result = await axios.delete(
        "http://localhost:3000/users/" + id
      );
      console.warn(result);
      if (result.status === 200) {
        this.loadData();
      }
    },
    async loadData() {
  let user = localStorage.getItem("user-info");
  if (!user) {
    this.$router.push({ name: "SingUp" });
  } else {
    this.name = JSON.parse(user).name;
    let result = await axios.get("http://localhost:3000/users");
    this.restorant = result.data;
  }
},

  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style scoped>
.home{
  height: 100%;
  position: relative;
}
.banner-carousel {
  position: relative;
  color: #fff;
  text-align: center;
  overflow: hidden;
  max-height: calc(100vh - 48px);
}


.banner-carousel .overlay {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}



.banner-carousel .text-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


.banner-carousel h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}


.banner-carousel p {
  font-size: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
}
</style>
