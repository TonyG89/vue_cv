<template>
  <TemplateBlock :title="title">
    <div class="d-flex justify-space-between">
      <v-card
        class="ma-4 d-flex justify-space-between"
        max-width="370"
        width="370"
        min-width="180"
        v-for="institution of data"
        :key="institution.title"
        dark
      >
        <v-card-text class="d-flex flex-column justify-space-between">
          <div>
            <h3 class="text-textThird mb-1" style="white-space: pre-wrap">
              {{ institution.title.toUpperCase() }}
            </h3>
            <h4 v-if="institution.text" class="text-textFirst">
              {{ institution.text }}
            </h4>
          </div>
          <div>
            <h4 class="bgLine">{{ institution.date }}</h4>
            <h5 class="text-textThird">{{ institution.place }}</h5>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </TemplateBlock>
</template>

<script setup>
import TemplateBlock from "@/components/ui/BlockTemplate.vue";

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
.logo {
  min-width: 100px;
  max-width: 100%;
}

.bgLine {
  background: rgba(var(--v-theme-bgThird), 0.6);
  margin: 8px -16px 3px;
  padding-left: 16px;
}
</style>
