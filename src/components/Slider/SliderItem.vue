<template>
  <div class="slider-item-container">
    <div class="item-icon">
      <img
        :src="icon"
        alt="icon"
        height="32"
      />
    </div>
    <h6 class="q-my-none text-weight-bolder">{{ content }}</h6>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SliderItem',
  props: {
    icon: String,
    content: String
  }
})
</script>

<style scoped>
.slider-item-container {
  display: flex;
  align-items: center;
  border-radius: 12px;
  background: #00b1dc;
  padding: 12px;
  color: white;
  width: 220px;
  gap: 16px;
}

.item-icon {
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background: #76d6eb;
}
</style>
