<template>
  <v-card class="side-menu-card">
    <v-img :src="photoUrl" height="200"></v-img>
    <v-card-text class="pa-0">
      <v-list>
        <v-list-item
          class="d-flex flex-col pa-0"
          v-for="contact in contacts"
          :key="contact.title"
        >
          <a
            :href="`${contact.link || contact.title}:${contact.value}`"
            target="_blank"
            class="d-flex text-first font-weight-bold"
          >
            <v-icon class="mr-2 w-20">
              <template v-if="contact.icon === 'telegram'">
                <iTelegram />
              </template>
              <template v-else> mdi-{{ contact.icon }} </template>
            </v-icon>
            <v-list-item-title class="font-weight-bold">
              {{ contact.value }}
            </v-list-item-title>
          </a>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup>
import iTelegram from "../iTelegram.vue";
const photoUrl = "./me.jpg";

const props = defineProps({
  photoUrl: {
    type: String,
    default: "@/me.jpg",
  },
  contacts: {
    type: Array,
    default: () => [], //[{value, icon}]
  },
});
console.log(props.contacts);
</script>

<style lang="scss" scoped></style>
