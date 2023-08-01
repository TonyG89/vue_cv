<template>
  <div class="w-25"  app permanent>
    <!-- БЛОК: Фотография и контакты -->
    <ContactBlock :contacts="contacts" />
    <!-- Софт скилы -->
    <SoftSkillsBlock title="Soft Skills" :skills="softSkills" />
    <!-- <SoftSkillsBlock title="softSkillsClass" :skills="softSkillsClass" /> -->

    <!-- Хард скилы -->
    <SoftSkillsBlock title="Hard Skills" :skills="hardSkills" />

    <!-- Английский язык -->
    <LanguagesBlock />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ContactBlock from "@/components/blocks/ContactBlock.vue";
import SoftSkillsBlock from "@/components/blocks/SkillsBlock.vue";
import LanguagesBlock from "@/components/blocks/LanguagesBlock.vue";
import { contacts, skills } from "@/data/";
const { softSkills, hardSkills, softSkillsClass } = skills();
console.log(softSkillsClass);
</script>

<style>
/* Стили как ранее */

/* Анимации как ранее */

.side-menu-card {
  margin: 16px;
  padding: 16px;
  background-color: #333333;
  color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: slideInLeft 1s;
}

.side-menu-card:first-child {
  margin-top: 100px; /* Отступ для первого элемента */
}

.side-menu-card:not(:first-child) {
  margin-top: 24px; /* Отступ между элементами */
}

.side-menu-card:hover {
  background-color: #5c2e2e;
}
</style>
