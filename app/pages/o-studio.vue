<template>
  <div>
    <AboutHero />
    <BenefitsList />

    <InstructorsSection />

    <section class="mx-auto max-w-7xl px-4 pb-10 text-center sm:px-6 sm:pb-20">
      <p class="text-sm leading-relaxed text-text-muted sm:text-base">{{ $t("about.closingCta.text") }}</p>
      <AppButton to="/zapisy" variant="primary" class="mt-6">{{ $t("about.closingCta.cta") }}</AppButton>
    </section>
  </div>
</template>

<script setup lang="ts">
import AboutHero from "~/components/about/AboutHero.vue";
import BenefitsList from "~/components/about/BenefitsList.vue";
import InstructorsSection from "~/components/about/InstructorsSection.vue";
import AppButton from "~/components/ui/AppButton.vue";

useHead({
  title: "O studio - Soft Loft",
  meta: [
    { name: "description", content: "Poznaj Soft Loft - filozofię, styl i instruktorów kameralnego studia pilates reformer w Krakowie." },
  ],
});
</script>
