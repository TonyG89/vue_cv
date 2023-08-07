<template>
  <v-main class="bgImg w-75">
      <!-- BLOCK 2 -->
      <BioBlock :data="aboutMe" />
      <!-- <EducationBlock :data="education" /> -->
      <!-- BLOCK 3 -->
      <HobbyBlock title="hobby" :data="hobby" />
      <WorkExperienceBlock :data="experience" />
      <!--  -->
      <TheoryAndPracticeBlock :data="theoryAndPractice" />
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
  background-color: #333333;
  text-align: center;
  animation: fadeIn 1s;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.cardBlock {
  max-width: 600px;
  width: auto;
}

.animate {
  transition: all 1.2s ease-out;
  > div {
    transition: all 1.2s ease-out;
    .icon {
      transition: all 1.2s ease-out;
    }
  }
  &:hover {
    transform: translateY(-2px);
    transition: transform 0.5s linear;
    > div {
      //:not(:last-child)
      filter: invert(100%);
      transition: all 0.5s ease-in;
    }
    .icon {
      transform: scale(1.2);
      transition: all 0.3s ease-in-out;
    }
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.2);
  }
  60% {
    transform: scale(0.8);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.contact-card,
.about-card,
.education-card,
.experience-card,
.skills-card,
.hobbies-card {
  animation: slideInUp 1s;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
