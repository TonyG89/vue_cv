<template>
  <SideBlockTemplate :title="title">
    <div
      v-for="institution of data"
      class="text-left block "
      :class="`${data.at(-1) === institution ? '' : 'mb-4'}`"
      :key="institution.title"
    >
      <h6 class="text-textSecond text-center bg-bgSecond ">
        {{ institution.date }}
      </h6>
      <h6 class="text-textFirst bg-bgThird pa-2">
        {{ institution.title }}
      </h6>
      <h4 class="text-textThird" v-if="institution.text">
        {{ institution.text }}
      </h4>
      <!-- <h6 class="text-textThird">{{ institution.place }}</h6> -->
    </div>
  </SideBlockTemplate>
</template>

<script setup>
import { languages } from "@/data";
import "country-flag-icons";
import SideBlockTemplate from "../ui/SideBlockTemplate.vue";
import EducationBlock from "./EducationBlock.vue";

defineProps({
  data: {
    type: Object,
    default: () => {}, // {title,text,date,img}
  },
  title: {
    type: String,
    default: "Education",
  },
});
</script>

<style lang="scss" scoped>
h4 {
  line-height: 0.9rem;
  padding: 8px;
  font-size: 0.75rem;
  font-style: italic;
  font-weight: 400;
  border-bottom: rgb(var(--v-theme-bgThird)) 2px solid;
  border-left: rgb(var(--v-theme-bgThird)) 2px solid;
  border-right: rgb(var(--v-theme-bgThird)) 2px solid;
}
.hint {
  width: 200px;
}
.bb {
  border-bottom: black 2px dotted;
}
.logo {
  width: 50px;
}

.block {
  margin: 0 -5px;
  padding: 0 5px;
}
</style>
