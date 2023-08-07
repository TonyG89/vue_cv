<template>
  <v-row>
    <v-col class="fitContent px-6">
      <h3
        v-if="title"
        class="text-uppercase text-center headTitle text-textFirst bg-bgFirst"
      >
        {{ title }}
      </h3>
      <v-card class="side-menu-card">
        <slot> </slot>
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
.headTitle {
  margin: 0 16px;
  // border-radius: 20px;
  // border-bottom: rgb(var(--v-theme-textFirst)) 10px solid;
  padding: 5px;
}
</style>
