<template>
  <SideBlockTemplate :title="title">
    <div v-for="(group, ind) in skills" :key="ind">
      <v-chip
        :color="chipColor(ind + 1)"
        v-for="skill in group"
        :key="skill.title"
        class="mr-1 my-1 px-3"
      >
        <div class="mt-1 mr-2">
          <v-icon :icon="skill.icon" class="mr-1" />{{ skill.title }}
          <!-- <v-tooltip activator="parent" location="right">
                  <div v-if="skill.started" class="text-red">
                    since:{{ skill.started }}(<span class="font-italic"
                    >{{ practiceTime(skill.started) }} </span
                    >)
                  </div>
                  <div v-if="skill.hint">{{ skill.hint }}</div>
                  <div class="curve" v-if="skill.stack">{{ skill.stack }}xxx</div>
                </v-tooltip> -->
        </div>
      </v-chip>
      <v-tooltip activator="parent" location="right">
        <div
          class="hint w-full bg-textSecond"
          :class="`text-${chipColor(ind + 1)}`"
        >
          <h3>{{ levelHint[ind][0] }}</h3>
          <h4 class="font-weight-regular">{{ levelHint[ind][1] }}</h4>
        </div>
      </v-tooltip>
    </div>
  </SideBlockTemplate>
</template>

<script setup>
import SideBlockTemplate from "../ui/SideBlockTemplate.vue";
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

const levelHint = [
  ["Strong Proficiency", "Constantly improving and enhancing (expert level)"],
  ["Intermediate Proficiency", "Advanced (proficient in the stack)"],
  [
    "Basic Proficiency",
    "I have a rudimentary understanding of these technologies. I've practiced with them to some extent but haven't deeply immersed myself. I intend to further explore and learn about them in the future.",
  ],
  [
    "Previous Experience",
    "I've worked in the past that I'm not currently using",
  ],
];

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
      color = "first";
      break;
    case 2:
      color = "second";
      break;
    case 3:
      color = "third";
      break;
    case 4:
      color = "fourth";
      break;
  }
  return color;
};
</script>

<style lang="scss" scoped>
.hint {
  width: 300px;
  margin: -5px -18px;
  padding: 5px;
  border-radius: 5px;
  background: #eceff1;
}
</style>
