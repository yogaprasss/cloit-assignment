<template>
  <div class="q-mb-md fade-in popup-card-container">
    <div class="popup-card">
      <img
        src="~assets/dollar.png"
        alt="photo"
        height="20"
      />
      <span>월 {{ rate }}만원</span>
    </div>
    <div class="triangle" />
  </div>
  <div class="card flex-center" style="color: black; margin-top: 60px">
    <div style="position: relative;">
      <img
        src="~assets/photo.jpg"
        alt="photo"
        style="object-fit: cover; width: 128px; height: 128px; border-radius: 50%"
      />
      <img
        src="~assets/flag.png"
        alt="photo"
        style="position: absolute; bottom: 0; left: calc(50% + 64px); transform: translateX(-100%);"
      />
    </div>
    <h5 class="q-mt-md q-mb-none text-weight-bolder">
      {{ name }}
    </h5>
    <h6 class="q-mt-none q-mb-lg" style="color: #4A77FF">
      {{ position }}
      <span class="text-weight-bolder">
        &bull; {{ experience }}y+
      </span>
    </h6>
    <div class="flex justify-center" style="gap: 8px">
      <div
        v-for="skill in skills"
        :key="skill"
        class="q-pa-xs"
        style="border: 1px solid gray; border-radius: 8px"
      >
        {{ skill }}
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProfileCard',
  props: {
    id: String,
    rate: Number,
    name: String,
    position: String,
    experience: Number,
    skills: Array
  }
})
</script>

<style scoped>
.popup-card-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.popup-card {
  width: fit-content;
  padding: 4px 12px;
  background: white;
  font-size: 18px;
  color: #00C696;
  font-weight: 700;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.popup-card + .triangle {
  width: 0;
	height: 0;
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-top: 10px solid white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.card {
  border-radius: 8px;
  background: white;
  padding: 16px;
  text-align: center;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@-webkit-keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
