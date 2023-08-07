<template>
  <BlockTemplate :title="title">
    <div
      class="d-flex flex-wrap justify-start"
      v-for="item in data"
      :key="item.title"
      active-color="black"
    >
      <div
        class="animate ma-4 d-flex"
        @click="flags[item.title] = !flags[item.title]"
      >
        <div class="pa-1 img rounded-e-sm bg-bgSecond heightBlock">
          <v-icon
            :icon="`mdi-${item.icon}`"
            size="16"
            class="mb-3 mr-2 icon"
          >
          </v-icon>
        </div>
        <div
          class="bg-bgFirst d-flex justify-start align-center px-1 text-decoration-underline text-high-emphasis"
        >
          <h5 class="">
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
      </div>
    </div>
  </BlockTemplate>
</template>

<script setup>
import BlockTemplate from "../ui/BlockTemplate.vue";
import { ref, reactive, computed } from "vue";
import { addMethodToObject } from "@/helper";
const flags = reactive({});

// TODO: CREATE HELPER
// flags.value = addMethodToObject(props.data, "title");

const props = defineProps({
  title: String,
  data: {
    type: Array, // [{title,icon,desc}]
    require: true,
  },
});
</script>

<style lang="scss" scoped>
.img {
  padding: 40px;
  border-radius: 50%;
  margin-right: -10px;
}

.weightBlock {
  width: 180px;
  border: black 2px solid;
}

.hint {
  width: 300px;
  text-shadow: 1px 1px 2px black;
}

.heightBlock {
  height: 26px;
  border: 1px solid rgb(119, 119, 119);
}

.tooltip {
}
</style>
