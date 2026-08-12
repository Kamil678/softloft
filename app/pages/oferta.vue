<template>
  <div>
    <section class="mx-auto max-w-4xl px-4 pt-16 pb-10 text-center sm:px-6 sm:pt-24 sm:pb-14">
      <SectionHeading :eyebrow="$t('offer.eyebrow')" :title="$t('offer.title')" :subtitle="$t('offer.subtitle')" align="center" class="mx-auto" />
    </section>

    <ClassesSection />

    <PricingSection />

    <section id="faq" class="scroll-mt-24 bg-surface px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading
        :eyebrow="$t('offer.faqSection.eyebrow')"
        :title="$t('offer.faqSection.title')"
        :subtitle="$t('offer.faqSection.subtitle')"
        align="center"
        class="mx-auto text-center"
      />
      <div class="mt-12">
        <FaqAccordion :items="faqData" />
      </div>
    </section>

    <FinalCta
      :title="$t('offer.finalCta.title')"
      :subtitle="$t('offer.finalCta.subtitle')"
      :primary-label="$t('offer.finalCta.primaryCta')"
      primary-href="/zapisy"
      :secondary-label="$t('offer.finalCta.secondaryCta')"
      secondary-href="/kontakt"
    />
  </div>
</template>

<script setup lang="ts">
import ClassesSection from "~/components/offer/ClassesSection.vue";
import FaqAccordion from "~/components/offer/FaqAccordion.vue";
import PricingSection from "~/components/offer/PricingSection.vue";
import FinalCta from "~/components/ui/FinalCta.vue";
import SectionHeading from "~/components/ui/SectionHeading.vue";
import faqData from "~/data/faq.json";

useHead({
  title: "Oferta - Soft Loft",
  meta: [{ name: "description", content: "Zajęcia grupowe, duo i priv na reformerach oraz cennik studia Soft Loft w Krakowie." }],
});
</script>
