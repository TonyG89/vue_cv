<template>
  <div class="mainContainer" fluid>
    <BioBlock :data="aboutMe" />
    <div class="lgFlex">
      <EducationBlock :data="education" />
      <HobbyBlock title="hobby" :data="hobby" />
    </div>
    <WorkExperienceBlock :data="experience" />

    <!-- <StatisticsBlock title="Code Statistics" :data="theoryAndPractice" /> -->
    <!-- <Portfolio title="Portfolio" /> -->
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
import Portfolio from "./blocks/PortfolioBlock.vue";
import StatisticsBlock from "./blocks/StatisticsBlock.vue";


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

.lgFlex {
  @media screen and (max-width: 1250px) {
    display: flex;
    justify-content: space-between;
  }
}

.cardBlock {
  max-width: 600px;
  width: auto;
}
</style>
