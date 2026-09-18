<template>
  <section class="mx-auto max-w-7xl px-4 pt-10 pb-10 sm:px-6 sm:pt-24 sm:pb-20">
    <p class="mb-8 text-center text-xs font-semibold tracking-[0.3em] text-accent-strong uppercase sm:mb-12">
      {{ $t("about.eyebrow") }}
    </p>

    <div class="grid gap-6 md:grid-cols-2 sm:gap-12 lg:gap-20">
      <div class="relative md:min-h-[26rem]">
        <div class="absolute -inset-4 hidden rounded-2xl border border-accent/25 md:block" aria-hidden="true" />
        <div class="mx-auto grid aspect-[4/5] w-full grid-cols-2 grid-rows-2 gap-2 md:aspect-auto md:h-full md:gap-3">
          <div class="row-span-2 overflow-hidden rounded-xl shadow-lg">
            <img
              src="/images/training/individual-training.png"
              alt="Trening pilates na reformerze w Soft Loft"
              class="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div class="overflow-hidden rounded-xl shadow-lg">
            <img
              src="/images/studio/studio-interior-evening.jpg"
              alt="Wnętrze studia Soft Loft"
              class="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div class="overflow-hidden rounded-xl shadow-lg">
            <img
              src="/images/training/solo-training-woman.png"
              alt="Rozciąganie na reformerze w studiu Soft Loft"
              class="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div class="text-center md:text-left">
        <h1 class="font-heading text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-medium text-balance text-text">
          {{ $t("about.title") }}
        </h1>
        <p class="mt-3 font-heading text-lg leading-snug font-medium text-balance text-accent-strong italic sm:text-xl">
          „{{ $t("about.hero.quote") }}”
        </p>

        <p class="mt-5 text-base leading-relaxed text-text sm:text-lg">{{ $t("about.storyLead") }}</p>

        <div class="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
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
