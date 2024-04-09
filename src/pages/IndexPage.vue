<template>
  <q-page>
    <div class="main-container">
      <navbar />
      <main-content />
    </div>
    <div class="footer">
      <footer-content />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import Navbar from 'components/Navbar.vue';
import MainContent from 'components/MainContent.vue';
import FooterContent from 'components/FooterContent.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    Navbar,
    MainContent,
    FooterContent
  }
});
</script>

<style scoped>
.main-container {
  background: linear-gradient(151.17deg, #26C2B9 8.69%, #288BE7 126.06%);
  width: 100%;
  height: 100%;
  min-height: 100vh;
}
.footer {
  background: #fbfbfb;
  width: 100%;
  height: 100%;
}
</style>
