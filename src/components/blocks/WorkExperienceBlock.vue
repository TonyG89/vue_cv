<template>
  <TemplateBlock title="Work experience">
    <div class="bg-bgThird bodyBlock d-flex flex-wrap">
      <div
        class="ma-4 w-auto d-flex justify-start"
        v-for="job in data"
        :key="job.title"
      >
        <TimeArrowLine :hidden="width < 950" :dates="job.dates" />

        <v-card class="my-1 pa-2">
          <v-row
            class="height d-flex justify-space-between align-center mx-0"
            @click="flags[job.place] = !flags[job.place]"
          >
            <!-- <v-col class="align-self-end" v-if="job?.logo" cols="3">
                <img class="logo" :src="job.logo" />
              </v-col> -->
            <v-col cols="6" class="align-self-start text-left">
              <div class="d-flex">
                <h3 class="text-textThird">
                  {{ job.title?.toUpperCase() }}
                </h3>
              </div>

              <!-- <div class="justify-space-between d-flex flex-column">
                      <p>company:</p> -->
              <div>
                <h4 class="text-fourth">{{ job.place }}</h4>
                <h5 v-if="job.type" class="text-textThird text-capitalize">
                  <v-icon
                    class="mb-1"
                    :icon="`mdi-${
                      job.type === 'product' ? 'cart' : 'account-group'
                    }`"
                    size="18"
                  />
                  {{ job.type }}
                </h5>
              </div>
            </v-col>
            <v-col cols="3" class="text-right mb-auto">
              <h5 class="text-textThird">
                {{ job.during }}
              </h5>
              <h6 class="mt-2 text-textThird justify-self-end">
                {{ job.location }}
              </h6></v-col
            >
            <v-divider />

            <v-col class="text-left">
              <p style="text-indent: 15px" class="textJustify">
                {{ job.text }}
              </p>
              <v-divider class="my-2" />
              <!-- TAGS -->
              <v-chip
                v-for="(skill, ind) of job.skills?.split(', ')"
                :key="ind"
                color="textThird"
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
  </TemplateBlock>
  <components is="Block" />
</template>

<script setup>
import TemplateBlock from "@/components/ui/BlockTemplate.vue";
import TimeArrowLine from "@/components/entities/TimeArrowLine.vue";
import { reactive, onMounted } from "vue";
import { defineComponent } from "vue";
import { experience } from "@/data";
import { useDisplay } from "vuetify";

const { width, mobile } = useDisplay();

onMounted(() => {
  width.value < 950 && console.log(width.value);
});

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

.defaultWidth {
  // min-width: 300px;
  // max-width: 400px;
  width: 400px;
}
</style>
