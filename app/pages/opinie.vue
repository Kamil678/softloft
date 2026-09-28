<template>
  <div>
    <ReviewsSection v-if="reviewsEnabled" />
    <section v-else class="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 sm:py-32">
      <SectionHeading :eyebrow="$t('reviews.eyebrow')" :title="$t('reviews.title')" :subtitle="$t('reviews.comingSoon')" align="center" />
      <AppButton to="/" class="mt-8">{{ $t("reviews.comingSoonCta") }}</AppButton>
    </section>
  </div>
</template>

<script setup lang="ts">
import ReviewsSection from "~/components/reviews/ReviewsSection.vue";
import AppButton from "~/components/ui/AppButton.vue";
import SectionHeading from "~/components/ui/SectionHeading.vue";

// Opinie tymczasowo ukryte - ustawić na true (i odkomentować linki w AppHeader/AppFooter), żeby przywrócić
const reviewsEnabled = false;

useHead({
  title: "Opinie - Soft Loft",
  meta: [
    { name: "description", content: "Opinie klientów Soft Loft - Pilates Reformer Studio w Krakowie." },
    ...(reviewsEnabled ? [] : [{ name: "robots", content: "noindex" }]),
  ],
});
</script>
