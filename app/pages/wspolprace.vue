<template>
  <div>
    <section class="mx-auto max-w-4xl px-4 pt-16 pb-10 text-center sm:px-6 sm:pt-24 sm:pb-14">
      <SectionHeading
        :eyebrow="$t('partners.eyebrow')"
        :title="$t('partners.title')"
        :subtitle="$t('partners.subtitle')"
        align="center"
        class="mx-auto"
      />
    </section>

    <section class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="grid gap-5 sm:grid-cols-3">
        <PartnerCard v-for="partner in partners" :key="partner.name" v-bind="partner" />
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 pt-8 pb-24 sm:px-6">
      <PartnersCta />
    </section>
  </div>
</template>

<script setup lang="ts">
import PartnerCard from "~/components/partners/PartnerCard.vue";
import PartnersCta from "~/components/partners/PartnersCta.vue";
import SectionHeading from "~/components/ui/SectionHeading.vue";
import partners from "~/data/partners.json";

useHead({
  title: "Współprace - Soft Loft",
  meta: [{ name: "description", content: "Partnerzy i dostawcy Soft Loft - Pilates Reformer Studio w Krakowie." }],
});
</script>
