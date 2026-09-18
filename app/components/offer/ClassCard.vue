<template>
  <div
    class="flex h-full flex-col overflow-hidden rounded-2xl bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    <div class="aspect-[4/3] overflow-hidden">
      <img
        :src="image"
        :alt="name"
        class="h-full w-full object-cover"
        :style="{ objectPosition: imagePosition }"
        loading="lazy"
      />
    </div>

    <div class="flex flex-1 flex-col p-6 md:p-7">
      <h3 class="font-heading text-xl font-medium text-text">{{ name }}</h3>
      <p class="mt-2 text-sm leading-relaxed text-text-muted md:text-base">{{ description }}</p>

      <span
        class="mt-4 inline-flex w-fit items-center rounded-full bg-bg px-3 py-1 text-[11px] font-semibold tracking-wide text-accent-strong uppercase ring-1 ring-border"
      >
        {{ billingLabel }}
      </span>

      <div class="mt-auto pt-6">
        <button
          type="button"
          class="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border py-2.5 text-xs font-semibold tracking-[0.12em] text-text uppercase transition-colors hover:border-accent hover:text-accent"
          @click="$emit('details')"
        >
          {{ detailsCta }}
          <IconArrowUpRight :size="14" stroke-width="1.9" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconArrowUpRight } from "@tabler/icons-vue";

withDefaults(
  defineProps<{
    name: string;
    description: string;
    billingLabel: string;
    detailsCta: string;
    image: string;
    imagePosition?: string;
  }>(),
  { imagePosition: "center" },
);

defineEmits<{ details: [] }>();
</script>
