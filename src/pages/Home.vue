<script setup lang="ts">
</script>

<template>
  <main>
    <div class="text-top">
      Videos novos toda <b>quinta</b> às <b>20h</b>
    </div>
    <a href="https://youtube.com/wdevoficial" target="_blank">
      <img src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg" alt="Inscreva-se" id="subscribe">
    </a>
    <div class="text-bottom">youtube.com/wdevoficial.com</div>
  </main>
</template>

<style scoped>
  main {
    background-color: var(--color-background-home);
    justify-content: center;
    align-items: center;
  }

  .text-top {
    color: var(--color-text-light);
    font-size: 22px;
    margin-bottom: 20px;
  }

  #subscribe {
    width: 340px;
  }

  .text-bottom {
    color: var(--color-text-light);
    font-size: 18px;
    margin-top: 20px;
  }

  @media (max-width:700px) {
    #subscribe {
      width: 370px;
    }
  }

</style>