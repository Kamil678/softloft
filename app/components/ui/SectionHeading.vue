<template>
  <div :class="['flex flex-col', align === 'center' ? 'items-center text-center' : 'items-start text-left']">
    <p v-if="eyebrow" class="text-xs font-semibold tracking-[0.3em] text-accent uppercase">
      {{ eyebrow }}
    </p>
    <h2
      class="mt-3 font-heading text-[clamp(1.6rem,3.5vw,2.5rem)] leading-tight font-medium text-balance"
      :class="theme === 'dark' ? 'text-header-text' : 'text-text'"
    >
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-4 max-w-2xl text-sm leading-relaxed sm:text-base" :class="theme === 'dark' ? 'text-header-text/70' : 'text-text-muted'">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    subtitle?: string
    align?: 'left' | 'center'
    theme?: 'light' | 'dark'
  }>(),
  { align: 'left', theme: 'light' }
)
</script>
