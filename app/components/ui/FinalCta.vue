<template>
  <section class="px-6 py-16 sm:px-10 sm:py-20">
    <div
      class="mx-auto flex max-w-6xl flex-col items-start gap-10 overflow-hidden rounded-3xl bg-header px-8 py-14 sm:px-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between"
    >
      <div class="max-w-xl">
        <h2 class="font-heading text-[clamp(1.7rem,3.2vw,2.5rem)] leading-tight font-medium text-header-text">
          {{ title }}
        </h2>
        <p class="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
          {{ subtitle }}
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <AppButton :to="primaryHref" variant="primary">
            {{ primaryLabel }}
          </AppButton>
          <NuxtLink
            :to="secondaryHref"
            class="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3 text-xs font-semibold tracking-[0.15em] text-header-text uppercase transition-colors hover:border-accent hover:text-accent"
          >
            {{ secondaryLabel }}
          </NuxtLink>
        </div>
      </div>

      <NuxtLink
        :to="primaryHref"
        class="group relative hidden shrink-0 items-center justify-center lg:flex lg:h-48 lg:w-48"
        :aria-label="primaryLabel"
      >
        <svg viewBox="0 0 200 200" class="h-full w-full text-accent transition-transform duration-500 ease-out group-hover:rotate-[20deg]">
          <defs>
            <path id="final-cta-badge-path" fill="none" d="M 100,100 m -84,0 a 84,84 0 1,1 168,0 a 84,84 0 1,1 -168,0" />
          </defs>
          <circle
            cx="100"
            cy="100"
            r="84"
            fill="none"
            stroke="currentColor"
            stroke-opacity="0.35"
            stroke-width="1"
            stroke-dasharray="1 7"
            stroke-linecap="round"
          />
          <text font-size="13" font-weight="600" letter-spacing="3.5" fill="currentColor">
            <textPath href="#final-cta-badge-path" startOffset="0%">ZAREZERWUJ TERAZ &#8226; DOŁĄCZ DO NAS</textPath>
          </text>
        </svg>
        <span
          class="absolute inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-text shadow-lg transition-transform duration-300 group-hover:scale-110"
        >
          <IconArrowUpRight class="h-7 w-7" stroke-width="1.75" />
        </span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IconArrowUpRight } from "@tabler/icons-vue";
import AppButton from "./AppButton.vue";

defineProps<{
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}>();
</script>
