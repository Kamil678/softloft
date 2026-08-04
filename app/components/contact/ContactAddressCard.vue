<template>
  <a
    :href="directionsUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="group rounded-2xl bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    <span class="text-accent">
      <IconMapPin :size="28" stroke-width="1.75" />
    </span>
    <p class="mt-4 text-lg font-medium text-text">{{ $t("contact.addressTitle") }}</p>
    <p class="mt-2 text-sm leading-relaxed text-text-muted">
      <span v-for="line in addressLines" :key="line" class="block">{{ line }}</span>
    </p>
  </a>
</template>

<script setup lang="ts">
import { IconMapPin } from "@tabler/icons-vue";

const { tm, rt } = useI18n();
const addressLines = computed(() => (tm("contact.addressLines") as any[]).map((line) => rt(line)));

const directionsUrl = "https://www.google.com/maps/search/?api=1&query=ul.+Zygmunta+Glogera+21%2C+31-222+Krak%C3%B3w";
</script>
