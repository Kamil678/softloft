<template>
  <div class="group relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 text-center sm:px-10 sm:py-16">
    <div class="relative mx-auto max-w-xl">
      <span class="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.15em] text-accent-strong uppercase">
        <IconUsersGroup :size="14" stroke-width="1.9" />
        {{ $t("partners.ctaEyebrow") }}
      </span>

      <p class="mt-3 font-heading text-2xl font-medium text-text sm:text-3xl">{{ $t("partners.ctaTitle") }}</p>
      <p class="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">{{ $t("partners.ctaText") }}</p>

      <div class="mt-8">
        <AppButton to="/kontakt" variant="primary" class="group/btn">
          {{ $t("partners.ctaButton") }}
          <IconArrowUpRight
            :size="16"
            stroke-width="1.9"
            class="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconArrowUpRight, IconUsersGroup } from "@tabler/icons-vue";
import AppButton from "~/components/ui/AppButton.vue";
</script>
