<template>
  <!-- TODO:'umami' -->
  <h1 class="text-left px-2 text-textFirst bg-second fitContent">
    {{ title }}
  </h1>
  <v-row class="fitContent">
    <v-col>
      <v-card class="header-card hidden-xs d-flex" width="1016px" dark>
        <v-card class="ma-4 pa-2 bg-bgThird text-left" width="584">
          <!-- <h3>Time coding in vscode</h3> -->
          <div v-for="block in data.codeTime" :key="block">
            <img href="https://codetime.dev" :src="block" />
          </div>
          <div>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=TonyG89&show_icons=true&hide=true&count_private=true&title_color=5EFF09&text_color=4f7f35&icon_color=4f7f35&bg_color=1c1917&show_icons=true&layout=compact"
            />
          </div>
          <div>
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=TonyG89&stroke=c0c0c0&background=1c1917&ring=4f7f35&fire=5EFF09&currStreakNum=c0c0c0&currStreakLabel=4f7f35&sideNums=c0c0c0&sideLabels=4f7f35&dates=5EFF09"
            />
            <div>
              <img src="https://kounter.tk/badge/TonyG89_cv" />
            </div>
          </div>
        </v-card>
        <!-- TODO: API - CHECKTIME https://api.codetime.dev/shield?id=17123&project=&in=86400000 -->
        <v-card class="smBlock ma-4 text-left w-100">
          <!-- Books:
          <v-list class="border" v-for="(_, index) in data.books" :key="index">
            <v-list v-for="(book, ind) in data.books[index]" :key="ind">
              <div class="d-flex align-center">
                <h5>{{ book.author }} -</h5>
                <h5 class="mx-1">«{{ book.title }}»</h5>
                <h6 v-if="book.desc">{{ `("${book.desc}")` }}</h6>
              </div>
            </v-list>
          </v-list>
          <div class="">
            <h6>Who<span>what</span></h6>
            <h6>
              Online-courses: kottans<span>(Stage0 - 2022)</span>, MyWay,
              Mini-course minin, GoIt...
            </h6>
          </div> -->
          <div class="d-flex justify-center">
            <v-btn
              class="bg-bgFirst my-10 portfolio animate bg-green"
              href="https://tonyg89.github.io/portfolio/"
              target="_blank"
            >
              <div class="textblockBottom">
                <v-icon class="mr-1">mdi-book-open-blank-variant</v-icon>
                <span>View My Portfolio </span>
              </div>
            </v-btn>
          </div>
        </v-card>
      </v-card>
    </v-col>
  </v-row>
  <components is="Block" />
</template>

<script setup>
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

.portfolio {
  height: 200px !important;
  background: url("/port.jpg");
  background-position-y: -20px;
  background-size: cover;
  transition: all 1.5s ease-out;
  &:hover {
    transform: scale(1.1);
    transform-box:fill-box;
  }
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
