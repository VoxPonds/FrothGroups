<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.src = '/demos/Demo_Snake.js'
  script.async = true

  document.body.appendChild(script)
})
</script>

<template>
  <div class="snake-game">
    <canvas id="canvas"></canvas>
  </div>
</template>

<style scoped>

</style>