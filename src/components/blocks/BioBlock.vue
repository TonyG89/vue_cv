<template>
  <TemplateBlock title="biography">
    <v-list
      class="text-left static my-auto"
      :class="width <= 770 ? 'bg-bgFirst pl0' : 'bg-bgThird '"
    >
      <v-list-item v-if="typeof data.text === 'string'">
        <p style="text-indent: 15px" class="textJustify">{{ data.text }}</p>
      </v-list-item>
      <v-list-item v-else v-for="par of data.text" :key="par"
        ><p style="text-indent: 15px" class="textJustify">{{ par }}</p>
      </v-list-item>
    </v-list>
  </TemplateBlock>
</template>

<script setup>
import { computed } from "vue";
import TemplateBlock from "@/components/ui/BlockTemplate.vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
const { width } = useDisplay();

defineProps({
  data: {
    type: Object,
    default: () => {}, // {title,text,date,img}
  },
});
</script>

<style lang="scss" scoped>
.pl0 {
  margin-left: -16px;
}
.logo {
  min-width: 100px;
  max-width: 100%;
}
</style>
