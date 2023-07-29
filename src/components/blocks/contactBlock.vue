<template>
  <v-card class="side-menu-card">
    <v-img :src="photoUrl" height="200"></v-img>
    <v-card-text class="pa-0">
      <v-list>
        <v-list-item
          class="d-flex flex-col pa-0"
          v-for="contact in contacts.filter((contact) => contact.value)"
          :key="contact.title"
        >
          <a
            :href="
              contact.title === 'tg'
                ? contact.link
                : contact.link + ':' + contact.value
            "
            target="_blank"
            class="d-flex text-first font-weight-bold"
          >
            <v-icon class="mr-2 w-20">
              <template v-if="contact.icon === 'telegram'">
                <iTelegram />
              </template>
              <template v-else> mdi-{{ contact.icon }} </template>
            </v-icon>
            <v-list-item-title class="font-weight-bold hover">
              {{ contact.value }}
            </v-list-item-title>
          </a>
        </v-list-item>

        <div class="d-flex justify-space-between">
          <v-list-item
            v-for="contact in contacts.filter((contact) => !contact.value)"
            :key="contact.title"
            class="px-0"
          >
            <v-btn style="width: 120px" class="hover">
              <a :href="contact.link" class="text-first" target="_blank">
                <v-icon class="mr-2 w-20"> mdi-{{ contact.icon }}</v-icon
                >{{ contact.title }}</a
              >
            </v-btn>
          </v-list-item>
        </div>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup>
import iTelegram from "../iTelegram.vue";

const props = defineProps({
  photoUrl: {
    type: String,
    default: "./me.jpg",
  },
  contacts: {
    type: Array,
    default: () => [], //[{value, icon}]
  },
});
console.log(props.contacts);
</script>

<style lang="scss">
.hover {
  &:hover {
    background-color: var(--v-second-base);

    & a {
      transition: all 0.3s ease;
      transform: scale(1.1);
    }
    & v-list-item-title {
      transition: all 0.3s ease;
      transform: scaleX(10deg);
    }
  }
}
</style>
