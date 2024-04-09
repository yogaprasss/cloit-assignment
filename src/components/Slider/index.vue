<template>
  <div class="gt-xs slider-container">
    <div
      class="slider-content fade-in"
      :style="{
        transform: `translateX(calc(${currentSlide} * -228px))`
      }"
    >
      <slider-item
        v-for="item in sliderItems"
        :key="item.content"
        :icon="item.icon"
        :content="item.content"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import SliderItem from './SliderItem.vue';
import { sliderItems } from 'src/labels/slider';

export default defineComponent({
  name: 'Slider',
  components: {
    SliderItem
  },
  data() {
    return {
      sliderItems,
      currentSlide: 0,
      timeout: null
    }
  },
  mounted() {
    this.timeout = setInterval(() => {
      if (this.currentSlide < 5) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
    }, 5000);
  },
  unmounted() {
    this.timeout.clearInterval();
  }
})
</script>

<style scoped>
.slider-container {
  overflow: hidden;
}

.slider-content {
  position: relative;
  display: flex;
  gap: 8px;
  width: 1360px;
  left: 50%;
  transition: transform 500ms ease-in-out;
}

.fade-in {
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 500ms;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  -webkit-animation-duration: 500ms;
  -webkit-animation-fill-mode: both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@media screen and (min-width: 1024px) {
  .slider-content {
    left: calc(((100% - 1024px) / 2) + 8px)
  }
}
</style>
