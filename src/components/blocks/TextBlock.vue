<template>
  <v-row>
    <v-col cols="12">
      <v-card class="header-card" dark>
        <h1 class="text-left pl-4">{{ title }}</h1>
        <v-list lines="one">
          <v-list-item
            v-if="Array.isArray(data)"
            v-for="item in data"
            :key="item.title"
            :title="item.title"
            :subtitle="item.text"
            :text="item.text"
          >
            {{ item.title }}
          </v-list-item>
          <div v-else>
            {{ data.title }}'rrrr'
          </div>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
defineProps({
  title: String,
  data: {
    type: Object, // {title,description}
    require: true,
  },
});
</script>

<style lang="scss" scoped></style>
