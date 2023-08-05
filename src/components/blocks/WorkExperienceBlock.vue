<template>
  <v-row class="fitContent">
    <v-col>
      <h1 class="text-left px-4 text-textFirst bg-second fitContent">
        Work Experience
      </h1>
      <v-card class="header-card hidden-xs lgBlock" width="600px" dark>
        <div class="ma-2 w-auto" v-for="job in data" :key="job.title">
          <div class="d-flex justify-space-around w-150">
            <!-- TIMELINE  -->
            <div class="text-third d-flex flex-column justify-center">
              <h6>{{ job.dates[1] }}</h6>
              <div class="dot"></div>
              <h6>{{ job.dates[0] }}</h6>
            </div>

            <v-card class="my-1 pa-2 defaultWidth ">
              <v-row
                class="height d-flex justify-space-between align-center mx-0"
                @click="flags[job.place] = !flags[job.place]"
              >
                <v-col class="align-self-end" v-if="job?.logo" cols="3">
                  <img class="logo" :src="job.logo" />
                </v-col>
                <v-col
                  cols="9"
                  class="align-self-start text-right d-flex flex-column"
                >
                  <h3>
                    {{ job.title?.toUpperCase() }}
                  </h3>
                  <h5 class="text-third">
                    {{ job.during }}
                  </h5>
                  <!-- <div class="justify-space-between d-flex flex-column">
                      <p>company:</p> -->
                  <h4>{{ job.place }}</h4>
                  <h6 v-if="job.type">
                    <v-icon
                      class=""
                      :icon="`mdi-${
                        job.type === 'product' ? 'cart' : 'account-group'
                      }`"
                      size="15"
                    />
                    {{ job.type }}
                  </h6>
                  <h6 class="mt-2 text-third justify-self-end">
                    {{ job.location }}
                  </h6>
                </v-col>
                <v-divider v-if="flags[job.place]" />
                <v-col class="text-left">
                  <v-expand-transition>
                    <div v-show="flags[job.place]">
                      {{ job.text }}
                    </div>
                  </v-expand-transition>
                  <v-divider class="my-2" v-if="flags[job.place]" />

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
    </v-col>
  </v-row>
  <components is="Block" />
</template>

<script setup>
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
  max-width: 100%;
}

.height {
  height: auto;
}
.defaultWidth {
  // min-width: 300px;
  // max-width: 400px;
  width: 400px;
}

.dot {
  background: #e04b4b;
  width: 3px;
  align-self: center;
  margin: 0 auto;
  height: 100%;
  background-image: url(https://i.etsystatic.com/10919371/r/il/f209ce/4359772424/il_600x600.4359772424_6779.jpg);
  background-size: cover;
}
</style>
