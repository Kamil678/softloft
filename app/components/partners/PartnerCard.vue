<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="group flex flex-col items-center gap-4 rounded-2xl bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7 md:flex-row"
  >
    <span
      class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-bg p-2 ring-1 ring-border sm:h-20 sm:w-20"
    >
      <img :src="logo" :alt="name" class="h-full w-full object-contain" loading="lazy" />
    </span>

    <span class="min-w-0 text-center md:text-left">
      <span class="block truncate font-heading text-base font-medium text-text sm:text-lg">{{ name }}</span>
      <span class="mt-0.5 block text-xs tracking-wide text-text-muted uppercase">{{ role }}</span>
      <span class="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent-strong">
        Zobacz
        <IconArrowUpRight
          :size="14"
          stroke-width="1.9"
          class="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </span>
  </a>
</template>

<script setup lang="ts">
import { IconArrowUpRight } from "@tabler/icons-vue";

defineProps<{
  name: string;
  role: string;
  url: string;
  logo: string;
}>();
</script>
