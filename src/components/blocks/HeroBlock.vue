<template>
  <v-card class="heroCard text-textFirst bg-bgThird position-absolute">
    <v-row>
      <v-col class="sideBlock">
        <div
          class="avatar imgAnimate mx-auto"
          :style="`border-color: ${bgFirst}`"
        />
      </v-col>
      <v-col class="text-left ml-3 mt-5 d-flex flex-column-reverse justify-end">
        <!-- BLOCK-REVERSE -->
        <h1 class="text-textThird textAnimate">{{ aboutMe.vacancy }}</h1>
        <h2 class="text-uppercase textAnimate">{{ aboutMe.name }}</h2>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { aboutMe } from "@/data/";
defineProps({
  photoUrl: { type: String, default: "/me.jpg" },
  data: {
    type: Object,
    require: true,
  },
});
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2rem;
  margin-top: -20px;
  // margin-bottom: 0px;
}
h2 {
  font-size: 3.9rem;

  margin-bottom: 0;
  padding-bottom: 0;
}
.heroCard {
  margin-top: 100px;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  width: 100%;
  height: 200px;
  border-radius: 0;
  text-align: center;
  box-shadow: none;
  z-index: 2;
}

.avatar {
  box-sizing: content-box;
  background: url("/me.jpg");
  background-size: contain;
  border-radius: 50%;
  height: 170px;
  max-width: 170px;
  margin-top: -12px;
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

@media screen and (max-width: 1050px) {
  h2 {
    font-size: 2.5rem;
  }
  h1 {
    font-size: 1.5rem;
    margin-top: 0px;
  }
}
</style>
