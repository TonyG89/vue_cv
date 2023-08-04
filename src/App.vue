<template>
  <v-app class="wrapper">
    <div class="d-flex">
      <SideBlock />
      <Main />
    </div>
    <v-footer>'copyleft (C)'</v-footer>
  </v-app>
</template>

<script setup>
import Main from "@/components/Main.vue";
import SideBlock from "./components/SideBlock.vue";
</script>

<style>
.bgImg {
  background-image: url("/bg.svg");
  background-size: cover;
  background-position: center;
  min-height: 300px; /* Установите высоту контейнера */
}

.bgOpacity {
  background: rgba(0, 0, 0, 0);
}

.fitContent {
  width: fit-content;
}

.smBlock {
  max-width: 400px;
}

.lgBlock {
  max-width: 600px;
}

.sizeText {
  font-size: 1.2rem;
}

.cardSize {
  /* max-height: 160px; */
  /* width: fit-content; */
  min-width: 300px;
  /* width: 300px; */
  background: red;
}

.blockWidth {
  width: 300px;
}

/* !FIXED: */
.minWidth {
  width: 100px !important;
}

.wrapper {
  display: flex;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: var(--v-test-1-base);
}
</style>
