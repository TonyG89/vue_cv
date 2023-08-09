<template>
  <v-app class="wrapper app" fluid>
    <HeroBlock />
    <div class="d-flex" v-if="width > 770">
      <SideBlock
        :hobby="hobby"
        :education="education"
        :experience="experience"
        :aboutMe="aboutMe"
        :theoryAndPractice="theoryAndPractice"
        :contacts="contacts"
        :skills="skills"
        class="afterHeader"
      />
      <Main
        :hobby="hobby"
        :education="education"
        :experience="experience"
        :aboutMe="aboutMe"
        :theoryAndPractice="theoryAndPractice"
        class="afterHeader"
      />
    </div>
    <MobileOneLine
      v-else
      :hobby="hobby"
      :education="education"
      :experience="experience"
      :aboutMe="aboutMe"
      :theoryAndPractice="theoryAndPractice"
      class="afterHeader"
    />
    <v-footer color="bgThird" border
      ><div class="mx-auto">
        <!-- <a href="https://www.buymeacoffee.com/glzk"
        target="_blank"
          > -->
        <h3 class="text-textFirst">
          <!-- <v-icon>mdi-coffee</v-icon> -->
          created by Tony
        </h3>
        <!-- </a> -->
      </div>
    </v-footer>
  </v-app>
</template>

<script setup>
import { onMounted } from "vue";
import Main from "@/components/Main.vue";
import SideBlock from "@/components/SideBlock.vue";
import VisitCounter from "@/services/VisitCounter.vue";
import HeroBlock from "@/components/blocks/HeroBlock.vue";
import MobileOneLine from "@/components/MobileOneLine.vue";
import { useDisplay } from "vuetify";
import {
  hobby,
  education,
  experience,
  aboutMe,
  theoryAndPractice,
  contacts,
  skills,
} from "@/data";

// const { techSkillsClass, softSkills } = skills();
const { width, mobile } = useDisplay();

console.log(width.value); // 960
console.log(mobile.value); // true

// onMounted(() => {
//   console.log(this.$vuetify.display.mobile);
// });
</script>

<style lang="scss">
:root {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  // font-family: Tahoma;

  // font-family: monospace;
  // font-family: cursive;

  // font-family: Arial, Helvetica, sans-serif;

  // font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  // font-size: 16px;
}

.afterHeader {
  padding-top: 350px;
  @media screen and (max-width: 768px) {
    // padding-top: 250px;
  }
}

.bgOpacity {
  background: rgba(0, 0, 0, 0);
}

.fitContent {
  width: fit-content;
}

.smBlock {
  max-width: 400px;
}

.lgBlock {
  max-width: 600px;
}

.sizeText {
  font-size: 1.2rem;
}

.textJustify {
  text-align: justify;
}

.cardSize {
  /* max-height: 160px; */
  /* width: fit-content; */
  min-width: 300px;
  /* width: 300px; */
  background: red;
}

.blockWidth {
  width: 300px;
}

/* !FIXED: */
.minWidth {
  width: 100px !important;
}

.wrapper {
  display: flex;
  max-width: 1240px;
  margin: 0 auto;
}

.hover {
  &:hover {
    background-color: rgb(var(--v-theme-bgFirst));

    & a {
      transition: all 0.3s ease;
      transform: scale(1.1);
    }
    & v-list-item-title {
      transition: all 0.3s ease;
      transform: scaleX(10deg);
    }
  }
}

.secondFont {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: 900;
}

a {
  text-decoration: none;
  color: rgb(var(--v-theme-test));
}

.boldAnimate {
  transition: all 0.3s ease-out;
  :hover {
    font-weight: 700;
    transition: all 0.1s ease-out;
  }
}

.app {
  background: rgb(108, 131, 143);
}

.v-footer {
  max-height: 50px;
}

.bodyBlock {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
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
    transform: translateY(-4px);
    transition: transform 0.5s linear;
    color: rgba(var(--v-theme-textThird), 1);
    // color: black;
    font-weight: 900 !important;
    > div {
      //:not(:last-child)
      // filter: invert(100%);
      transition: all 0.5s ease-in;
    }
    .icon {
      transform: scale(1.2);
      transition: all 0.3s ease-in-out;
    }
  }
}

@keyframes bounce {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  40% {
    transform: scale(1.1);
  }
  60% {
    transform: scale(0.9);

    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

@keyframes fadeInLeft {
  from {
    transform: translateX(-2200px);
  }
  to {
    transform: translateX(0);
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

@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
