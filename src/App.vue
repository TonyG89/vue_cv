<template>
  <v-app>
          <SideBlock />
          <Main />
  </v-app>
</template>

<script setup>
import Main from "@/components/Main.vue";
import SideBlock from "./components/SideBlock.vue";
</script>

<style>
.wrapper {
  display: flex;
  height: 100vh;
  overflow: hidden;
  background: red;
}

a{
  text-decoration: none;
  color:  var(--v-test-1-base);
}


</style>
