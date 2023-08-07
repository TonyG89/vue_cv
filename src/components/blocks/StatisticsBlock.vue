<template>
  <BlockTemplate :title="title">
    <v-card class="ma-4 pa-2 bg-bgThird text-left w-100 d-flex">
      <div>
        <h3>
          Development time in VSCode
          <span class="pr-1 text-textThird font-weight-thin"
            >from Apr 14, 2023</span
          >
        </h3>

        <div
          v-for="block in data.codeTime"
          :key="block"
          class="d-flex flex-row align-center ma-2"
        >
          <img href="https://codetime.dev" :src="block" />
          <span class="extraBlock" v-if="data.codeTime.at(-1) === block">
            {{ stringDaysLeft }}</span
          >
        </div>
      </div>
      <div class="text-right">
        <h3>
          GitHub Activities
          <span class="pr-1 text-textThird font-weight-thin"
            >from Apr 4, 2022</span
          >
        </h3>

        <div>
          <img :src="urlLanguages" />
          <img :src="urlActivities" />
          <div>
            <img src="https://kounter.tk/badge/TonyG89_cv" />
          </div>
        </div>
      </div>
    </v-card>
  </BlockTemplate>
</template>

<script setup>
import BlockTemplate from "@/components/ui/BlockTemplate.vue";
import moment from "moment";

const daysLeft = (moment() - moment("20230414")) / 86400000;
const stringDaysLeft = `/ ${parseInt(daysLeft)} Days`;

const urlLanguages =
  "https://github-readme-stats.vercel.app/api/top-langs/?username=TonyG89&show_icons=true&hide=true&count_private=true&title_color=5EFF09&text_color=4f7f35&icon_color=4f7f35&bg_color=1c1917&show_icons=true&layout=compact";

const urlActivities =
  "https://github-readme-streak-stats.herokuapp.com/?user=TonyG89&stroke=c0c0c0&background=1c1917&ring=4f7f35&fire=5EFF09&currStreakNum=c0c0c0&currStreakLabel=4f7f35&sideNums=c0c0c0&sideLabels=4f7f35&dates=5EFF09";

defineProps({
  data: {
    type: Object,
    require: true,
  },
  title: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.extraBlock {
  background: linear-gradient(#1284c5, #0072b3);
  color: white;
  font-size: 12px;
  padding-right: 5px;
  padding-bottom: 2px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  margin: -2px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
