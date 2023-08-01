<template>
  <v-row>
    <v-col>
      <h1 class="text-left text-textFirst px-4 bg-second fitContent">
        {{ title }}
      </h1>
      <v-card class="header-card fitContent smBlock" dark>
        <v-list class="bgOpacity d-flex flex-wrap justify-center">
          <v-list-item
            v-for="item in data"
            :key="item.title"
            min-width="300px"
            active-color="black"
          >
            <div
              class="animate ma-4 d-flex"
              @click="flags[item.title] = !flags[item.title]"
            >
              <div
                class="bg-bgThird heightBlock weightBlock d-flex justify-end align-center px-4 text-decoration-underline text-high-emphasis"
              >
                <h3>
                  {{ item.title?.toUpperCase() }}
                </h3>
              </div>
              <div class="pa-1 img rounded-s-sm bg-bgSecond heightBlock">
                <v-icon
                  :icon="`mdi-${item.icon}`"
                  size="30"
                  class="mt-2 mx-1 mr-2 icon"
                >
                </v-icon>
              </div>
              <!-- <v-tooltip v-if="item.desc" activator="parent" location="right">
                <h2
                class='w300'
                >
                  {{ item.desc }}
                </h2>
              </v-tooltip> -->
            </div>
            <v-expand-transition>
              <v-card
                v-show="flags[item.title]"
                min-height="10"
                width="180"
                border
                class="hint bg-secondary weightBlock rounded-0"
                :text="item.desc"
              />
            </v-expand-transition>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

const flags = reactive({});

// TODO: CREATE HELPER
flags.value = props.data?.reduce((acc, obj) => {
  if (obj.hasOwnProperty("title")) {
    acc[obj.title] = false;
  }
  return acc;
}, {});

const props = defineProps({
  title: String,
  data: {
    type: Array, // [{title,icon,desc}]
    require: true,
  },
});
</script>

<style lang="scss" scoped>
.img {
  padding: 40px;
  border-radius: 50%;
  margin-right: -10px;
}

.weightBlock {
  width: 180px;
}

.hint {
  margin-left: 16px;
  margin-top: -21px;
  z-index: -1;
}

.heightBlock {
  height: 50px;
  border: 1px solid rgb(119, 119, 119);
}
</style>
