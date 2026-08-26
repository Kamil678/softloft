<template>
  <div>
    <AboutHero />
    <AboutStory />
    <BenefitsList />

    <div class="aspect-[21/9] overflow-hidden">
      <!-- TODO: podmienić na docelowe zdjęcie studia od klientki -->
      <img
        src="/images/pilates-reformer-couple.jpg"
        alt="Trening pilates na reformerach w Soft Loft"
        class="h-full w-full object-cover"
        loading="lazy"
      />
    </div>

    <AboutManifesto />
    <InstructorsSection />

    <section class="mx-auto max-w-7xl px-4 pb-16 text-center sm:px-6 sm:pb-20">
      <p class="text-sm leading-relaxed text-text-muted sm:text-base">{{ $t("about.closingCta.text") }}</p>
      <AppButton to="/zapisy" variant="primary" class="mt-6">{{ $t("about.closingCta.cta") }}</AppButton>
    </section>
  </div>
</template>

<script setup lang="ts">
import AboutHero from "~/components/about/AboutHero.vue";
import AboutManifesto from "~/components/about/AboutManifesto.vue";
import AboutStory from "~/components/about/AboutStory.vue";
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
