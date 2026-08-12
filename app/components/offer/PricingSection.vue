<template>
  <section id="cennik" class="mx-auto max-w-7xl scroll-mt-24 px-4 pb-20 md:px-6 md:pb-24">
    <SectionHeading
      :eyebrow="$t('offer.pricingSection.eyebrow')"
      :title="$t('offer.pricingSection.title')"
      align="center"
      class="mx-auto text-center"
    />

    <div class="mx-auto mt-10 grid w-full max-w-md items-stretch gap-6 md:max-w-none md:grid-cols-3">
      <PricingCard v-for="item in pricing.items" :key="item.name" v-bind="item" />
    </div>
  </section>
</template>

<script setup lang="ts">
import pricing from "~/data/pricing.json";
import PricingCard from "./PricingCard.vue";
import SectionHeading from "~/components/ui/SectionHeading.vue";
</script>
