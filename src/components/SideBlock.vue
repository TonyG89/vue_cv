<template>
  <div class="sideBlock">
    <ContactsBlock :contacts="contacts" />
    <!-- <EducationSideBlock title="Education" :data="education" /> -->
    <SoftSkillsBlock title="Soft Skills" :skills="softSkills" />
    <TechSkillsBlock title="Tech Skills" :skills="techSkillsClass" />
    <CodeStatisticsSideBlock title="My Activity" :data="theoryAndPractice" />
    <LanguagesBlock />
    <PortfolioSideBlock title="My Portfolio" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import ContactsBlock from "@/components/blocks/ContactsBlock.vue";
import TechSkillsBlock from "@/components/blocks/TechSkillsBlock.vue";
import SoftSkillsBlock from "@/components/blocks/SoftSkillsBlock.vue";
import LanguagesBlock from "@/components/blocks/LanguagesBlock.vue";
import EducationSideBlock from "./blocks/EducationSideBlock.vue";
import PortfolioSideBlock from "./blocks/PortfolioSideBlock.vue";
import CodeStatisticsSideBlock from "./blocks/StatisticsSideBlock.vue";

const props = defineProps({
  contacts: Array,
  skills: Function,
  education: Array,
  theoryAndPractice: Object,
});

const { softSkills, techSkillsClass } = props.skills();
console.log(window.innerWidth);
</script>

<style lang="scss">
.sideBlock {
  max-width: 400px;
  width: 400px;
}

.side-menu-card {
  margin: 4px 16px;
  padding: 16px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: rgb(var(--v-theme-bgFirst));
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: slideInLeft 1s;
}

.bg-none {
  background: #00000000;
}

.side-menu-card:hover {
  background-color: rgb(var(--v-theme-bgFirst));
}
</style>
