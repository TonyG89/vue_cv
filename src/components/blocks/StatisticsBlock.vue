<template>
  <BlockTemplate :title="title">
    <div
      class="text-left w-100 bodyBlock d-flex"
      :class="width <= 670 ? 'flex-wrap bg-bgFirst col' : 'bg-bgThird'"
    >
      <v-col>
        <h3 class="text-textThird text-uppercase">DEVELOPING TIME INVESTED</h3>
        <p class="pr-1 text-textThird font-weight-thin">from Apr 14, 2023</p>

        <div class="expand" :class="width <= 670 ? '' : 'bg-bgFirst'">
          <div
            v-for="block in data.codeTime"
            :key="block"
            class="d-flex flex-row align-center mx-2 my-4"
          >
            <img href="https://codetime.dev" :src="block" />
            <span class="extraBlock" v-if="data.codeTime.at(-1) === block">
              {{ stringDaysLeft }}</span
            >
          </div>
        </div>
        <h3 class="text-textThird text-uppercase">Rank in codewars</h3>
        <img
          :class="width > 670 && 'minWidthBlock'"
          :src="codewars"
          alt="my codewars account"
        />
      </v-col>

      <v-col :class="width <= 670 ? 'text-left' : 'text-right'">
        <h3 class="text-textThird">GitHub Activities</h3>

        <p class="pr-1 text-textThird font-weight-thin">from Apr 4, 2022</p>
        <div>
          <img
            :src="urlLanguages"
            alt="my languages statistic in github account"
          />
        </div>
      </v-col>
    </div>
    <!-- <img src="https://kounter.tk/badge/TonyG89_cv" /> -->
  </BlockTemplate>
</template>

<script setup>
import BlockTemplate from "@/components/ui/BlockTemplate.vue";
import moment from "moment";
import { useDisplay } from "vuetify/lib/framework.mjs";
const { width } = useDisplay();

const daysLeft = (moment() - moment("20230414")) / 86400000;
const stringDaysLeft = `/ ${parseInt(daysLeft)} Days`;

const urlLanguages =
  "https://github-readme-stats.vercel.app/api/top-langs/?username=TonyG89&show_icons=true&hide=true&count_private=true&title_color=263238&text_color=263238&icon_color=E65100&bg_color=ECEFF1&show_icons=true&layout=compact";

const codewars = "https://www.codewars.com/users/okylist/badges/small";

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
.expand {
  flex-grow: 1;
  // height: 165px;
  border: rgba(128, 128, 128, 0.123) 1px solid;
  border-radius: 5px;
  min-width: 260px;
  @media screen and (max-width: 670px) {
    width: 260px;
  }
}
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
.col {
  margin-left: -12px;
}

.minWidthBlock {
  min-width: 260px;
}
.bb {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
