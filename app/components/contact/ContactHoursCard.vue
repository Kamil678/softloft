<template>
  <div class="rounded-2xl bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <span class="text-accent">
      <IconClock :size="28" stroke-width="1.75" />
    </span>
    <p class="mt-4 text-lg font-medium text-text">{{ $t("contact.hoursTitle") }}</p>
    <p class="mt-2 text-sm font-medium text-text">{{ $t("contact.hoursValue") }}</p>
    <p class="mt-2 text-xs leading-relaxed text-text/55">{{ $t("contact.hoursNote") }}</p>
  </div>
</template>

<script setup lang="ts">
import { IconClock } from "@tabler/icons-vue";
</script>
