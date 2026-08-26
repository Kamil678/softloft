<template>
  <section class="mx-auto max-w-7xl px-4 pt-16 pb-16 sm:px-6 sm:pt-24 sm:pb-20">
    <div class="grid items-center gap-10 sm:grid-cols-2 sm:gap-12 lg:gap-20">
      <div class="text-center sm:text-left">
        <p class="text-xs font-semibold tracking-[0.3em] text-accent-strong uppercase">{{ $t("about.eyebrow") }}</p>
        <h1
          class="mt-4 font-heading text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-medium text-balance text-text italic"
        >
          „{{ $t("about.hero.quote") }}”
        </h1>
      </div>

      <div class="relative">
        <div class="absolute -inset-4 hidden rounded-2xl border border-accent/25 sm:block" aria-hidden="true" />
        <div class="mx-auto aspect-[4/5] w-2/3 overflow-hidden rounded-xl shadow-lg sm:w-full">
          <!-- TODO: podmienić na docelowe zdjęcie studia od klientki -->
          <img
            src="/images/pilates-reformer-duo.jpg"
            alt="Trening pilates na reformerze w Soft Loft"
            class="h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </section>
</template>
