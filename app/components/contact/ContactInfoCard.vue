<template>
  <div class="rounded-2xl bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <span class="text-accent">
      <IconPhone :size="28" stroke-width="1.75" />
    </span>
    <p class="mt-4 text-lg font-medium text-text">{{ $t("contact.contactTitle") }}</p>
    <a href="mailto:soft.loft.pilates@gmail.com" class="mt-2 block text-sm text-text-muted transition-colors hover:text-accent"
      >soft.loft.pilates@gmail.com</a
    >
    <a href="tel:+48506448383" class="mt-1 block text-sm text-text-muted transition-colors hover:text-accent">{{ $t("contact.phone") }}</a>
    <div class="mt-4 flex items-center gap-3">
      <a
        :href="instagramUrl"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        class="inline-flex text-accent transition-all duration-200 hover:-translate-y-1 hover:scale-110 hover:text-accent-hover"
      >
        <IconBrandInstagram :size="22" :stroke-width="1.5" />
      </a>
      <a
        :href="facebookUrl"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        class="inline-flex text-accent transition-all duration-200 hover:-translate-y-1 hover:scale-110 hover:text-accent-hover"
      >
        <IconBrandFacebook :size="22" :stroke-width="1.5" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconBrandFacebook, IconBrandInstagram, IconPhone } from "@tabler/icons-vue";

const { public: publicConfig } = useRuntimeConfig();
const instagramUrl = publicConfig.instagramUrl as string;
const facebookUrl = publicConfig.facebookUrl as string;
</script>
