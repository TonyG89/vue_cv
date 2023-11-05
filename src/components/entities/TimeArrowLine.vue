<template>
  <div
    v-if="!hidden"
    class="text-textThird d-flex flex-column justify-center mr-6 ml-2 mt-2 block"
  >
    <h6 class="">
      {{ dates[1] || nowDate
      }}<v-icon class="ml-2 mb-1">mdi-arrow-up-circle</v-icon>
    </h6>
    <div class="dot"></div>
    <h6 class="">
      {{ dates[0] }}<v-icon class="ml-2 mb-1">mdi-minus-circle</v-icon>
    </h6>
  </div>
</template>

<script setup>
import { ref } from "vue";
const nowDate = ref(new Date().getMonth() + 1 + "." + new Date().getFullYear());
defineProps({
  dates: {
    type: Array, // ['06.2012','06.2014']
    require: true,
  },
  hidden: {
    type: Boolean,
    default: () => false,
  },
});
</script>

<style lang="scss" scoped>
.block {
  min-width: 65px;
}
.dot {
  background: rgb(var(--v-theme-textThird));
  width: 3px;
  margin-left: auto;
  margin-right: 7.5px;
  margin-top: -6px;
  margin-bottom: -5px;
  height: 100%;
  background-size: cover;
}
</style>
