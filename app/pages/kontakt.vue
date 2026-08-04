<template>
  <div>
    <section class="mx-auto max-w-4xl px-4 pt-16 pb-10 text-center sm:px-6 sm:pt-24 sm:pb-14">
      <SectionHeading
        :eyebrow="$t('contact.eyebrow')"
        :title="$t('contact.title')"
        :subtitle="$t('contact.subtitle')"
        align="center"
        class="mx-auto"
      />
    </section>

    <section class="mx-auto max-w-7xl px-4 pt-8 sm:px-6">
      <div class="grid gap-5 sm:grid-cols-3">
        <ContactAddressCard />
        <ContactInfoCard />
        <ContactHoursCard />
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 mt-8 sm:px-6">
      <div class="h-[340px] overflow-hidden rounded-2xl border border-border shadow-lg sm:h-[420px]">
        <ContactMap :address="address" />
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 mt-6 sm:px-6">
      <ContactParking />
    </section>

    <section class="mx-auto max-w-7xl px-4 mt-8 mb-24 sm:px-6">
      <ContactCta />
    </section>
  </div>
</template>

<script setup lang="ts">
import ContactAddressCard from "~/components/contact/ContactAddressCard.vue";
import ContactCta from "~/components/contact/ContactCta.vue";
import ContactHoursCard from "~/components/contact/ContactHoursCard.vue";
import ContactInfoCard from "~/components/contact/ContactInfoCard.vue";
import ContactMap from "~/components/contact/ContactMap.vue";
import ContactParking from "~/components/contact/ContactParking.vue";
import SectionHeading from "~/components/ui/SectionHeading.vue";

useHead({
  title: "Kontakt — Soft Loft",
  meta: [{ name: "description", content: "Kontakt i adres studia Soft Loft — Pilates Reformer Studio, ul. Glogera 21, Kraków." }],
});

const { public: publicConfig } = useRuntimeConfig();
const address = publicConfig.address as string;
</script>
