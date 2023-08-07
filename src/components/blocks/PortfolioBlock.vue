<template>
  <BlockTemplate :title="title">
    <div class="d-flex justify-center w-100">
      <v-btn
        class="bg-bgFirst my-10 portfolio animate bg-green"
        href="https://tonyg89.github.io/portfolio/"
        target="_blank"
      >
        <div class="textblockBottom d-flex text-textFirst">
          <v-icon class="mr-1 pb-1" size="x-large"
            >mdi-book-open-blank-variant</v-icon
          >
          <h3>View My Portfolio</h3>
        </div>
      </v-btn>
    </div></BlockTemplate
  >
</template>

<script setup>
import BlockTemplate from "@/components/ui/BlockTemplate.vue";
</script>

<style lang="scss" scoped>
.portfolio {
  height: 200px !important;
  align-content: center;
  transition: all 1.5s ease-out;
  transform: scale(1.4);
  width: 100%;
  &:hover {
    transform: scale(2);
    transform-box: fill-box;
  }
}
</style>
