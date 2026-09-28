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

    <section id="cennik" class="mx-auto max-w-7xl scroll-mt-24 px-4 pb-16 sm:px-6">
      <div class="rounded-2xl border border-accent/30 bg-surface p-4 shadow-sm sm:p-6">
        <ClientOnly>
          <div v-if="!widgetFailed" id="fitssey-widget">
            <lb-schedule-widget location="1217F226-6282-42D1-8BC6-A4DA7629E0BA"></lb-schedule-widget>
          </div>
          <div v-else class="flex flex-col items-center gap-3 px-6 py-16 text-center">
            <IconCalendarEvent :size="32" stroke-width="1.5" class="text-accent" aria-hidden="true" />
            <p class="max-w-md text-sm leading-relaxed text-text-muted sm:text-base">{{ $t("booking.pending") }}</p>
          </div>
        </ClientOnly>
      </div>
    </section>

    <!-- <section class="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
      <div class="flex flex-col items-center gap-6 rounded-2xl border border-border bg-surface p-8 text-center sm:p-10">
        <SectionHeading
          :eyebrow="$t('booking.consent.eyebrow')"
          :title="$t('booking.consent.title')"
          :subtitle="$t('booking.consent.text')"
          align="center"
        />
        <AppButton :href="imageConsentUrl" variant="secondary">
          <IconDownload :size="16" :stroke-width="1.8" aria-hidden="true" />
          {{ $t("booking.consent.cta") }}
        </AppButton>
      </div>
    </section> -->
  </div>
</template>

<script setup lang="ts">
import { IconCalendarEvent, IconDownload } from "@tabler/icons-vue";
import AppButton from "~/components/ui/AppButton.vue";
import SectionHeading from "~/components/ui/SectionHeading.vue";

const imageConsentUrl = useRuntimeConfig().public.imageConsent as string;

const widgetFailed = ref(false);

useHead({
  title: "Zapisy i cennik - Soft Loft",
  meta: [
    {
      name: "description",
      content: "Zarezerwuj trening pilates reformer w Soft Loft przez aplikację Fitssey i sprawdź cennik wejść oraz karnetów.",
    },
  ],
});

onMounted(() => {
  document.getElementById("fitssey-loader")?.remove();
  document.querySelectorAll('script[src*="app.fitssey.com"]').forEach((el) => el.remove());
  const win = window as unknown as { lb?: unknown; FitsseyWidget?: unknown };
  delete win.lb;
  delete win.FitsseyWidget;

  const script = document.createElement("script");
  script.id = "fitssey-loader";
  script.src = "/scripts/fitssey.js";
  script.async = true;
  script.onerror = () => {
    widgetFailed.value = true;
  };

  document.body.appendChild(script);
});
</script>
