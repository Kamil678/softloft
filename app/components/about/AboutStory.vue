<template>
  <section class="bg-surface px-4 py-16 sm:px-6 sm:py-24">
    <div class="mx-auto grid max-w-7xl items-center gap-12 sm:grid-cols-2 sm:gap-12 lg:gap-20">
      <div class="relative order-2 sm:order-1">
        <div class="absolute -inset-4 hidden rounded-2xl border border-accent/25 sm:block" aria-hidden="true" />
        <div class="mx-auto aspect-[4/5] w-2/3 overflow-hidden rounded-xl shadow-lg sm:w-full">
          <!-- TODO: podmienić na docelowe zdjęcie studia od klientki -->
          <img
            src="/images/pilates-accessories.jpeg"
            alt="Akcesoria do pilates reformer w studiu Soft Loft"
            class="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div class="order-1 text-center sm:order-2 sm:text-left">
        <p class="text-xs font-semibold tracking-[0.3em] text-accent-strong uppercase">{{ $t("about.storyEyebrow") }}</p>
        <h2 class="mt-3 font-heading text-[clamp(1.6rem,3.5vw,2.5rem)] leading-tight font-medium text-balance text-text">
          {{ $t("about.title") }}
        </h2>

        <p class="mt-5 text-base leading-relaxed text-text sm:text-lg">{{ $t("about.storyLead") }}</p>

        <div class="mt-6 flex flex-wrap justify-center gap-2 sm:justify-start">
          <span
            v-for="tag in tags"
            :key="tag"
            class="inline-flex items-center rounded-full bg-bg px-3 py-1 text-[11px] font-semibold tracking-wide text-accent-strong uppercase ring-1 ring-border"
          >
            {{ tag }}
          </span>
        </div>

        <p class="mt-6 text-sm leading-relaxed text-text-muted sm:text-base">{{ $t("about.storyRest") }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n();
const tags = computed(() => (tm("about.tags") as any[]).map((tag) => rt(tag)));
</script>
