<template>
  <q-header class="flex justify-between items-center q-px-md navbar-container">
    <img
      src="~assets/logo-hyperhire.png"
      alt="logo"
      height="24"
    />
    <div class="gt-xs flex items-center" style="gap: 16px">
      <q-select
        v-model="selectedValue"
        :label="selectPlaceholder"
        :options="selectOptions"
        borderless
        style="min-width: 80px; color: white"
        label-color="white"
      />
      <p class="q-mb-none text-weight-bolder">{{ text1 }}</p>
    </div>
    <q-btn
      color="white"
      text-color="primary"
      unelevated
      padding="xs lg"
      style="border-radius: 8px"
      class="gt-xs"
      :label="buttonLabel"
    />
    <q-btn
      flat
      dense
      round
      :icon="isShowMenu ? 'close' : 'menu'"
      aria-label="Menu"
      class="lt-sm"
      @click="toggleMenu"
    />
  </q-header>
  <!-- Menu for mobile -->
  <div v-show="isShowMenu" class="lt-sm q-px-md">
    <q-select
      v-model="selectedValue"
      :label="selectPlaceholder"
      :options="selectOptions"
      borderless
      style="min-width: 80px; color: white"
      label-color="white"
      class="q-mb-sm"
    />
    <p class="q-mb-none text-weight-bolder" style="color: white">
      {{ text1 }}
    </p>
    <q-btn
      color="white"
      text-color="primary"
      unelevated
      padding="xs lg"
      style="border-radius: 8px; width: 100%"
      class="q-mt-lg"
      :label="buttonLabel"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { buttonLabel, selectPlaceholder, selectOptions, text1 } from 'src/labels/navbar';

export default defineComponent({
  name: 'Navbar',
  data() {
    return {
      buttonLabel,
      selectPlaceholder,
      text1,
      selectedValue: ref(null),
      selectOptions,
      isShowMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.isShowMenu = !this.isShowMenu
    }
  }
})
</script>

<style scoped>
.navbar-container {
  width: 100%;
  max-width: 1024px;
  height: 60px;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  position: relative;
}
</style>
