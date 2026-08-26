<template>
  <section class="relative overflow-hidden bg-surface px-4 py-16 sm:px-6 sm:py-20">
    <div
      class="pointer-events-none absolute top-1/2 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
      aria-hidden="true"
    />

    <div class="relative mx-auto grid max-w-5xl items-center gap-12 sm:grid-cols-2 sm:gap-16">
      <img src="/images/logo-black.png" alt="Soft Loft - Pilates Reformer Studio" class="mx-auto h-56 w-auto sm:h-72" loading="lazy" />

      <p
        class="text-center font-heading text-[clamp(1.5rem,3.2vw,2.25rem)] leading-snug font-medium text-balance text-text italic sm:text-left"
      >
        „{{ $t("home.quote") }}"
      </p>
    </div>
  </section>
</template>
