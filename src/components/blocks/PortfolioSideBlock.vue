<template>
  <SideBlockTemplate :title="title">
    <div class="d-flex justify-center w-100">
      <v-btn
        class="bg-bgFirst portfolio align-end animate"
        href="https://tonyg89.github.io/portfolio/"
        target="_blank"
      >
        <div class="textblockBottom d-flex text-textSecond">
          <h3 class="mb-2">Click Here</h3>
        </div>
      </v-btn>
    </div>
  </SideBlockTemplate>
</template>

<script setup>
import SideBlockTemplate from "@/components/ui/SideBlockTemplate.vue";
</script>

<style lang="scss" scoped>
.portfolio {
  margin: -8px 0;
  height: 130px !important;
  background: url("/port.jpg");
  background-position-y: -20px;
  background-size: cover;
  transition: all 1.5s ease-out;
  &:hover {
    transform: scale(1.1);
    transform-box: fill-box;
  }
}
</style>
