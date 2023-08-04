<template>
  <v-card class="side-menu-card">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <v-list
        class="fitContent bgOpacity hover ma-2"
        v-for="(group, ind) in skills"
        :key="ind"
      >
        <v-tooltip v-if="group" activator="parent" location="right">
          {{group.desc}}
        </v-tooltip>
        <v-list-item v-for="skill in group" :key="skill.title">
          <v-chip
            :class="ind % 2 ? 'bg-bgFirst' : 'bg-bgSecond'"
            class="ma-1 pa-4"
          >
            {{ skill.title }}
          </v-chip>
        </v-list-item>
      </v-list>
      <!-- Добавьте другие софт скилы -->
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
