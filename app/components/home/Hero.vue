<template>
  <section
    class="relative isolate flex min-h-[calc(100vh-var(--header-h,88px))] items-center overflow-hidden py-28 sm:py-32"
    :class="{ 'bg-header': !image }"
  >
    <img
      v-if="image"
      :src="image"
      :alt="imageAlt ?? ''"
      aria-hidden="true"
      class="absolute inset-0 -z-20 h-full w-full object-cover"
      loading="eager"
      fetchpriority="high"
    />
    <template v-if="image">
      <div class="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/15" aria-hidden="true" />
      <div class="absolute inset-0 -z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" aria-hidden="true" />
    </template>

    <div class="relative w-full max-w-7xl mx-auto px-6 flex flex-col">
      <p
        v-if="eyebrow"
        class="text-xs font-semibold tracking-[0.3em] text-accent uppercase"
        :class="{ '[text-shadow:0_2px_12px_rgba(0,0,0,0.6)]': image }"
      >
        {{ eyebrow }}
      </p>
      <h1
        class="mt-4 font-heading text-[clamp(2.25rem,5.5vw,3.75rem)] leading-tight font-medium whitespace-pre-line"
        :class="image ? 'text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.6)]' : 'text-header-text'"
      >
        {{ title }}
      </h1>
      <p
        class="mt-5 max-w-xl text-sm leading-relaxed sm:text-base"
        :class="image ? 'text-white/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.6)]' : 'text-header-text/75'"
      >
        {{ subtitle }}
      </p>
      <AppButton :href="ctaHref" variant="primary" class="mt-8 w-fit">
        {{ ctaLabel }}
      </AppButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from "../ui/AppButton.vue";

defineProps<{
  eyebrow?: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  image?: string;
  imageAlt?: string;
}>();
</script>
