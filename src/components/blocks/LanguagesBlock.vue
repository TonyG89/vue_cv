<template>
  <v-card class="side-menu-card">
    <v-card-title>Languages</v-card-title>
    <v-card-text>
      <div
        class="d-flex animate fitContent"
        v-for="(lang, ind) in languages"
        :key="lang.title"
      >
        <v-tooltip activator="parent">
          <div class="hint">{{ lang.hint }}</div>
        </v-tooltip>
        <v-icon size="x-large">{{ `fi-${lang.icon}` }}</v-icon>
        <h3 class="ml-2 mt-1 text-uppercase">
          {{ lang.title }} - <span class="font-weight-thin">{{ lang.level }}</span>
        </h3>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { languages } from "@/data";
import "country-flag-icons";
</script>

<style lang="scss" scoped>
.hint {
  width: 200px;
}
</style>
