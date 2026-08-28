<template>
  <section class="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-20">
    <p class="mb-8 text-center text-xs font-semibold tracking-[0.3em] text-accent-strong uppercase sm:mb-12">
      {{ $t("about.benefits.eyebrow") }}
    </p>

    <div class="grid gap-6 md:grid-cols-2 sm:gap-12 lg:gap-16">
      <div class="relative md:order-2 md:min-h-[36rem]">
        <div class="absolute -inset-4 hidden rounded-2xl border border-accent/25 md:block" aria-hidden="true" />
        <div class="mx-auto aspect-[4/5] w-2/3 overflow-hidden rounded-xl shadow-lg md:aspect-auto md:w-full md:h-full">
          <img
            src="/images/pilates-na-reformerze.jpg"
            alt="Trening pilates na reformerze w Soft Loft"
            class="h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </div>

      <div class="text-center md:order-1 md:text-left">
        <p class="text-base leading-relaxed text-text-muted sm:text-lg">{{ $t("about.benefits.intro") }}</p>

        <ul class="mt-6 space-y-3 md:text-left">
          <li v-for="(item, index) in items" :key="item" class="flex items-baseline justify-center gap-4 md:justify-start">
            <span class="min-w-9 font-heading text-2xl leading-none font-medium text-accent/50 sm:text-3xl">0{{ index + 1 }}</span>
            <p class="text-sm leading-relaxed text-text sm:text-base">{{ item }}</p>
          </li>
        </ul>

        <p class="mt-6 text-sm leading-relaxed text-text-muted sm:text-base">{{ $t("about.benefits.outroLead") }}</p>
        <p class="mt-2 font-heading text-lg leading-snug font-medium text-balance text-text italic sm:text-xl">
          {{ $t("about.benefits.outroEmphasis") }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n();
const items = computed(() => (tm("about.benefits.items") as any[]).map((item) => rt(item)));
</script>
