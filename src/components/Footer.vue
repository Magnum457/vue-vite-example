<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import type { Ref } from "vue";
  import api from "../services/api";

  interface ISocialLink {
    icon: string;
    label: string;
    link: string;
  }

  const socialLinks: Ref<ISocialLink[]> = ref([]);

  onMounted(() => {
    api.get("/social-links.json").then(response => {
      console.log(response.data);
      socialLinks.value = response.data;
    });
  });
</script>

<template>
  <footer>
    <a class="socialLink" v-for="(socialLink, index) in socialLinks" :key="index" :href="socialLink.link">
      <img :src="socialLink.icon" :alt="socialLink.label" :title="socialLink.label">
    </a>
  </footer>
</template>

<style scoped>
  footer {
    width: 100%;
    height: 60px;
    background-color: var(--color-background-nav);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .socialLink {
    border: 1px solid var(--color-text-light);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin: 0 10px;
  }
  .socialLink img {
    width: 20px;
  }
</style>