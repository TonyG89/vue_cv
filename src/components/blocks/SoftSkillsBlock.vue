<template>
  <SideBlockTemplate v-show="width > 770" :title="title">
    <v-tooltip v-if="group" activator="parent" location="right">
      {{ group.desc }}
    </v-tooltip>
    <v-chip
      v-for="skill in skills"
      :key="skill.title"
      class="mr-1 my-1 boldAnimate"
    >
      {{ skill.title.toUpperCase() }}
    </v-chip>
  </SideBlockTemplate>
  <BlockTemplate v-show="width < 770" :title="title">
    <div class="bg-bgFirst ">
      <v-tooltip v-if="group" activator="parent" location="right">
        {{ group.desc }}
      </v-tooltip>
      <v-chip
        v-for="skill in skills"
        :key="skill.title"
        class="mr-1 my-1 boldAnimate"
      >
        {{ skill.title.toUpperCase() }}
      </v-chip>
    </div>
  </BlockTemplate>
</template>

<script setup>
import SideBlockTemplate from "@/components/ui/SideBlockTemplate.vue";
import BlockTemplate from "@/components/ui/BlockTemplate.vue";
import { ref, onMounted } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
const { width } = useDisplay();

const props = defineProps({
  title: {
    type: String,
    request: false,
  },
  skills: {
    type: Array,
    default: () => [], //[[{title, hint, rate, started, icon}]]
  },
});
</script>

<style lang="scss" scoped></style>
