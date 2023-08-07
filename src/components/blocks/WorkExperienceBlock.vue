<template>
  <TemplateBlock>
    <v-card class="header-card hidden-xs" dark>
      <div class="ma-2 w-auto" v-for="job in data" :key="job.title">
        <div class="d-flex justify-start w-150">
          <TimeArrowLine :dates="job.dates" />

          <v-card class="my-1 pa-2">
            <v-row
              class="height d-flex justify-space-between align-center mx-0"
              @click="flags[job.place] = !flags[job.place]"
            >
              <v-col class="align-self-end" v-if="job?.logo" cols="3">
                <img class="logo" :src="job.logo" />
              </v-col>
              <v-col cols="6" class="align-self-start text-left">
                <div class="d-flex">
                  <h3 class="text-textThird">
                    {{ job.title?.toUpperCase() }}
                  </h3>
                </div>

                <!-- <div class="justify-space-between d-flex flex-column">
                      <p>company:</p> -->
                <div>
                  <h4 class="text-textFirst">{{ job.place }}</h4>
                  <h6 v-if="job.type" class="text-textFirst">
                    <v-icon
                      class=""
                      :icon="`mdi-${
                        job.type === 'product' ? 'cart' : 'account-group'
                      }`"
                      size="15"
                    />
                    {{ job.type }}
                  </h6>
                </div>
              </v-col>
              <v-col cols="3" class="text-right mb-auto">
                <h5 class="text-third">
                  {{ job.during }}
                </h5>
                <h6 class="mt-2 text-third justify-self-end">
                  {{ job.location }}
                </h6></v-col
              >
              <v-divider />

              <v-col class="text-left">
                {{ job.text }}
                <v-divider class="my-2" />
                <!-- TAGS -->
                <v-chip
                  v-for="(skill, ind) of job.skills?.split(', ')"
                  :key="ind"
                  color="second"
                  label
                  size="small"
                  class="ma-1"
                  >{{ skill }}</v-chip
                ></v-col
              >
            </v-row>
          </v-card>
        </div>
      </div>
    </v-card>
  </TemplateBlock>
  <components is="Block" />
</template>

<script setup>
import TemplateBlock from "@/components/ui/BlockTemplate.vue";
import TimeArrowLine from "@/components/entities/TimeArrowLine.vue";
import { reactive } from "vue";
import { defineComponent } from "vue";

const flags = reactive({});

// TODO: CREATE HELPER
// flags.value = props.data?.reduce((acc, obj) => {
//   if (obj.hasOwnProperty("place")) {
//     acc[obj] = false;
//   }
//   return acc;
// }, {});

const props = defineProps({
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
  width: 100px;
}

.height {
  height: auto;
}
.defaultWidth {
  // min-width: 300px;
  // max-width: 400px;
  width: 400px;
}
</style>
