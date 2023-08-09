<template>
  <div class="container">
    <!-- BLOCK 2 -->
    <BioBlock :data="aboutMe" />
    <EducationBlock :data="education" />
    <!-- BLOCK 3 -->
    <HobbyBlock title="hobby" :data="hobby" />
    <WorkExperienceBlock :data="experience" />:class='[this.$vuetify.breakpoint.xs ? "justify-center" : "justify-space-around"]'
    <!--  -->
    <StatisticsBlock title="Code Statistics" :data="theoryAndPractice" />
    <!-- <Portfolio title="Portfolio" /> -->
    <!-- <TheoryAndPracticeBlock :data="theoryAndPractice" /> -->
    <!--  -->
  </div>
</template>

<script setup>
import TextBlock from "./blocks/TextBlock.vue";
import HobbyBlock from "./blocks/HobbyBlock.vue";
import EducationBlock from "./blocks/EducationBlock.vue";
import WorkExperienceBlock from "./blocks/WorkExperienceBlock.vue";
import BioBlock from "./blocks/BioBlock.vue";
import TheoryAndPracticeBlock from "./blocks/TheoryAndPracticeBlock.vue";
import Portfolio from "./blocks/PortfolioBlock.vue";
// import StatisticsBlock from "./blocks/StatisticsBlock.vue";
import {
  hobby,
  education,
  experience,
  aboutMe,
  theoryAndPractice,
} from "@/data";
</script>

<style lang="scss">
.container {
  width: auto;
  background-image: url("/bg.svg");
  background: rgb(var(--v-theme-bgFirst));
  background-size: cover;
  background-position: center;
  margin-top: -12px;
}

.header-card {
  text-align: center;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.v-main {
  // max-width: 1000px;
}

.blockAnimate {
  div {
    animation: fadeIn 1s;
  }
}

.cardBlock {
  max-width: 600px;
  width: auto;
}
</style>
