<template>
  <v-card class="heroCard text-second"
    >{{ data.vacancy }}
    <h2>{{ data.name }}</h2>
    <h6>Date of birth: {{ data.birthDate }}</h6>
  </v-card>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    require: true,
  },
});
</script>

<style lang="scss" scoped>
.heroCard {
  margin-top: 100px;
  font-size: 2rem;
  background: rgb(157, 162, 11);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  width: fit-content;
}
</style>
