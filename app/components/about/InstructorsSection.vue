<template>
  <section class="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-20">
    <SectionHeading
      :eyebrow="$t('about.instructors.eyebrow')"
      :title="$t('about.instructors.title')"
      align="center"
      class="mx-auto text-center"
    />

    <div
      v-if="instructors.length"
      class="mt-12 flex flex-col items-center gap-6 sm:grid sm:justify-center sm:[grid-template-columns:repeat(auto-fit,minmax(280px,336px))]"
    >
      <InstructorCard
        v-for="(instructor, idx) in instructors"
        :key="instructor.name"
        v-bind="instructor"
        :index="idx + 1"
        class="w-4/5 sm:w-full"
      />
    </div>

    <div v-else class="mx-auto mt-12 max-w-xl rounded-2xl bg-surface p-8 text-center sm:p-12">
      <IconUsersGroup :size="32" stroke-width="1.5" class="mx-auto text-accent" aria-hidden="true" />
      <h3 class="mt-4 font-heading text-xl font-medium text-text sm:text-2xl">{{ $t("about.instructors.searchingTitle") }}</h3>
      <p class="mt-3 text-sm leading-relaxed text-text-muted sm:text-base">{{ $t("about.instructors.searchingText") }}</p>

      <div class="mt-6 border-t border-border pt-6">
        <p class="text-sm leading-relaxed text-text sm:text-base">{{ $t("about.instructors.applyText") }}</p>
        <AppButton :href="emailHref" variant="outline" class="mt-5">
          {{ $t("about.instructors.applyCta") }}
        </AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IconUsersGroup } from "@tabler/icons-vue";
import AppButton from "~/components/ui/AppButton.vue";
import SectionHeading from "~/components/ui/SectionHeading.vue";
import instructors from "~/data/instructors.json";
import InstructorCard from "./InstructorCard.vue";

const { public: publicConfig } = useRuntimeConfig();
const emailHref = publicConfig.emailHref as string;
</script>
