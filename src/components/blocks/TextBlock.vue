<template>
  <v-row>
    <v-col cols="12">
      <v-card class="header-card" dark>
        <v-img :src="photoUrl" height="200"></v-img>
        <v-card-title class="display-1 white--text">{{ title }}</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
defineProps({
  title: String,
  data: {
    type: Object, // {title,description}
    require: true,
  },
});
</script>

<style lang="scss" scoped></style>
