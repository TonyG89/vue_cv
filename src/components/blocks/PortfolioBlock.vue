<template>
  <BlockTemplate :title="title">
    <div
      class="d-flex  w-100 minWidthBlock"
      :class="width <= 770 ? 'bg-bgFirst justify-start' : 'bg-bgThird justify-center'"
      >
      <v-btn
      class="bg-bgFirst portfolio align-end animate "
      :class="width <= 770 ? 'my-2' : 'my-6'"
        href="https://tonyg89.github.io/portfolio/"
        target="_blank"
      >
        <div class="d-flex text-textSecond">
          <h3 class="mb-2">Click Here</h3>
        </div>
      </v-btn>
    </div>
  </BlockTemplate>
</template>

<script setup>
import BlockTemplate from "@/components/ui/BlockTemplate.vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
const { width } = useDisplay();
</script>

<style lang="scss" scoped>
.minWidthBlock {
  min-width: 325px;
}
.portfolio {
  // margin: -8px 0;
  height: 145px !important;
  background: url("/port.jpg");
  background-position-y: -20px;
  background-size: cover;
  transition: all 1.5s ease-out;
  &:hover {
    // transform: scale(1.1);
    transform-box: fill-box;
  }
}
</style>
