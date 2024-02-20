<template>
  <h1>hello user, welcome on Update Restorant Page</h1>
  <form class="add">
    <input
      type="text"
      name="name"
      placeholder="Enter Name"
      v-model="restaurant.name"
    />
    <input
      type="text"
      name="Address"
      placeholder="Enter Address"
      v-model="restaurant.address"
    />
    <input
      type="text"
      name="Contact"
      placeholder="Enter Contact"
      v-model="restaurant.contact"
    />
    <button type="button" v-on:click="Updaterestaurant">
      Update Restaurant
    </button>
  </form>
</template>
<script>
import axios from "axios";
export default {
  name: "UpdateForm",
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async Updaterestaurant() {
      console.warn(this.restaurant);
      const result = await axios.put(
        "http://localhost:3000/restorants/" + this.$route.params.id,
        {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "HoMe" });
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SingUp" });
    }
    const result = await axios.get(
      "http://localhost:3000/restorants/" + this.$route.params.id
    );
    /* console.warn(this.$route.params.id); */
    console.warn(result.data);
    this.restaurant = result.data;
  },
};
</script>
