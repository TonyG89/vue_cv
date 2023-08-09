<template>
  <BlockTemplate :title="title">
    <v-container class="d-flex flex-wrap justify-start secondFont">
      <ChipTemplate textColor="text-bgSecond" :chips="data" />
    </v-container>
  </BlockTemplate>
</template>

<script setup>
import BlockTemplate from "../ui/BlockTemplate.vue";
import ChipTemplate from "../ui/ChipTemplate.vue";
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
.weightBlock {
  width: 180px;
  border: black 2px solid;
}

.hint {
  width: 300px;
  text-shadow: 1px 1px 2px black;
}

.tooltip {
}
</style>
