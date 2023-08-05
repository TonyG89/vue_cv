<template>
  <v-card class="side-menu-card">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <div v-for="(group, ind) in skills" :key="ind">
        <v-chip
          :color="chipColor(ind + 1)"
          v-for="skill in group"
          :key="skill.title"
          class="mr-1 my-1 px-3"
        >
          <v-icon :icon="skill.icon" class="mt-1 mr-2" />{{ skill.title }}
          <!-- <v-tooltip activator="parent" location="right">
            <div v-if="skill.started" class="text-red">
              since:{{ skill.started }}(<span class="font-italic"
                >{{ practiceTime(skill.started) }} </span
              >)
            </div>
            <div v-if="skill.hint">{{ skill.hint }}</div>
            <div class="curve" v-if="skill.stack">{{ skill.stack }}xxx</div>
          </v-tooltip> -->
        </v-chip>
        <!-- <v-tooltip activator="parent" location="right">{{
          levelHint[ind + 1]
        }}</v-tooltip> -->
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    request: false,
  },
  skills: {
    type: Array,
    default: () => [], //[[{title, hint, rate, started, icon}]]
  },
});

const levelHint = {
  1: "Constantly improving and enhancing (expert level)",
  2: "Advanced (proficient in the stack)",
  3: "Intermediate (fair knowledge)",
  4: "Novice/Beginner (basic knowledge)",
};

const practiceTime = (started) => {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  let res;
  if (started.indexOf(".") === -1) {
    res = `${currentYear - started} years`;
  } else {
    const index = started.indexOf(".");
    const startMonth = started.slice(0, index);
    const startYear = started.slice(index + 1);
    console.log(currentMonth);
    console.log(currentYear);
    res = `${currentYear - startYear} years and ${
      currentMonth - startMonth
    } months`;
  }
  return res;
};

const chipColor = (levelNumber) => {
  let color = "";
  switch (levelNumber) {
    case 1:
      color = "green";
      break;
    case 2:
      color = "lime";
      break;
    case 3:
      color = "amber";
      break;
    case 4:
      color = "grey";
      break;
  }
  return color;
};
</script>

<style lang="scss" scoped></style>
