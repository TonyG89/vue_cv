<template>
  <v-app class="wrapper">
    <HeroBlock />
    <div class="d-flex">
      <SideBlock class="afterHeader" />
      <Main class="afterHeader" />
    </div>
    <!-- <v-footer>'copyleft (C)'</v-footer> -->
  </v-app>
</template>

<script setup>
import Main from "@/components/Main.vue";
import SideBlock from "@/components/SideBlock.vue";
import VisitCounter from "@/services/VisitCounter.vue";
import HeroBlock from "@/components/blocks/HeroBlock.vue";
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
  // font-size: 16px;
}

.sideBlock {
  max-width: 25%;
}

.afterHeader {
  padding-top: 350px;
}

.bgImg {
  background-image: url("/bg.svg");
  background: rgb(var(--v-theme-bgFirst));
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
  // height: 100%;
  max-width: 1240px;
  margin: 0 auto;
}

.hover {
  &:hover {
    background-color: rgb(var(--v-theme-bgFirst));

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
  color: rgb(var(--v-theme-test));
}
</style>
