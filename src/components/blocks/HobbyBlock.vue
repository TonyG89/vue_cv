<template>
  <BlockTemplate :title="title">
    <v-container
      fluid
      class="d-flex flex-wrap secondFont mr-2"
      :class="[
        width < 1250 && 'mobWidth',
        width <= 770 ? 'bg-bgFirst' : 'bg-bgThird',
      ]"
    >
      <ChipTemplate textColor="text-bgSecond" :chips="data" />
    </v-container>
  </BlockTemplate>
</template>

<script setup>
import BlockTemplate from "../ui/BlockTemplate.vue";
import ChipTemplate from "../ui/ChipTemplate.vue";
import { ref, reactive, computed, watch } from "vue";
import { addMethodToObject } from "@/helper";
import { useDisplay } from "vuetify";

const { width, mobile } = useDisplay();
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

// watch(width, console.log(width));
</script>

<style lang="scss" scoped>
.v-container {
  width: 100%;
  @media screen and (max-width: 770px) {
    padding: 0;
    margin-left: -8px;
  }
}
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
