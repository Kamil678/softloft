<template>
  <div class="flex flex-col items-start justify-between gap-6 rounded-3xl bg-header p-7 sm:flex-row sm:items-center sm:p-10">
    <div>
      <p class="font-heading text-xl font-medium text-header-text sm:text-2xl">{{ $t("contact.ctaTitle") }}</p>
      <p class="mt-2 max-w-md text-sm leading-relaxed text-header-text/65">{{ $t("contact.ctaText") }}</p>
    </div>
    <AppButton :href="fitsseyUrl" variant="primary">
      {{ $t("nav.cta") }}
      <IconArrowUpRight :size="16" stroke-width="1.9" />
    </AppButton>
  </div>
</template>

<script setup lang="ts">
import { IconArrowUpRight } from "@tabler/icons-vue";
import AppButton from "~/components/ui/AppButton.vue";

const { public: publicConfig } = useRuntimeConfig();
const fitsseyUrl = publicConfig.fitsseyUrl as string;
</script>
