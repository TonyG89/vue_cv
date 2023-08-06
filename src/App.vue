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
import SideBlock from "@/components/SideBlock.vue";
import VisitCounter from "@/services/VisitCounter.vue";
</script>

<style lang="scss">
:root {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  /* font-family:'Times New Roman', Times, serif; */
  /* font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-family: Tahoma;
  font-family: monospace;
  font-family: cursive;
  font-family: Arial, Helvetica, sans-serif;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

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

a {
  text-decoration: none;
  color: var(--v-test-1-base);
}
</style>
