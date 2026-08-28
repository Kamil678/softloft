<template>
  <div class="relative overflow-hidden rounded-3xl border border-border bg-surface">
    <div class="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />

    <div class="relative flex flex-col items-start gap-6 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10">
      <div>
        <div class="flex items-center gap-1.5 text-accent-strong">
          <IconCalendarEvent :size="16" stroke-width="1.9" />
          <span class="text-xs leading-4 font-semibold tracking-[0.15em] uppercase mt-0.5">{{ $t("contact.ctaEyebrow") }}</span>
        </div>

        <p class="mt-3 font-heading text-xl font-medium text-text sm:text-2xl">
          {{ $t("contact.ctaTitle") }}
        </p>
        <p class="mt-2 max-w-md text-sm leading-relaxed text-text-muted">{{ $t("contact.ctaText") }}</p>
      </div>

      <AppButton to="/zapisy" variant="primary" class="group/btn shrink-0">
        {{ $t("nav.cta") }}
        <IconArrowUpRight
          :size="16"
          stroke-width="1.9"
          class="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
        />
      </AppButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconArrowUpRight, IconCalendarEvent } from "@tabler/icons-vue";
import AppButton from "~/components/ui/AppButton.vue";
</script>
