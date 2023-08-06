<template>
  <v-card class="side-menu-card">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <v-tooltip v-if="group" activator="parent" location="right">
        {{ group.desc }}
      </v-tooltip>
      <v-chip v-for="skill in skills" :key="skill.title" class="mr-1 my-1 animate">
        {{ skill.title.toUpperCase() }}
      </v-chip>
      <!-- Добавьте другие скилы -->
    </v-card-text>
  </v-card>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    request: false,
  },
  skills: {
    type: Array,
    default: () => [], //[[{title, hint, rate, started, icon}]]
  },
});
</script>

<style lang="scss" scoped></style>
