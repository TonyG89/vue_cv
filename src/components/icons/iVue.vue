<template>
  <div class="icon">
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 122.88 106.42"
      style="enable-background: new 0 0 122.88 106.42"
      xml:space="preserve"
    >
      <g>
        <polygon
          :fill="color"
          points="75.63,0 61.44,24.58 47.25,0 0,0
        61.44,106.42 122.88,0 75.63,0"
        />
        <polygon
          :fill="color"
          points="75.63,0 61.44,24.58 47.25,0 24.58,0 61.44,63.85 98.3,0 75.63,0"
        />
      </g>
    </svg>
  </div>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: "#4CAF50",
  },
});
</script>

<style lang="scss" scoped>
.icon {
  width: 21px;
  height: 21px;
}
</style>
