<template>
  <SideBlockTemplate :title="title">
    <div
      v-for="institution of data"
      class="text-left block"
      :class="`${data.at(-1) === institution ? '' : 'mb-6'}`"
      :key="institution.title"
    >
      <h6 class="text-first">
        {{ institution.date }}
      </h6>
      <h4 class="text-second text-uppercase">{{ institution.text }}</h4>
      <h6 class="text-textFirst">
        {{ institution.title.toUpperCase() }}
      </h6>

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
}
</style>
