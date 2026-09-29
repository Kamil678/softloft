<template>
  <NuxtImg src="/images/logo.png" height="160" format="webp" alt="Soft Loft - Pilates Reformer Studio" class="w-auto" :class="sizeClasses" />
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ size?: "sm" | "lg" }>(), { size: "lg" });

const sizeClasses = computed(() => (props.size === "sm" ? "h-16 sm:h-19" : "h-28 sm:h-32"));
</script>
