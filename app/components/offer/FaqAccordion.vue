<template>
  <div class="mx-auto max-w-3xl">
    <div v-for="(item, index) in items" :key="item.question" class="border-b border-border first:border-t">
      <h3>
        <button
          type="button"
          class="flex w-full items-end gap-5 py-6 text-left sm:gap-8"
          :aria-expanded="openIndex === index"
          :aria-controls="`faq-panel-${index}`"
          @click="toggle(index)"
        >
          <span
            class="shrink-0 font-heading text-2xl font-medium transition-colors duration-300 sm:text-3xl"
            :class="openIndex === index ? 'text-accent' : 'text-border'"
            aria-hidden="true"
          >
            {{ String(index + 1).padStart(2, "0") }}
          </span>

          <span
            class="flex-1 font-heading text-lg font-medium transition-colors duration-300 sm:text-xl"
            :class="openIndex === index ? 'text-accent-strong' : 'text-text'"
          >
            {{ item.question }}
          </span>

          <span
            class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform duration-300"
            :class="{ 'rotate-45': openIndex === index }"
          >
            <IconPlus :size="16" stroke-width="2.1" aria-hidden="true" />
          </span>
        </button>
      </h3>

      <div
        :id="`faq-panel-${index}`"
        class="grid transition-[grid-template-rows] duration-300 ease-out"
        :class="openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
      >
        <div class="overflow-hidden">
          <p class="pr-14 pb-7 pl-[3.25rem] text-sm leading-relaxed text-text-muted sm:pr-16 sm:pb-8 sm:pl-[4rem] sm:text-base">
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconPlus } from "@tabler/icons-vue";

defineProps<{ items: { question: string; answer: string }[] }>();

const openIndex = ref<number | null>(0);

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index;
}
</script>
