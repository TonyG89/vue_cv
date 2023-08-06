<template>
  <v-main class="bgImg ml-4 w-50">
    <v-container fluid>
      <TheoryAndPracticeBlock :data="theoryAndPractice"/>
      <HeroBlock class="mb-10" :data="aboutMe" />
      <!-- BLOCK 2 -->
      <div class="d-flex align-baseline">
        <BioBlock :data="aboutMe" />
        <EducationBlock :data="education" />
      </div>
      <!-- BLOCK 3 -->
      <div class="d-flex align-baseline my-8">
        <WorkExperienceBlock :data="experience" />
        <HobbyBlock title="hobby" :data="hobby" />
      </div>
      <!--  -->
      <!--  -->
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="contact-card" dark>
            <v-card-title class="white--text">Theory & Practice</v-card-title>
            <v-card-text class="white--text">
              блок про литерату, курсы
            </v-card-text>
            <v-card-text class="white--text">
              мое портфолию ссылка на его.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import TextBlock from "./blocks/TextBlock.vue";
import HobbyBlock from "./blocks/HobbyBlock.vue";
import EducationBlock from "./blocks/EducationBlock.vue";
import WorkExperienceBlock from "./blocks/WorkExperienceBlock.vue";
import HeroBlock from "./blocks/HeroBlock.vue";
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
