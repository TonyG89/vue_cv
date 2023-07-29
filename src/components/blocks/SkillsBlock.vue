<template>
  <v-card class="side-menu-card">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <v-chip v-for="skill in skills" :key="skill.title">{{
        skill.title
      }}</v-chip>
      <!-- Добавьте другие софт скилы -->
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    request: false,
  },
  skills: {
    type: Array,
    default: () => [], //[{title, hint, rate, started, icon}]
  },
});
</script>

<style lang="scss" scoped></style>
