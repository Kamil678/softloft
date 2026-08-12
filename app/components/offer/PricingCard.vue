<template>
  <div
    class="relative flex h-full flex-col items-center rounded-2xl p-8 text-center transition-all duration-300 md:p-9"
    :class="
      highlighted
        ? 'self-start bg-header text-header-text shadow-2xl ring-2 ring-accent ring-offset-4 ring-offset-bg hover:-translate-y-1'
        : 'bg-surface hover:-translate-y-1 hover:shadow-lg'
    "
  >
    <span
      v-if="highlighted"
      class="mb-5 inline-flex w-fit items-center justify-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold whitespace-nowrap tracking-[0.08em] text-accent-text uppercase"
    >
      <IconSparkles :size="12" stroke-width="2" aria-hidden="true" />
      {{ badge }}
    </span>

    <h3 class="font-heading text-lg font-medium" :class="highlighted ? 'text-header-text' : 'text-text'">{{ name }}</h3>
    <p class="mt-2 text-xs leading-relaxed md:text-sm" :class="highlighted ? 'text-header-text/70' : 'text-text-muted'">
      {{ description }}
    </p>

    <div class="mt-6">
      <span v-if="price" class="font-heading text-4xl font-medium" :class="highlighted ? 'text-accent' : 'text-text'">{{ price }} zł</span>
      <span
        v-else
        class="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.1em] uppercase"
        :class="highlighted ? 'text-accent' : 'text-accent-strong'"
      >
        <IconClock :size="14" stroke-width="1.8" aria-hidden="true" />
        Wkrótce
      </span>
      <p v-if="unit" class="mt-1 text-xs" :class="highlighted ? 'text-header-text/60' : 'text-text-muted'">{{ unit }}</p>
    </div>

    <ul
      v-if="perks?.length"
      class="mt-7 flex w-full flex-col gap-2.5 border-t pt-6 text-left text-sm"
      :class="highlighted ? 'border-header-text/10 text-header-text/85' : 'border-border text-text'"
    >
      <li v-for="perk in perks" :key="perk" class="flex items-start gap-2.5">
        <IconCheck
          :size="16"
          stroke-width="2.2"
          class="mt-0.5 shrink-0"
          :class="highlighted ? 'text-accent' : 'text-accent-strong'"
          aria-hidden="true"
        />
        <span>{{ perk }}</span>
      </li>
    </ul>

    <div class="mt-auto w-full pt-8">
      <AppButton to="/zapisy" :variant="highlighted ? 'primary' : 'outline'" class="w-full">Wybierz</AppButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconCheck, IconClock, IconSparkles } from "@tabler/icons-vue";
import AppButton from "~/components/ui/AppButton.vue";

withDefaults(
  defineProps<{
    name: string;
    description: string;
    price: number | null;
    unit?: string;
    highlighted?: boolean;
    badge?: string;
    perks?: string[];
  }>(),
  { highlighted: false, badge: "Polecane" },
);
</script>
