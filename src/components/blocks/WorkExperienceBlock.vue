<template>
  <v-row class="fitContent">
    <v-col>
      <h1 class="text-left px-4 text-textFirst bg-second fitContent">
        Work Experience
      </h1>
      <v-card class="header-card cardBlock" dark>
        <v-expansion-panels
          class="ma-2 defaultWidth"
          v-for="job in data"
          :key="job.title"
        >
          <v-expansion-panel hide-actions class="my-1">
            <template #title>
              <v-row>
                <v-col
                  cols="12"
                  class="sizeText h-auto d-flex align-center justify-end"
                >
                  <v-img min-width="30px" height="50px" :src="job.logo" />
                  <div>
                    <h3 class="text-right">{{ job.title }}</h3>
                    <h4 class="text-right my-2">{{ job.place }}</h4>
                  </div>
                </v-col>
                <v-row>
                  <h5 class="mx-auto">{{ job.dates }}</h5>
                </v-row>
              </v-row>
            </template>

            <template #text>{{ job.text }}</template>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-col>
  </v-row>
  <components is="Block" />
</template>

<script setup>
import { onMounted } from "vue";
import { defineComponent } from "vue";

defineProps({
  data: {
    type: Object,
    default: () => {}, // {title,place,dates,text,logo}
  },
});

const Block = defineComponent({
  template: `
          <v-row class="d-flex justify-center align-center mx-0">
            <v-col cols="6">
              <img v-if="data?.img" class="logo" src="/uuniversity.png" />
            </v-col>
            <v-col cols="6">
              <h3>{{ data.title?.toUpperCase() }}</h3>
              <v-card-text> {{ data.text }}</v-card-text>
              <v-card-subtitle> {{ data.date }}</v-card-subtitle>
            </v-col>
          </v-row>`,
});
// onMounted(() => {
//   console.log(this.$vuetify.display.mobile);
//   console.log(this.$vuetify);
// });
</script>

<style lang="scss" scoped>
.logo {
  min-width: 100px;
  max-width: 100%;
}
.defaultWidth {
  min-width: 300px;
  width: 400px;
}
</style>
