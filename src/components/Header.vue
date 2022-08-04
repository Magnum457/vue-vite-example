<script setup lang="ts">
  // imports
  import { ref } from 'vue';

  // states
  const menuActive = ref(false);

  // functions
  function openMenu() {
    menuActive.value = true;
  }
  function closeMenu() {
    menuActive.value = false;
  }
</script>

<template>
  <header>
    <nav>
      <a href="/">
        <img src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg" alt="WDEV" id="logo" />
      </a>
      <img src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg" alt="Abrir menu" id="menu-button" @click="openMenu"/>
      <div @click="closeMenu" id="menu-overlay" v-if="menuActive"></div>
      <div id="menu-items" :class="{active:menuActive}">
        <img src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg" alt="WDEV" id="menu-logo">

        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/videos">Videos</a></li>
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/contatos">Contatos</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
  header {
    background-color: var(--color-background-nav);
    width: 100%;
    height: 60px;
  }

  nav {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    padding-left: 20px;
  }

  #logo {
    width: 130px;
  }

  #menu-button {
    width: 30px;
    cursor: pointer;
  }

  #menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 60%;
    height: 100vh;
    background-color: #000;
    opacity: 0.8;
  }

  #menu-logo {
    width: 110px;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  #menu-items {
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--color-background-nav);
    width: 40%;
    height: 100vh;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  #menu-items.active {
    display: flex;
  }

  ul {
    list-style: none;
    text-align: center;
  }

  ul li {
    margin: 20px 0px;
  }

  ul li a {
    color: var(--color-text-light);
  }

  @media (max-width:700px) {
    #menu-button,
    #menu-logo,
    #menu-overlay {
      display: none;
    }

    #menu-items {
      display: flex;
      position: static;
      height: 60px;
      width: auto;
    }

    ul {
      display: flex;
      height: 60px;
      align-items: center;
    }

    ul li {
      margin: 0;
      margin-left: 10px;
    }
  }

</style>