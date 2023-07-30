<template>
  <v-row class="fitContent">
    <v-col>
      <h1 class="text-left text-textFirst px-4 bg-second fitContent">Education</h1>
      <v-card
        class="header-card bg-grey border d-flex py-6"
        min-width="300px"
        max-width="600px"
        dark
      >
        <v-row class="d-flex justify-center align-center mx-0">
          <v-col cols="6">
            <img v-if="data?.img" class="logo" src="/uuniversity.png" />
          </v-col>
          <v-col cols="6">
            <h3>{{ data.title.toUpperCase() }}</h3>
            <v-card-text> {{ data.text }}</v-card-text>
            <v-card-subtitle> {{ data.date }}</v-card-subtitle>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
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
