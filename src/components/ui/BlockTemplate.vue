<template>
  <v-row>
    <v-col class="fitContent mx-6">
      <h2
        v-if="title"
        class="text-uppercase text-left text-textFirst px-4 bg-bgFirst headerBorder fitContent"
      >
        {{ title }}
      </h2>
      <v-card class="bg-bgThird d-flex flex-wrap" width="100%" dark>
        <slot></slot>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    require: false,
  },
});
</script>

<style lang="scss" scoped>
.headerBorder {
  border: rgb(var(--v-theme-bgSecond)) 3px solid;
  margin-bottom: 0px;
}
</style>
