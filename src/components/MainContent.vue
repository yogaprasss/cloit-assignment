<template>
  <div class="q-mt-lg q-px-sm main-content-container">
    <div class="row">
      <div class="col-12 col-sm-6">
        <div class="fade-in delayed q-mb-md" style="position: relative">
          <div class="popup-title">{{ popupText }}</div>
          <div class="triangle" />
        </div>
        <h4 class="q-my-none text-weight-bolder fade-in-up">
          {{ title1 }}
        </h4>
        <h4 class="q-my-none text-weight-bolder fade-in-up">
          {{ title2 }}
        </h4>
        <h5 class="q-my-none fade-in-up q-mt-lg">
          {{ subtitle1 }}
        </h5>
        <h5 class="q-my-none fade-in-up">
          {{ subtitle2 }}
        </h5>
        <h5 class="q-my-none fade-in-up q-mt-lg gt-xs" style="text-decoration: underline">
          {{ subtitle3 }}
        </h5>
        <div class="justify-between gt-xs" style="display: flex; gap: 16px; margin-top: 60px">
          <div v-for="item in subCardList" :key="item.title" class="fade-in-up" style="position: relative">
            <hr class="hairline" />
            <h6 class="q-mb-none q-mt-md text-weight-bolder">{{ item.title }}</h6>
            <p class="q-my-none">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6">
        <q-carousel
          v-model="slide"
          swipeable
          animated
          autoplay
          infinite
          transition-prev="slide-right"
          transition-next="slide-left"
          control-color="white"
          padding
          arrows
          height="510px"
          style="background: transparent"
          class="text-white fade-in"
        >
          <q-carousel-slide
            v-for="item in cardList"
            :key="item.id"
            :name="item.id"
          >
            <div
              class="q-mb-md fade-in"
              style="position: absolute; left: 50%; transform: translateX(-50%)"
            >
              <div class="popup-card">월 {{ item.rate }}만원</div>
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
                {{ item.name }}
              </h5>
              <h6 class="q-mt-none q-mb-lg" style="color: #4A77FF">
                {{ item.position }}
                <span class="text-weight-bolder">
                  &bull; {{ item.experience }}y+
                </span>
              </h6>
              <div class="flex justify-center" style="gap: 8px">
                <div
                  v-for="skill in item.skills"
                  :key="skill"
                  class="q-px-lg q-py-xs"
                  style="border: 1px solid gray; border-radius: 8px"
                >
                  {{ skill }}
                </div>
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
        <h5
          class="fade-in-up q-mt-lg lt-sm"
          style="text-decoration: underline; color: #FBFF23"
        >
          {{ subtitle3 }}
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import {
  popupText,
  title1,
  title2,
  subtitle1,
  subtitle2,
  subtitle3,
  subCardList,
  cardList
} from 'src/labels/main-content';

export default defineComponent({
  name: 'MainContent',
  data() {
    return {
      popupText,
      title1,
      title2,
      subtitle1,
      subtitle2,
      subtitle3,
      subCardList,
      cardList,
      slide: ref(1)
    }
  },
  watch: {
    slide(value) {
      console.log({ value })
    }
  }
})
</script>

<style scoped>
.main-content-container {
  width: 100%;
  max-width: 1024px;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  position: relative;
  color: white;
}

.popup-title, .popup-card {
  width: fit-content;
  padding: 4px 12px;
  background: white;
  font-size: 18px;
  color: #40E2E8;
  border-radius: 8px;
}

.popup-title + .triangle {
  width: 0;
	height: 0;
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-top: 10px solid white;
  position: absolute;
  left: 12px;
}

.popup-card {
  color: #00C696;
  font-weight: 700;
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

.fade-in {
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 500ms;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  -webkit-animation-duration: 500ms;
  -webkit-animation-fill-mode: both;
}

.fade-in.delayed {
  animation-delay: 800ms;
}

.fade-in-up {
  opacity: 0;
  animation-name: fadeInUp;
  animation-duration: 500ms;
  animation-fill-mode: both;
  -webkit-animation-name: fadeInUp;
  -webkit-animation-duration: 500ms;
  -webkit-animation-fill-mode: both;
}

/* Animation */

@keyframes fadeInUp {
  from {
    transform: translate3d(0,40px,0);
  }

  to {
    transform: translate3d(0,0,0);
    opacity: 1;
  }
}

@-webkit-keyframes fadeInUp {
  from {
    transform: translate3d(0,40px,0);
  }

  to {
    transform: translate3d(0,0,0);
    opacity: 1;
  }
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

.hairline {
  background: white;
  border: none;
  height: 2px;
  width: 100%;
  max-width: 80px;
  position: absolute;
  left: 0;
}
</style>
