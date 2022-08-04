<script setup lang="ts">
  import "./styles/global.css";
  import Header from "./components/Header.vue";
  import Home from "./pages/Home.vue";
  import Footer from "./components/Footer.vue";
</script>

<template>
  <Header></Header>
  <router-view path="$router.key" />
  <Footer></Footer>
</template>

<style scoped>

</style>
