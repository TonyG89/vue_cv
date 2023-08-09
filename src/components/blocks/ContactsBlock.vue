<template>
  <SideBlockTemplate title="Contacts">
    <v-card-text class="pa-0 secondFont font-italic">
      <v-list-item
        class="d-flex flex-col justify-start align-start pa-0 my-2 animate"
        v-for="contact in contacts.filter((contact) => contact.value)"
        :key="contact.title"
        density
      >
        <a
          :href="
            contact.title === 'tg'
              ? contact.link
              : contact.link + ':' + contact.value
          "
          target="_blank"
          class="d-flex text-textFirst"
        >
          <v-icon class="mr-2 w-20">
            <template v-if="contact.icon === 'telegram'">
              <iTelegram />
            </template>
            <template v-else> mdi-{{ contact.icon }} </template>
          </v-icon>
          <v-list-item-title class="hover">
            {{ contact.value }}
          </v-list-item-title>
        </a>
      </v-list-item>

      <div class="d-flex justify-space-between">
        <v-list-item
          v-for="contact in contacts.filter((contact) => !contact.value)"
          :key="contact.title"
          class="px-0 opa"
        >
          <v-chip style="width: 100px" class="hover">
            <a
              :href="contact.link"
              class="text-textFirst d-flex"
              target="_blank"
            >
              <v-icon class="mr-1" size="20"> mdi-{{ contact.icon }}</v-icon>
              <h5 class="text-uppercase">{{ contact.title }}</h5></a
            >
          </v-chip>
        </v-list-item>
      </div>
    </v-card-text>
  </SideBlockTemplate>
</template>

<script setup>
import iTelegram from "../icons/iTelegram.vue";
import SideBlockTemplate from "../ui/SideBlockTemplate.vue";

const props = defineProps({
  contacts: {
    type: Array,
    default: () => [], //[{value, icon}]
  },
});
console.log(props.contacts);
</script>

<style lang="scss" scoped>
a {
  :hover {
  }
}
.v-list-item {
}
</style>
