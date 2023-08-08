<template>
  <TemplateBlock title="biography">
    <v-list class="text-left bg-bgThird static my-auto " w-100>
      <v-list-item v-if="typeof data.text === 'string'">
        {{ data.text }}
      </v-list-item>
      <v-list-item v-else v-for="par of data.text" :key="par"
        ><p style="text-indent: 15px;" class="textJustify">{{ par }}</p>
        </v-list-item
      >
    </v-list>
  </TemplateBlock>
</template>

<script setup>
import { computed } from "vue";
import TemplateBlock from "@/components/ui/BlockTemplate.vue";

defineProps({
  data: {
    type: Object,
    default: () => {}, // {title,text,date,img}
  },
});
</script>

<style lang="scss" scoped>
.logo {
  min-width: 100px;
  max-width: 100%;
}

</style>
