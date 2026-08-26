<template>
  <section class="max-w-7xl mx-auto px-4 py-16 sm:py-20 sm:px-6">
    <div class="mx-auto grid items-center gap-8 sm:grid-cols-2 sm:gap-10 lg:gap-16">
      <div class="mx-auto aspect-[4/5] w-2/3 overflow-hidden rounded-xl shadow-lg sm:w-full">
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
</template>

<script setup lang="ts">
import { IconCircleCheck } from "@tabler/icons-vue";
import SectionHeading from "../ui/SectionHeading.vue";

const { tm, rt } = useI18n();
const aboutTeaserItems = computed(() => (tm("home.aboutTeaser.items") as any[]).map((item) => rt(item)));
</script>
