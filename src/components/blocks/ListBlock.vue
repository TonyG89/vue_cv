<template>
  <v-row>
    <v-col>
      <h1 class="text-left text-textFirst px-4 bg-second fitContent">
        {{ title }}
      </h1>
      <v-card class="header-card fitContent" dark>
        <v-list class="bgOpacity d-flex flex-wrap justify-center">
          <v-list-item
            v-for="item in data"
            :key="item.title"
            min-width="300px"
            active-color="black"
          >
            <button
              class="animate ma-4  d-flex fitContent"
              @click="flags[item.title] = !flags[item.title]"
            >
              <div class="pa-1 img rounded-e-sm bg-bgSecond heightBlock">
                <v-icon :icon="`mdi-${item.icon}`" size="60" class="mt-4 mx-3">
                </v-icon>
              </div>
              <div
                class="bg-bgThird heightBlock w300 d-flex align-center px-4 text-decoration-underline text-high-emphasis"
              >
                <h1 c>
                  {{ item.title?.toUpperCase() }}
                </h1>
              </div>

              <v-expand-transition>
                <v-card
                  v-show="flags[item.title]"
                  height="100"
                  width="300"
                  class="mx-auto bg-secondary pr-4 rounded-0"
                  :text="item.desc"
                />
              </v-expand-transition>
              <!-- <v-tooltip v-if="item.desc" activator="parent" location="right">
                <h2
                class='w300'
                >
                  {{ item.desc }}
                </h2>
              </v-tooltip> -->
            </button>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

const flags = reactive({});

flags.value = props.data?.reduce((acc, obj) => {
  if (obj.hasOwnProperty("title")) {
    acc[obj.title] = !false;
  }
  return acc;
}, {});

const hidden = computed(() => flags);

const onHide = (flag) => {
  console.log(flag.value);
  // flags.flag = !flags.flag;
};

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

.w300 {
  width: 300px;
}

.heightBlock {
  height: 100px;
  border: 1px solid rgb(119, 119, 119);
}
</style>
