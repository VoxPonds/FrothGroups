<script setup lang="ts">
import { onMounted } from 'vue'
import {
  oldSchool,
  toggleStyle,
  initStyle
} from '../style_state'

onMounted(() => {
  initStyle()
})
</script>

<template>
  <button
      class="style-toggle"
      type="button"
      @click="toggleStyle"
  >
    {{ oldSchool ? 'Old-School' : 'Modern' }}
  </button>
</template>