<template>
  <div class="mainContainer" fluid>
    <BioBlock :data="aboutMe" />
    <div class="mediaFlex">
      <EducationBlock v-if="width >= 1050" :data="education" />
      <!-- <HobbyBlock title="hobby" :data="hobby" /> -->
    </div>
    <WorkExperienceBlock :data="experience" />

    <!-- <StatisticsBlock title="Code Statistics" :data="theoryAndPractice" /> -->
    <Portfolio title="My Portfolio" v-show="width < 1050 && width >= 830" />
    <!-- <TheoryAndPracticeBlock :data="theoryAndPractice" /> -->
  </div>
</template>

<script setup>
import TextBlock from "./blocks/TextBlock.vue";
import HobbyBlock from "./blocks/HobbyBlock.vue";
import EducationBlock from "./blocks/EducationBlock.vue";
import WorkExperienceBlock from "./blocks/WorkExperienceBlock.vue";
import BioBlock from "./blocks/BioBlock.vue";
import TheoryAndPracticeBlock from "./blocks/TheoryAndPracticeBlock.vue";
// import Portfolio from "./blocks/PortfolioBlock.vue";
import StatisticsBlock from "./blocks/StatisticsBlock.vue";
import { useDisplay } from "vuetify/lib/framework.mjs";

const { width } = useDisplay();

defineProps({
  hobby: Array,
  education: Object,
  experience: Array,
  aboutMe: Object,
  theoryAndPractice: Object,
});
</script>

<style lang="scss">
.mainContainer {
  // z-index: 1;
  // transform: translateX(-11px);
  width: 100%;
  background-color: rgb(var(--v-theme-bgFirst));
}

.header-card {
  text-align: center;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.v-main {
  // max-width: 1000px;
}

.mobWidth {
  width: 325px;
}

.blockAnimate {
  div {
    animation: fadeIn 1s;
  }
}

.mediaFlex {
  @media screen and (max-width: 1250px) {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 1050px) {
    display: block;
  }
}

.cardBlock {
  max-width: 600px;
  width: auto;
}
</style>
