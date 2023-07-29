<template>
  <v-card class="side-menu-card">
    <v-card-title>Languages</v-card-title>
    <v-card-text>
      <p v-for="lang in languages" :key="lang.title">
        <gb-flag code="uk" iconPath="fr" size="small" />
        <v-icon>{{ `fi-${lang.icon}` }}</v-icon>
        {{ lang.title }} - {{ lang.hint }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { languages } from "@/data";
import "country-flag-icons";
</script>

<style lang="scss" scoped></style>
