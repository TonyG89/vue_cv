<template>
  <v-chip
    class="animate mx-2 my-2"
    :class="[
      width < 1100 && width > 1050 ? 'w-100' : '',
      width <= 770 && 'maxCol',
    ]"
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
    <!-- TODO: hint to chip, not text  -->
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
import { useDisplay } from "vuetify/lib/framework.mjs";

const { width } = useDisplay();

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
.maxCol {
  width: 100%;
  max-width: 140px;
  @media screen and (max-width: 560px) {
    max-width: fit-content;
  }
}

.heightBlock {
  height: 26px;
}
</style>
