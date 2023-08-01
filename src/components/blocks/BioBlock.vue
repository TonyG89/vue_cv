<template>
  <v-row class="fitContent">
    <v-col>
      <h1 class="text-left text-textFirst px-4 bg-second fitContent">
        Biography
      </h1>
      <v-card
        class="header-card border d-flex"
        min-width="300px"
        max-width="600px"
        dark
      >
        <v-list class="text-left bg-bgThird static my-auto" w-100>
          <v-list-item v-if="typeof data.text === 'string'">
            {{ data.text }}
          </v-list-item>
          <v-list-item v-else v-for="par of data.text" :key="par"
            ><p>{{ par }}</p></v-list-item
          >
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { computed } from "vue";

defineProps({
  data: {
    type: Object,
    default: () => {}, // {title,text,date,img}
  },
});
</script>

<style lang="scss" scoped>
.logo {
  min-width: 100px;
  max-width: 100%;
}
</style>
