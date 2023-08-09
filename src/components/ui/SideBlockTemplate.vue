<template>
  <div class="blockAnimate wBlock px-6">
    <h3
      v-if="title"
      class="text-uppercase text-center headTitle text-textFirst bg-bgFirst"
    >
      {{ title }}
    </h3>
    <v-card class="side-menu-card pa-4">
      <slot> </slot>
    </v-card>
  </div>
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
.wBlock {
  width: 360px;
}

.headTitle {
  margin: 0 16px;
  // border-radius: 20px;
  // border-bottom: rgb(var(--v-theme-textFirst)) 10px solid;
  padding: 5px;
}
</style>
