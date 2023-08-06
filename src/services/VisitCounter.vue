<template>
  <div>
    <p>Счетчик переходов: {{ counter }}</p>
    <button @click="handleClick">Перейти на сайт</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    handleClick() {
      const lastVisit = localStorage.getItem("lastVisit");
      if (!lastVisit || Date.now() - Number(lastVisit) >= 24 * 60 * 60 * 1000) {
        this.counter++;
        localStorage.setItem("lastVisit", Date.now());
      } else {
        alert("Вы уже заходили на сайт сегодня!");
      }
    },
  },
};
</script>
