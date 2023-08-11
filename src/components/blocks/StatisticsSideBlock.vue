<template>
  <SideBlockTemplate :title="title" class="">
    <div class="text-left w-100 d-flex my-1">
      <div>
        <h4 class="text-textThird text-uppercase">Developing time invested</h4>
        <h5 class="pr-1 text-textThird font-weight-regular">
          from Apr 14, 2023
        </h5>
        <div
          v-for="block in data.codeTime"
          :key="block"
          class="d-flex flex-row align-center my-1 m-x-2"
        >
          <img href="https://codetime.dev" :src="block" />
          <span class="extraBlock" v-if="data.codeTime.at(-1) === block">
            {{ stringDaysLeft }}</span
          >
        </div>

        <div class="my-4">
          <h4 class="text-textThird text-uppercase mb-1">Rank in codewars</h4>
          <img :src="codewars" alt="my codewars account" />
        </div>

        <h4 class="text-textThird text-uppercase">GitHub Repositories</h4>
        <h5 class="pr-1 text-textThird font-weight-regular">
          from Apr 4, 2022
        </h5>

        <img :src="urlLanguages" class="w-100" />
      </div>
    </div>
  </SideBlockTemplate>
</template>

<script setup>
import SideBlockTemplate from "../ui/SideBlockTemplate.vue";
import moment from "moment";

const daysLeft = (moment() - moment("20230414")) / 86400000;
const stringDaysLeft = `/ ${parseInt(daysLeft)} Days`;
const urlLanguages =
  "https://github-readme-stats.vercel.app/api/top-langs/?username=TonyG89&show_icons=true&hide=true&count_private=true&title_color=263238&text_color=263238&icon_color=E65100&bg_color=ECEFF1&show_icons=true&layout=compact";

const codewars = "https://www.codewars.com/users/okylist/badges/micro";

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
.m-x-2 {
  // margin: 0 rem;
}
</style>
