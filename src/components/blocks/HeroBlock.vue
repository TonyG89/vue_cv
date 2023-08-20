<template>
  <v-card class="heroCard text-textFirst bg-bgThird position-absolute">
    <div :class="width > 550 && 'd-flex flex-wrap'">
      <v-col class="sideBlock">
        <div
          class="avatar imgAnimate mx-auto"
          :style="`border-color: rgb(var(--v-theme-${
            width < 770 ? 'bgFirst' : 'bgSecond'
          })`"
        />
      </v-col>
      <v-col class="text-left ml-3  d-flex flex-column-reverse justify-end"
      :class="width > 550? 'mt-5': 'mt-0'"
      >
        <!-- BLOCK-REVERSE -->
        <h1 class="text-textThird textAnimate">{{ aboutMe.vacancy }}</h1>
        <h2 class="text-uppercase textAnimate">{{ aboutMe.name }}</h2>
      </v-col>
    </div>
  </v-card>
</template>

<script setup>
import { aboutMe } from "@/data/";
import { useDisplay } from "vuetify/lib/framework.mjs";
const { width } = useDisplay();
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2rem;
  margin-top: -20px;
}
h2 {
  font-size: 3.9rem;
  margin-bottom: 0;
  padding-bottom: 0;

  @media screen and (max-width: 844px) {
    line-height: 45px;
  }
}

.sideBlock {
  @media screen and (max-width: 554px) {
    width: 100%;
    margin: 30px auto 0;
  }
}

.heroCard {
  margin-top: 100px;
  font-size: 2rem;
  width: 100%;
  height: 200px;
  border-radius: 0;
  text-align: center;
  box-shadow: none;
  z-index: 2;
  @media screen and (max-width: 770px) {
    margin-top: 16px;
  }
  @media screen and (max-width: 554px) {
    height: auto;
    padding-bottom: 10px;
  }
}

.avatar {
  box-sizing: content-box;
  background: url("/me.jpg");
  background-size: cover;
  background-position-x: center;

  border-radius: 50%;
  height: 170px;
  max-width: 170px;
  margin-top: -16px;
  border: rgb(var(--v-theme-bgSecond)) 20px solid;
}

.textAnimate {
  animation: bounce 1s;
}
.imgAnimate {
  animation: appear 1s;
}
.blockAnimate {
  animation: fadeInLeft 1s;
}

@media screen and (max-width: 1058px) {
  h2 {
    font-size: 2.5rem;
  }
  h1 {
    font-size: 1.5rem;
    margin-top: 0px;
  }
}
</style>
