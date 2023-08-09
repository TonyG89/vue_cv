<template>
  <SideBlockTemplate :title="title">
    <v-tooltip v-if="group" activator="parent" location="right">
      {{ group.desc }}
    </v-tooltip>
    <v-chip
      v-for="skill in skills"
      :key="skill.title"
      class="mr-1 my-1 boldAnimate"
    >
      {{ skill.title.toUpperCase() }}
    </v-chip>
    <!-- Добавьте другие скилы -->
  </SideBlockTemplate>
</template>

<script setup>
import SideBlockTemplate from "@/components/ui/SideBlockTemplate.vue";
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
