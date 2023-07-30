<template>
  <v-row class="fitContent">
    <v-col>
      <h1 class="text-left px-4 text-textFirst bg-second fitContent">
        Work Experience
      </h1>
      <v-card class="header-card cardBlock hidden-xs" dark>
        <v-expansion-panels
          class="ma-2 w-auto"
          v-for="job in data"
          :key="job.title"
        >
          <v-expansion-panel hide-actions class="my-1">
            <template #title>
              <v-card
                class="header-card bg-grey border d-flex"
                min-width="300px"
                max-width="600px"
                dark
              >
                <v-row
                  class="height d-flex justify-space-between align-center mx-0"
                >
                  <v-col class="align-self-end" v-if="job?.logo" cols="3">
                    <img class="logo" :src="job.logo" />
                  </v-col>
                  <v-col cols="9" class="align-self-start mt-4 text-right">
                    <h3 class="mb-3">
                      {{ job.title?.toUpperCase() }}
                    </h3>
                    <!-- <div class="justify-space-between d-flex flex-column">
                      <p>company:</p> -->
                    <h4>{{ job.place }}</h4>
                  </v-col>
                  <v-col class="align-self-end">
                    <h6 class="">{{ job.dates }}</h6>
                  </v-col>
                </v-row>
              </v-card>
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
    //   validator: (obj) => {
    //     switch (true) {
    //       case obj.hasOwnProperty("title"):
    //       case obj.hasOwnProperty("place"):
    //       case obj.hasOwnProperty("dates"):
    //       case obj.hasOwnProperty("text"):
    //       case obj.hasOwnProperty("logo"):
    //         return true;
    //       default:
    //         return false;
    //     }
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

.height {
  height: 180px;
}
.defaultWidth {
  min-width: 300px;
  width: 400px;
}
</style>
