<template>
  <v-chip
    class="animate mx-3 my-2 d-flex flex-row flex-wrap justify-start"
    v-for="item in chips"
    :key="item.title"
    @click="flags[item.title] = !flags[item.title]"
  >
    <div class="pa-1 img heightBlock" :class="textColor">
      <v-icon :icon="`mdi-${item.icon}`" size="18" class="mb-3 pr-3 icon">
      </v-icon>
    </div>
    <div class="d-flex justify-start align-center px-1">
      <h5 class="text-textFirst" :class="textColor">
        {{ item.title?.toUpperCase() }}
      </h5>
    </div>

    <v-tooltip
      v-if="item.desc"
      class="tooltip"
      activator="parent"
      location="top"
    >
      <h4 class="hint text-textSecond font-weight-light font-italic">
        {{ item.desc }}
      </h4>
    </v-tooltip>
  </v-chip>
</template>

<script setup>
defineProps({
  chips: {
    type: Array,
    require: true,
  },
  textColor: {
    type: String,
    default: "text-bgFirst",
  },
});
</script>

<style lang="scss" scoped>
.img {
  padding: 40px;
  margin-right: -10px;
}

.heightBlock {
  height: 26px;
}
</style>
