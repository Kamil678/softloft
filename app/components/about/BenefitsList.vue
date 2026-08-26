<template>
  <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
    <div class="mx-auto max-w-2xl text-center">
      <p class="text-xs font-semibold tracking-[0.3em] text-accent-strong uppercase">{{ $t("about.benefits.eyebrow") }}</p>
      <p class="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">{{ $t("about.benefits.intro") }}</p>
    </div>

    <div class="mt-12 grid gap-5 sm:grid-cols-3">
      <div
        v-for="(item, index) in items"
        :key="item"
        class="flex flex-col gap-4 rounded-2xl bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
      >
        <span class="font-heading text-3xl font-medium text-accent/40">0{{ index + 1 }}</span>
        <p class="text-sm leading-relaxed text-text sm:text-base">{{ item }}</p>
      </div>
    </div>

    <div class="mx-auto mt-16 max-w-2xl text-center">
      <p class="text-sm leading-relaxed text-text-muted sm:text-base">{{ $t("about.benefits.outroLead") }}</p>
      <p class="mt-4 font-heading text-[clamp(1.35rem,2.6vw,1.9rem)] leading-snug font-medium text-balance text-text italic">
        {{ $t("about.benefits.outroEmphasis") }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n();
const items = computed(() => (tm("about.benefits.items") as any[]).map((item) => rt(item)));
</script>
