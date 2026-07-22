<template>
  <div class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bg px-6 py-16 sm:px-10">
    <div class="glow pointer-events-none absolute inset-0" />

    <div class="relative flex w-full max-w-xl flex-col items-center text-center">
      <AppLogo class="drop-shadow-sm" />

      <p class="mt-8 text-[0.7rem] font-medium tracking-[0.4em] text-accent uppercase sm:text-xs">
        Już wkrótce
      </p>

      <h1 class="mt-4 text-[clamp(1.6rem,4.5vw,2.5rem)] leading-tight font-medium text-header text-balance">
        Studio pilates na reformerach w Krakowie
      </h1>

      <p class="mt-3 text-sm text-header/50">Przygotowujemy nowe studio i stronę - zajrzyj tu wkrótce.</p>

      <div class="mt-8 flex flex-col items-center gap-3 text-sm text-header/70">
        <a href="tel:+48502114477" class="flex items-center gap-2 font-medium tracking-wide text-header transition-colors hover:text-accent">
          <svg viewBox="0 0 24 24" fill="none" class="h-4 w-4 text-accent" aria-hidden="true">
            <path
              d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.7c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.2 1.1L6.6 10.8Z"
              fill="currentColor"
            />
          </svg>
          502 114 477
        </a>
        <p class="flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" class="h-4 w-4 shrink-0 text-accent" aria-hidden="true">
            <path
              d="M12 2c-4.1 0-7.5 3.4-7.5 7.5 0 5.6 6.6 12 6.9 12.3.3.3.9.3 1.2 0 .3-.3 6.9-6.7 6.9-12.3C19.5 5.4 16.1 2 12 2Zm0 10.2a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Z"
              fill="currentColor"
            />
          </svg>
          ul. Glogera 21, 31-222 Kraków
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Soft Loft — studio pilates | już wkrótce',
  meta: [
    {
      name: 'description',
      content: 'Soft Loft — studio pilates na reformerach w Krakowie. Strona już wkrótce, zadzwoń i zarezerwuj miejsce.'
    }
  ]
})
</script>

<style scoped>
.glow {
  background: radial-gradient(60% 50% at 50% 25%, color-mix(in srgb, var(--color-accent) 12%, transparent), transparent 70%);
}
</style>
