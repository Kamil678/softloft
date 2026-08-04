<template>
  <div>
    <Hero
      :eyebrow="$t('home.heroEyebrow')"
      :title="$t('home.heroTitle')"
      :subtitle="$t('home.heroSubtitle')"
      :cta-label="$t('home.heroCta')"
      :cta-href="fitsseyUrl"
      image="/images/1784871507821.png"
      image-alt="Loftowe wnętrze studia pilates z reformerami"
    />

    <!-- <section class="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
      <SectionHeading :title="$t('home.usp.title')" align="center" class="mx-auto" />
      <div class="mt-10 grid gap-6 sm:grid-cols-3">
        <Card v-for="item in uspItems" :key="item.title" variant="surface" class="text-center">
          <p class="font-heading text-lg font-medium text-text">{{ item.title }}</p>
          <p class="mt-2 text-sm leading-relaxed text-text-muted">{{ item.text }}</p>
        </Card>
      </div>
    </section> -->

    <section class="max-w-7xl mx-auto px-4 py-16 sm:py-20 sm:px-6">
      <div class="mx-auto grid items-center gap-8 sm:grid-cols-2 sm:gap-10 lg:gap-16">
        <div class="aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
          <img
            src="/images/pilates-na-reformerze.jpg"
            alt="Wnętrze studia Soft Loft z reformerem pilates"
            class="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <SectionHeading
            :eyebrow="$t('home.aboutTeaser.eyebrow')"
            :title="$t('home.aboutTeaser.title')"
            :subtitle="$t('home.aboutTeaser.text')"
            align="left"
          />
          <ul class="mt-6 flex flex-col gap-3">
            <li v-for="item in aboutTeaserItems" :key="item" class="flex items-start gap-3">
              <IconCircleCheck class="mt-0.5 h-5 w-5 shrink-0 text-accent" stroke-width="1.75" aria-hidden="true" />
              <span class="text-sm leading-relaxed text-text sm:text-base">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

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
          <AppButton to="/o-studio" variant="outline">
            {{ $t("home.faqTeaser.cta") }}
          </AppButton>
        </div>
      </div>
    </section>

    <FinalCta
      :title="$t('home.finalCta.title')"
      :subtitle="$t('home.finalCta.subtitle')"
      :primary-label="$t('home.finalCta.primaryCta')"
      primary-href="/zapisy"
      :secondary-label="$t('home.finalCta.secondaryCta')"
      secondary-href="/oferta#cennik"
    />
  </div>
</template>

<script setup lang="ts">
import { IconCircleCheck } from "@tabler/icons-vue";
import AppButton from "~/components/ui/AppButton.vue";
import Card from "~/components/ui/Card.vue";
import SectionHeading from "~/components/ui/SectionHeading.vue";
import faqData from "~/data/faq.json";

const { tm, rt } = useI18n();
const { public: publicConfig } = useRuntimeConfig();
const fitsseyUrl = publicConfig.fitsseyUrl as string;

const promoOpen = ref(false);

const uspItems = computed(() =>
  (tm("home.usp.items") as Array<{ title: string; text: string }>).map((item) => ({
    title: rt(item.title),
    text: rt(item.text),
  })),
);

const aboutTeaserItems = computed(() => (tm("home.aboutTeaser.items") as string[]).map((item) => rt(item)));

const faqTeaserItems = faqData.slice(0, 3);

useHead({
  title: "Soft Loft — Pilates Reformer Studio w Krakowie",
  meta: [
    {
      name: "description",
      content:
        "Soft Loft — kameralne Pilates Reformer Studio na Białym Prądniku w Krakowie. Precyzja ruchu, loftowy design, treningi na reformerach.",
    },
  ],
});
</script>
