<template>
  <TemplateBlock :title="title">
    <div
      class="bodyBlock cont d-flex flex-wrap"
      :class="width <= 770 ? 'bg-bgFirst' : 'bg-bgThird'"
    >
      <v-card
        class="d-flex justify-space-between"
        :class="width <= 770 ? 'my-2' : 'ma-4'"
        v-for="institution of data.reverse()"
        :key="institution.title"
        dark
      >
        <v-card-text
          class="d-flex flex-column justify-space-between widthBlock"
        >
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
import { useDisplay } from "vuetify/lib/framework.mjs";
const { width } = useDisplay();
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
.cont {
  width: 100%;
  @media screen and (max-width: 1250px) {
    max-width: 402px;
  }
  @media screen and (max-width: 1050px) {
    max-width: 999px;
  }
  @media screen and (max-width: 770px) {
    max-width: 402px;
  }
}
.widthBlock {
  width: 370px;
  @media screen and (max-width: 420px) {
    width: 327px;
  }
}
.bgLine {
  background: rgba(var(--v-theme-bgThird), 0.6);
  margin: 8px -16px 3px;
  padding-left: 16px;
}
</style>
