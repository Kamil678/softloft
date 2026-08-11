<template>
  <div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
    <span class="text-4xl font-medium text-text sm:text-5xl">{{ average }}</span>
    <div class="text-left">
      <span class="flex items-center gap-0.5 text-accent" role="img" :aria-label="`Średnia ocena ${average} na 5`">
        <component
          :is="i <= filledStars ? IconStarFilled : IconStar"
          v-for="i in 5"
          :key="i"
          :size="18"
          stroke-width="1.6"
          aria-hidden="true"
        />
      </span>
      <p class="mt-1 text-xs text-text-muted sm:text-sm">na podstawie {{ reviews.length }} opinii</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconStar, IconStarFilled } from "@tabler/icons-vue";

const props = defineProps<{ reviews: { rating: number }[] }>();

const rawAverage = computed(() => {
  if (!props.reviews.length) return 0;
  return props.reviews.reduce((sum, review) => sum + review.rating, 0) / props.reviews.length;
});

const average = computed(() => rawAverage.value.toFixed(1));
const filledStars = computed(() => Math.round(rawAverage.value));
</script>
