<template>
  <div>
    <section class="mx-auto max-w-4xl px-4 pt-16 pb-10 text-center sm:px-6 sm:pt-24 sm:pb-14">
      <SectionHeading
        :eyebrow="$t('reviews.eyebrow')"
        :title="$t('reviews.title')"
        :subtitle="$t('reviews.subtitle')"
        align="center"
        class="mx-auto"
      />
    </section>

    <section class="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
      <div v-if="reviews.length === 0" class="mx-auto max-w-md text-center">
        <p class="text-sm leading-relaxed text-text-muted sm:text-base">{{ $t("reviews.empty") }}</p>
        <AppButton to="/zapisy" variant="primary" class="mt-8">
          {{ $t("reviews.emptyCta") }}
        </AppButton>
      </div>

      <template v-else>
        <div class="mx-auto grid gap-10 sm:grid-cols-5 sm:items-center lg:gap-16">
          <div class="mx-auto aspect-[4/5] w-2/3 overflow-hidden rounded-xl shadow-lg sm:col-span-2 sm:w-full">
            <img
              src="/images/pilates-reformer-stretch.webp"
              alt="Trening pilates na reformerze w Soft Loft"
              class="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div class="flex flex-col items-center gap-6 text-center sm:col-span-3 sm:items-start sm:text-left">
            <ReviewsSummary :reviews="reviews" />
            <div class="flex items-center gap-2 text-xs font-medium tracking-wide text-text-muted uppercase">
              <IconBrandGoogle :size="16" stroke-width="1.8" class="text-accent" aria-hidden="true" />
              <span>Opinie zweryfikowane przez Google</span>
            </div>
            <ReviewCard v-bind="featured" class="w-full text-left" />
          </div>
        </div>

        <div v-if="rest.length" class="mt-14">
          <div class="flex justify-center">
            <div
              ref="railEl"
              tabindex="0"
              role="group"
              :aria-label="$t('reviews.railAriaLabel')"
              class="no-scrollbar flex w-fit max-w-full snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ReviewCard v-for="r in rest" :key="r.name" v-bind="r" class="w-[320px] shrink-0 snap-start sm:w-[380px]" />
            </div>
          </div>

          <div v-if="hasOverflow" class="mt-6 flex justify-center gap-2">
            <button
              type="button"
              aria-label="Poprzednia opinia"
              class="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-accent hover:text-accent"
              @click="scrollRail(-1)"
            >
              <IconChevronLeft :size="18" stroke-width="1.9" />
            </button>
            <button
              type="button"
              aria-label="Następna opinia"
              class="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-accent hover:text-accent"
              @click="scrollRail(1)"
            >
              <IconChevronRight :size="18" stroke-width="1.9" />
            </button>
          </div>
        </div>

        <div class="mt-14 text-center">
          <AppButton :href="googleReviewsUrl" variant="outline" class="group/btn">
            {{ $t("reviews.moreCta") }}
            <IconArrowUpRight
              :size="16"
              stroke-width="1.9"
              class="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
          </AppButton>
        </div>
      </template>
    </section>
  </div>
</template>

<script setup lang="ts">
import { IconArrowUpRight, IconBrandGoogle, IconChevronLeft, IconChevronRight } from "@tabler/icons-vue";
import AppButton from "~/components/ui/AppButton.vue";
import SectionHeading from "~/components/ui/SectionHeading.vue";
import reviewsData from "~/data/reviews.json";
import ReviewCard from "./ReviewCard.vue";
import ReviewsSummary from "./ReviewsSummary.vue";

const reviews = reviewsData;
const featured = computed(() => reviews[0]!);
const rest = computed(() => reviews.slice(1));

const { public: publicConfig } = useRuntimeConfig();
const googleReviewsUrl = publicConfig.googleReviewsUrl as string;

const railEl = ref<HTMLElement | null>(null);
const hasOverflow = ref(false);

function checkOverflow() {
  if (!railEl.value) return;
  hasOverflow.value = railEl.value.scrollWidth > railEl.value.clientWidth + 1;
}

function scrollRail(direction: number) {
  if (!railEl.value) return;
  railEl.value.scrollBy({ left: direction * railEl.value.clientWidth * 0.9, behavior: "smooth" });
}

onMounted(() => {
  checkOverflow();
  window.addEventListener("resize", checkOverflow);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkOverflow);
});
</script>
