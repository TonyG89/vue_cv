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
            <div class="ma-10 d-flex fitContent">
              <div class="pa-4 img rounded-e-sm bg-first heightBlock">
                <v-icon :icon="`mdi-${item.icon}`" size="120"> </v-icon>
              </div>
              <div
                class="bg-red heightBlock d-flex align-center px-4 text-decoration-underline text-high-emphasis"
                :style="{ width: '300px' }"
              >
                <h1 c>
                  {{ item.title?.toUpperCase() }}
                </h1>
              </div>
              <v-tooltip v-if="item.hint" activator="parent" location="right">
                <h2
                  style="
                     {
                      font-size: 30px;
                    }
                  "
                >
                  {{ item.hint }}
                </h2>
              </v-tooltip>
            </div>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
defineProps({
  title: String,
  data: {
    type: Object, // {title,hint}
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

.heightBlock {
  height: 160px;
  border: 2px solid black;
}
</style>
