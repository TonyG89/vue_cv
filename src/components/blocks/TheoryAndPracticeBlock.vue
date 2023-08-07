<template>
  <!-- TODO:'umami' -->
  <BlockTemplate :title="title">
    <h1>{{ test }}</h1>

    <!-- TODO: API - CHECKTIME https://api.codetime.dev/shield?id=17123&project=&in=86400000 -->
    <v-card class="smBlock ma-4 text-left w-100">
      Books:
      <v-list
        class="border d-flex"
        v-for="(_, index) in data.books"
        :key="index"
      >
        <div
          class="verticalText text-center text-uppercase"
          :class="index ? 'bg-warning' : 'bg-green'"
        >
          {{ bookStatus[index] }}
        </div>
        <div>
          <v-list v-for="(book, ind) in data.books[index]" :key="ind">
            <div class="align-center">
              <h5>{{ book.author }} -</h5>
              <h5 class="mx-1">«{{ book.title }}»</h5>
              <h6 v-if="book.desc">{{ `("${book.desc}")` }}</h6>
            </div>
          </v-list>
        </div>
      </v-list>
      <!-- <div class="">
            <h6>Who<span>what</span></h6>
            <h6>
              Online-courses: kottans<span>(Stage0 - 2022)</span>, MyWay,
              Mini-course minin, GoIt...
            </h6>
          </div> -->
    </v-card>
    <components is="Block" />
  </BlockTemplate>
</template>

<script setup>
import moment from "moment";
import BlockTemplate from "../ui/BlockTemplate.vue";

const test = moment().subtract(116, "days").calendar();

const bookStatus = ["readed", "in progress"];

defineProps({
  title: {
    type: String,
    default: "Theory and Practice",
  },
  data: {
    type: Object,
    require: true,
  },
});
</script>

<style lang="scss" scoped>
// .book {
//   width: 150px;
//   height: 210px;
// }

.book {
  width: 150px;
  height: 210px;
  margin: 5px;
  .line {
    height: 210px;
    width: 5px;
    background: black;
  }
}

.verticalText {
  writing-mode: vertical-lr;
  transform: rotate(180deg);
}

.textblockBottom {
  bottom: 10%;
  margin-top: 150px;
}
</style>

<!-- 
формат:
  -спринт:
    -история(когда начал заниматься и какой стек есть и был)
    -история работы в продуктовой компании(компонент работы)
  -дашборы(с гитхаба-кодинг,работа с гитом)
  -стек
 -->
