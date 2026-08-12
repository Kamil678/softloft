<template>
  <section class="bg-surface px-6 py-16 sm:px-10 sm:py-24">
    <div class="mx-auto max-w-6xl">
      <SectionHeading
        :eyebrow="$t('home.faqTeaser.eyebrow')"
        :title="$t('home.faqTeaser.title')"
        align="center"
        class="mx-auto text-center"
      />
      <div class="mt-12 grid gap-6 sm:grid-cols-3">
        <div
          v-for="(item, index) in faqTeaserItems"
          :key="item.question"
          class="rounded-2xl bg-bg p-8 shadow-sm ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <span
            class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent font-heading text-sm font-semibold text-accent-text"
          >
            {{ index + 1 }}
          </span>
          <p class="mt-5 font-heading text-lg font-medium text-text">{{ item.question }}</p>
          <p class="mt-3 text-sm leading-relaxed text-text-muted">{{ item.answer }}</p>
        </div>
      </div>
      <div class="mt-12 text-center">
        <AppButton to="/oferta#faq" variant="outline">
          {{ $t("home.faqTeaser.cta") }}
        </AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from "../ui/AppButton.vue";
import SectionHeading from "../ui/SectionHeading.vue";
import faqData from "~/data/faq.json";

const faqTeaserItems = faqData.slice(0, 3);
</script>
