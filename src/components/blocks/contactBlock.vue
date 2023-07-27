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
            <v-icon class="pr-2"> mdi-{{ contact.icon }} </v-icon>
            <v-icon icon="fa:fas fa-search"> fa-{{ contact.icon }} </v-icon>
            <v-icon class="pr-2"> telegram </v-icon>
            <v-icon class="pr-2"> {{ telegramSvg }} </v-icon>
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
