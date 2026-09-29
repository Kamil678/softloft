<template>
  <NuxtLayout>
    <section class="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 sm:py-32">
      <SectionHeading
        :eyebrow="is404 ? '404' : $t('error.eyebrow')"
        :title="is404 ? $t('error.notFoundTitle') : $t('error.title')"
        :subtitle="is404 ? $t('error.notFoundText') : $t('error.text')"
        align="center"
      />
      <AppButton variant="primary" class="mt-8" @click="clearError({ redirect: '/' })">{{ $t("error.cta") }}</AppButton>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";
import AppButton from "~/components/ui/AppButton.vue";
import SectionHeading from "~/components/ui/SectionHeading.vue";

const props = defineProps<{ error: NuxtError }>();

const is404 = computed(() => props.error.statusCode === 404);

useHead({
  title: is404.value ? "Nie znaleziono strony - Soft Loft" : "Błąd - Soft Loft",
  meta: [{ name: "robots", content: "noindex" }],
});
</script>
