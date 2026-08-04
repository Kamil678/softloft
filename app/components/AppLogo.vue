<template>
  <img src="/images/logo.png" alt="Soft Loft — Pilates Reformer Studio" class="w-auto" :class="sizeClasses" />
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ size?: 'sm' | 'lg' }>(), { size: 'lg' })

const sizeClasses = computed(() => (props.size === 'sm' ? 'h-16 sm:h-18' : 'h-28 sm:h-32'))
</script>
