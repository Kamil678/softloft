<template>
  <div
    class="group flex h-full flex-col overflow-hidden rounded-2xl bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    <div class="aspect-[4/5] overflow-hidden">
      <!-- TODO: podmienić na docelowe zdjęcie instruktora od klientki -->
      <img v-if="photo" :src="photo" :alt="name" class="h-full w-full object-cover" loading="lazy" />
      <div v-else class="flex h-full w-full items-center justify-center bg-accent/5" aria-hidden="true">
        <span class="font-heading text-7xl font-medium text-accent/25">{{ name.charAt(0) }}</span>
      </div>
    </div>

    <div class="flex flex-1 flex-col border-t border-accent/30 p-6">
      <div class="flex items-baseline justify-between gap-3">
        <p v-if="role" class="line-clamp-1 text-xs font-semibold tracking-[0.15em] text-accent-strong uppercase">
          {{ role }}
        </p>
        <span v-if="index" class="shrink-0 font-heading text-sm text-text/30">{{ String(index).padStart(2, "0") }}</span>
      </div>

      <h3 class="mt-2 font-heading text-2xl font-medium text-text">{{ name }}</h3>

      <p v-if="quote" class="mt-3 line-clamp-2 min-h-[2.875rem] text-sm leading-relaxed text-text-muted italic">
        „{{ quote }}”
      </p>

      <div v-if="specialization" class="mt-4">
        <p class="text-[10px] font-semibold tracking-[0.2em] text-text-muted/70 uppercase">Specjalizacja</p>
        <p class="mt-1 text-sm leading-relaxed text-text">{{ specialization }}</p>
      </div>

      <div v-if="afterHours" class="mt-auto border-t border-border pt-4">
        <p class="text-[10px] font-semibold tracking-[0.2em] text-text-muted/70 uppercase">
          {{ $t("about.instructors.afterHours") }}
        </p>
        <p class="mt-1 text-sm leading-relaxed text-text-muted">{{ afterHours }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  photo?: string;
  name: string;
  role?: string;
  quote?: string;
  specialization?: string;
  afterHours?: string;
  index?: number;
}>();
</script>
