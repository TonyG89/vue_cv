<template>
  <SideBlockTemplate title="Contacts">
    <v-card-text class="pa-0">
      <v-list-item
        class="d-flex flex-col pa-0 animate"
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
          class="d-flex text-textFirst font-weight-bold"
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
            <a :href="contact.link" class="text-textFirst" target="_blank">
              <v-icon class="mr-2 w-20"> mdi-{{ contact.icon }}</v-icon
              >{{ contact.title }}</a
            >
          </v-btn>
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

<style lang="scss"></style>
