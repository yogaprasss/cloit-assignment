<template>
  <div class="footer-container">
    <div class="row">
      <div class="col-12 col-sm-3">
        <img
          src="~assets/logo-hyperhire-color.png"
          alt="logo"
          height="36"
        />
        <p class="q-mt-xs q-mb-lg text-weight-bolder">
          {{ title }}
        </p>
        <p class="q-mt-md q-mb-none text-weight-bolder">
          {{ telephone }}
        </p>
        <p class="q-mt-xs q-mb-none text-weight-bolder">
          {{ email }}
        </p>
        <br class="lt-sm" />
      </div>
      <div class="col-12 col-sm-1" />
      <div
        v-for="item in footerItems"
        :key="item.title"
        class="col-6 col-sm-2 q-pa-xs"
      >
        <div class="footer-item">
          <div class="footer-icon">
            <img
              :src="item.logo"
              alt="icon"
              height="24"
            />
          </div>
          <p>{{ item.title }}</p>
          <div class="flex items-center text-weight-bolder" style="gap: 8px">
            <p class="q-my-none">{{ cta }}</p>
            <img
              src="~assets/icon-cta.png"
              alt="cta"
              height="20"
            />
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-3">
        <br />
        <br class="gt-xs" />
        <div class="row">
          <div class="col-6">
            <p class="q-my-xs">{{ name.label }}</p>
            <p class="q-my-xs">{{ name.kr }}</p>
            <p class="q-my-xs text-weight-bolder">{{ name.en }}</p>
          </div>
          <div class="col-6">
            <p class="q-my-xs">{{ ceo.label }} <span class="text-weight-bolder">CEO</span></p>
            <p class="q-my-xs">{{ ceo.kr }}</p>
            <p class="q-my-xs text-weight-bolder">{{ ceo.en }}</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-1" />
      <div class="col-12 col-sm-3">
        <br />
        <br class="gt-xs" />
        <p class="q-my-xs">{{ license.label }} <span class="text-weight-bolder">CIN</span></p>
        <p class="q-my-xs text-weight-bolder">{{ license.number1 }}</p>
        <p class="q-my-xs text-weight-bolder">{{ license.number2 }}</p>
      </div>
      <div class="col-12 col-sm-5">
        <br />
        <br class="gt-xs" />
        <p class="q-my-xs">{{ address.label }} <span class="text-weight-bolder">ADDRESS</span></p>
        <p class="q-my-xs">{{ address.kr }}</p>
        <p class="q-my-xs text-weight-bolder">{{ address.en }}</p>
      </div>
      <div class="col-12">
        <br />
        <p class="q-my-xs">&copy; <span class="text-weight-bolder">2023 Hyperhire</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import {
  title,
  telephone,
  email,
  footerItems,
  cta,
  name,
  ceo,
  license,
  address
} from 'src/labels/footer';

export default defineComponent({
  name: 'FooterContent',
  data() {
    return {
      title,
      telephone,
      email,
      footerItems,
      cta,
      name,
      ceo,
      license,
      address
    };
  }
})
</script>

<style scoped>
.footer-container {
  width: 100%;
  max-width: 1024px;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  position: relative;
  padding: 80px 16px;
  font-size: 16px;
}

.footer-icon {
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: #EFF1F6;
  margin-bottom: 8px;
}

.footer-item {
  background: white;
  border-radius: 12px;
  padding: 8px;
  cursor: pointer;
  font-size: 14px;
}

@media screen and (max-width: 599.98px) {
  .footer-container {
    padding: 40px 16px;
  }
}
</style>
