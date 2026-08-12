<template>
  <blockquote v-if="variant === 'featured'" class="relative mx-auto max-w-4xl text-center">
    <p class="relative font-heading text-[clamp(1.35rem,2.6vw,1.9rem)] leading-snug font-medium text-text italic">„{{ text }}”</p>
    <footer class="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
      <span class="flex items-center gap-0.5 text-accent" role="img" :aria-label="`Ocena ${rating} na 5`">
        <component
          :is="i <= filledStars ? IconStarFilled : IconStar"
          v-for="i in 5"
          :key="i"
          :size="16"
          stroke-width="1.6"
          aria-hidden="true"
        />
      </span>
      <cite class="text-xs font-semibold tracking-[0.15em] text-text-muted uppercase not-italic">
        {{ name }}<span v-if="date" class="font-normal tracking-normal normal-case"> · {{ date }}</span>
      </cite>
    </footer>
  </blockquote>

  <blockquote
    v-else
    class="flex h-full flex-col justify-between rounded-2xl bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    <div>
      <div class="flex items-center justify-between gap-3">
        <span class="flex items-center gap-0.5 text-accent" role="img" :aria-label="`Ocena ${rating} na 5`">
          <component
            :is="i <= filledStars ? IconStarFilled : IconStar"
            v-for="i in 5"
            :key="i"
            :size="15"
            stroke-width="1.6"
            aria-hidden="true"
          />
        </span>
        <IconQuote :size="22" stroke-width="1.6" class="shrink-0 text-accent/30" aria-hidden="true" />
      </div>
      <p class="mt-4 text-[15px] leading-relaxed text-text sm:text-base">„{{ text }}”</p>
    </div>
    <footer class="mt-4 border-t border-border pt-4 text-xs">
      <cite class="font-semibold text-text not-italic">{{ name }}</cite>
      <span v-if="date" class="text-text-muted"> · {{ date }}</span>
    </footer>
  </blockquote>
</template>

<script setup lang="ts">
import { IconQuote, IconStar, IconStarFilled } from "@tabler/icons-vue";

const props = withDefaults(
  defineProps<{
    name: string;
    rating: number;
    text: string;
    date?: string;
    variant?: "featured" | "default";
  }>(),
  { variant: "default" },
);

const filledStars = computed(() => Math.round(props.rating));
</script>
