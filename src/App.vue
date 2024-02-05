<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="XDDDDDD" /> -->
    <HelloWorld :msg="customVariable" />
  </div>
</template>

<script>
// import config from "./config.js";
// import HelloWorld from "./config.js";
// console.log("config:", config);
// console.log("config:", process.env.VUE_APP_CUSTOM_VARIABLE);

import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      customVariable: null,
    };
  },
  async created() {
    const data = await fetch("./config.json").then((res) => res.json());
    console.log("data:", data);
    if (!data) return;

    this.customVariable = data.VUE_APP_CUSTOM_VARIABLE;
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
