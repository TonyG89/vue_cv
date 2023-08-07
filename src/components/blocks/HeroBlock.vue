<template>
  <v-card class="heroCard text-textFirst bg-bgThird position-absolute">
    <v-row>
      <v-col class="sideBlock">
        <div class="avatar mx-auto" :style="`border-color: ${bgFirst}`" />
      </v-col>
      <v-col class="text-left ml-10 mt-5">
        <h2 class="text-uppercase">{{ aboutMe.name }}</h2>
        <h4 class="text-textThird">{{ aboutMe.vacancy }}</h4>
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
.heroCard {
  margin-top: 100px;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  width: 100%;
  height: 200px;
  border-radius: 0;
  text-align: center;
  box-shadow: none;
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
</style>
