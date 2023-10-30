<template>
  <SideBlockTemplate v-show="width > 770" title="Contacts">
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

      <!-- <div class="d-flex justify-space-between">
        <v-list-item
          v-for="contact in contacts.filter((contact) => !contact.value)"
          :key="contact.title"
          class="px-0"
        >
          <v-chip label style="width: 120px" class="hover py-4">
            <a
              :href="contact.link"
              class="text-textFirst d-flex pl-3"
              target="_blank"
            >
              <v-icon class="mr-1" size="20"> mdi-{{ contact.icon }}</v-icon>
              <h5 class="text-uppercase">{{ contact.title }}</h5></a
            >
          </v-chip>
        </v-list-item>
      </div> -->
    </v-card-text>
  </SideBlockTemplate>
  <BlockTemplate v-show="width <= 770" title="Contacts">
    <v-card-text
      class="bg-bgFirst bodyBlock d-flex flex-wrap blockWidth"
      :class="width > 770 && 'secondFont font-italic'"
    >
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

      <!-- <div class="d-flex flex-wrap justify-start w-100">
        <v-list-item
          v-for="contact in contacts.filter((contact) => !contact.value)"
          :key="contact.title"
          class="px-0"
        >
          <v-chip label style="width: 100px" class="hover py-4 mr-4">
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
      </div> -->
    </v-card-text>
  </BlockTemplate>
</template>

<script setup>
import iTelegram from "../icons/iTelegram.vue";
import SideBlockTemplate from "../ui/SideBlockTemplate.vue";
import BlockTemplate from "../ui/BlockTemplate.vue";
import { ref, onMounted } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";

const { width } = useDisplay();

const props = defineProps({
  contacts: {
    type: Array,
    default: () => [], //[{value, icon}]
  },
});

// onMounted(() => {
//   flagMainBlock.value = window.outerWidth < 770;
// });
</script>

<style lang="scss" scoped>
a {
  :hover {
  }
}

.blockWidth {
  width: 100%;
  max-width: 325px;
  @media screen and (max-width: 770px) {
    margin-left: -16px;
  }
}

.minusMargin {
  margin-left: 10px;
  margin-right: 10px;
}
.v-list-item:first-child {
  margin-right: 2px;
}
</style>
