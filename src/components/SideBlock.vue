<template>
  <v-navigation-drawer width="325" app permanent>
    <!-- БЛОК: Фотография и контакты -->
    <ContactBlock :contacts="contactInfo" />
    <!-- Софт скилы -->
    <v-card class="side-menu-card">
      <v-card-title>Софт скилы</v-card-title>
      <v-card-text>
        <v-chip>HTML</v-chip>
        <v-chip>CSS</v-chip>
        <v-chip>JavaScript</v-chip>
        <!-- Добавьте другие софт скилы -->
      </v-card-text>
    </v-card>

    <!-- Хард скилы -->
    <v-card class="side-menu-card">
      <v-card-title>Хард скилы</v-card-title>
      <v-card-text>
        <v-chip>Управление проектами</v-chip>
        <v-chip>Аналитика</v-chip>
        <v-chip>Решение проблем</v-chip>
        <!-- Добавьте другие хард скилы -->
      </v-card-text>
    </v-card>

    <!-- Английский язык -->
    <v-card class="side-menu-card">
      <v-card-title>Английский язык</v-card-title>
      <v-card-text>
        <p>Владение английским на уровне B2</p>
      </v-card-text>
    </v-card>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
import ContactBlock from "@/components/blocks/ContactBlock.vue";
import { contacts } from "@/data/";
// import contacts from "@/data/contacts";
const photoUrl = "./mxe.jpg";
const contactInfo = contacts;
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
