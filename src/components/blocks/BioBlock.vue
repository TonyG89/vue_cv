<template>
  <TemplateBlock title="biography">
    <v-list
      class="text-left static my-auto pa-4"
      :class="width <= 770 ? 'bg-bgFirst pl0' : 'bg-bgThird '"
    >
      <p
        v-if="typeof data.text === 'string'"
        style="text-indent: 15px"
        class="textJustify my-0 p-0"
      >
        {{ data.text }}
      </p>
      <p
        v-else
        v-for="par of data.text"
        :key="par"
        style="text-indent: 15px"
        class="textJustify my-0 py-1"
        >{{ par }}
      </p>
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
p{
  font-weight: 500;
}
.logo {
  min-width: 100px;
  max-width: 100%;
}
</style>
