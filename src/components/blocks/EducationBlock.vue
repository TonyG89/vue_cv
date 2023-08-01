<template>
  <v-row>
    <v-col>
      <h1 class="text-left text-textFirst px-4 bg-second fitContent">
        {{ title }}
      </h1>
      <v-card class="bg-background py-2 smBlock" width="400px">
        <v-card
          class="header-card bg-grey border d-flex py-6 mb-2 mx-auto"
          min-width="300px"
          max-width="380px"
          min-height="180px"
          v-for="institution of data"
          :key="institution.title"
          dark
        >
          <v-row class="d-flex justify-center align-center mx-0">
            <v-col cols="12" lg="4">
              <img
                v-if="institution?.img"
                class="logo ml-4"
                :src="institution.img"
              />
            </v-col>
            <v-col cols="12" lg="8">
              <h3>{{ institution.title.toUpperCase() }}</h3>
              <v-card-text class="text-textSecond">
                {{ institution.text }}</v-card-text
              >
              <v-card-subtitle> {{ institution.date }}</v-card-subtitle>
              <h6 class="text-textThird">{{ institution.place }}</h6>
            </v-col>
          </v-row>
        </v-card>
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
  title: {
    type: String,
    default: "Education",
  },
});
</script>

<style lang="scss" scoped>
.logo {
  min-width: 100px;
  max-width: 100%;
}
</style>
