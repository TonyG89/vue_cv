<template>
  <v-row class="blockAnimate">
    <v-col class="fitContent mx-6">
      <h2
        v-if="title"
        class="text-uppercase text-left text-bgFirst px-4 bg-bgSecond headerBorder fitContent"
      >
        {{ title }}
      </h2>
      <div class="bg-bgThird bodyBlock d-flex flex-wrap" width="100%" dark>
        <slot></slot>
      </div>
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

.bodyBlock {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}

// .hoverable {
//   border: rgb(var(--v-theme-bgFirst)) 0px solid;
//   border-bottom-left-radius: 3px;
//   border-bottom-right-radius: 3px;
//   transition: all 0.5s ease-out;
// }

// .hoverable:hover {
//   background-color: rgb(var(--v-theme-bgFirst));
//   border: rgb(var(--v-theme-bgSecond)) 2px solid;
// }
</style>
