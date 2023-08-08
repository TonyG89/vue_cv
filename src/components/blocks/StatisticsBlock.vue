<template>
  <BlockTemplate :title="title">
    <v-row class="ma-4 pa-2 text-left w-100 d-flex">
      <v-col>
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
      </v-col>
      <v-col class="text-right">
        <h3>
          GitHub Activities
          <span class="pr-1 text-textThird font-weight-thin"
            >from Apr 4, 2022</span
          >
        </h3>

        <div>
          <img :src="urlLanguages" />
          <img :src="urlActivities" />
        </div>
      </v-col>
    </v-row>
    <!-- <img src="https://kounter.tk/badge/TonyG89_cv" /> -->
  </BlockTemplate>
</template>

<script setup>
import BlockTemplate from "@/components/ui/BlockTemplate.vue";
import moment from "moment";

const daysLeft = (moment() - moment("20230414")) / 86400000;
const stringDaysLeft = `/ ${parseInt(daysLeft)} Days`;

const urlLanguages =
  "https://github-readme-stats.vercel.app/api/top-langs/?username=TonyG89&show_icons=true&hide=true&count_private=true&title_color=263238&text_color=263238&icon_color=E65100&bg_color=ECEFF1&show_icons=true&layout=compact";

const urlActivities =
  "https://github-readme-streak-stats.herokuapp.com/?user=TonyG89&stroke=546E7A&background=ECEFF1&ring=CFD8DC&fire=546E7A&currStreakNum=263238&currStreakLabel=263238&sideNums=263238&sideLabels=263238&dates=546E7A";

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
  background: linear-gradient(#e7eaeb, #d5d8d9);
  color: #444444;
  font-size: 11px;
  padding: 2px 6px 1px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  margin-left: -6px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  // text-shadow: 0px 1px #333333;
}
</style>
