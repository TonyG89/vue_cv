<template>
  <div class="sideBlock" app permanent>
    <!-- БЛОК: Фотография и контакты -->
    <ContactsBlock :contacts="contacts" />
    <TechSkillsBlock title="Tech Skills" :skills="techSkillsClass" />
    <SoftSkillsBlock title="Soft Skills" :skills="softSkills" />
    <EducationSideBlock title="Education" :data="education" />
    <!-- Английский язык -->
    <LanguagesBlock />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ContactsBlock from "@/components/blocks/ContactsBlock.vue";
import TechSkillsBlock from "@/components/blocks/TechSkillsBlock.vue";
import SoftSkillsBlock from "@/components/blocks/SoftSkillsBlock.vue";
import LanguagesBlock from "@/components/blocks/LanguagesBlock.vue";
import EducationSideBlock from "./blocks/EducationSideBlock.vue";
import { contacts, skills, education } from "@/data/";

const { softSkills, techSkillsClass } = skills();
</script>

<style lang="scss">
/* Стили как ранее */

/* Анимации как ранее */

.side-menu-card {
  margin: 4px 16px;
  padding: 16px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: rgb(var(--v-theme-bgFirst));
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: slideInLeft 1s;
}

.side-menu-card:hover {
  background-color: rgb(var(--v-theme-bgFirst));
}
</style>
