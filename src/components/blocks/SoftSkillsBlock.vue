<template>
  <v-card class="side-menu-card">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <v-chip-group v-if="skillGrouped.length">
        <v-chip
          :color="chipColor(skill)"
          v-for="skill in skillGrouped"
          :key="skill.title"
          class="ma-1 px-2"
        >
          <v-tooltip v-if="skill.desc" activator="parent" location="right"
            >{{ skill.title }}
          </v-tooltip>
        </v-chip>
      </v-chip-group>

      <!-- Добавьте другие софт скилы -->
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  title: {
    type: String,
    request: false,
  },
  skills: {
    type: Array,
    default: () => [], //[{title, hint, rate, started, icon}]
  },
});

const levelHint = {
  1: "Constantly improving and enhancing (expert level)",
  2: "Advanced (proficient in the stack)",
  3: "Intermediate (fair knowledge)",
  4: "Novice/Beginner (basic knowledge)",
};

const skillGrouped = computed(() => [
  ...props.skills?.filter((skill) => skill.type === 1),
  ...props.skills?.filter((skill) => skill.type === 2),
  ...props.skills?.filter((skill) => skill.type === 3),
  ...props.skills?.filter((skill) => skill.type === 4),
]);

const chipColor = (obj) => {
  let color = "";
  switch (obj.type) {
    case 1:
      color = `green`;
      break;
    case 2:
      color = "warning";
      break;
    case 3:
      color = "red";
      break;
    case 4:
      color = "grey";
      break;
  }
  return color;
};
</script>

<style lang="scss" scoped></style>
