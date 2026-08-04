<template>
  <div class="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-start sm:gap-5">
    <span class="text-accent">
      <IconParking :size="28" stroke-width="1.75" />
    </span>
    <div>
      <p class="text-xs font-semibold tracking-[0.15em] text-accent uppercase">{{ $t("contact.parkingTitle") }}</p>
      <p class="mt-1.5 text-sm leading-relaxed text-text-muted">{{ $t("contact.parkingText") }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconParking } from "@tabler/icons-vue";
</script>
