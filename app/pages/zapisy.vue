<template>
  <div>
    <section class="mx-auto max-w-4xl px-4 pt-16 pb-10 text-center sm:px-6 sm:pt-24 sm:pb-14">
      <SectionHeading
        :eyebrow="$t('booking.eyebrow')"
        :title="$t('booking.title')"
        :subtitle="$t('booking.subtitle')"
        align="center"
        class="mx-auto"
      />
    </section>

    <section class="mx-auto max-w-5xl px-4 pb-24 sm:px-6">
      <div class="rounded-2xl border border-accent/30 bg-surface p-4 shadow-sm sm:p-6">
        <ClientOnly v-if="fitsseyWidgetUuid">
          <lb-schedule-widget :uuid="fitsseyWidgetUuid"></lb-schedule-widget>
        </ClientOnly>

        <div v-else class="flex flex-col items-center gap-3 px-6 py-16 text-center">
          <IconCalendarEvent :size="32" stroke-width="1.5" class="text-accent" aria-hidden="true" />
          <p class="max-w-md text-sm leading-relaxed text-text-muted sm:text-base">{{ $t("booking.pending") }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { IconCalendarEvent } from "@tabler/icons-vue";
import SectionHeading from "~/components/ui/SectionHeading.vue";

const { public: publicConfig } = useRuntimeConfig();
const fitsseyWidgetUuid = publicConfig.fitsseyWidgetUuid as string;

useHead({
  title: "Zapisy - Soft Loft",
  meta: [{ name: "description", content: "Zarezerwuj trening pilates reformer w Soft Loft przez aplikację Fitssey." }],
});
</script>
