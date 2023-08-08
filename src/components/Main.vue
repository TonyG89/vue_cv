<template>
  <v-main class="bgImg w-75">
    <!-- BLOCK 2 -->
    <BioBlock :data="aboutMe" />
    <!-- <EducationBlock :data="education" /> -->
    <!-- BLOCK 3 -->
    <HobbyBlock title="hobby" :data="hobby" />
    <WorkExperienceBlock :data="experience" />
    <!--  -->
    <StatisticsBlock title="Code Statistics" :data="theoryAndPractice" />
    <!-- <Portfolio title="Portfolio" /> -->
    <!-- <TheoryAndPracticeBlock :data="theoryAndPractice" /> -->
    <!--  -->
  </v-main>
</template>

<script setup>
import TextBlock from "./blocks/TextBlock.vue";
import HobbyBlock from "./blocks/HobbyBlock.vue";
import EducationBlock from "./blocks/EducationBlock.vue";
import WorkExperienceBlock from "./blocks/WorkExperienceBlock.vue";
import BioBlock from "./blocks/BioBlock.vue";
import TheoryAndPracticeBlock from "./blocks/TheoryAndPracticeBlock.vue";
import Portfolio from "./blocks/PortfolioBlock.vue";
import StatisticsBlock from "./blocks/StatisticsBlock.vue";
import {
  hobby,
  education,
  experience,
  aboutMe,
  theoryAndPractice,
} from "@/data";
</script>

<style lang="scss">
.header-card {
  text-align: center;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
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
