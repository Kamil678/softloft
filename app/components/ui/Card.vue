<template>
  <div class="rounded-lg border border-border p-6" :class="variant === 'surface' ? 'bg-surface' : 'bg-bg'">
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ variant?: 'surface' | 'plain' }>(), { variant: 'plain' })
</script>
