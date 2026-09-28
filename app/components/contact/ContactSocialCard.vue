<template>
  <div class="rounded-2xl bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <span class="text-accent">
      <IconHeart :size="28" stroke-width="1.75" />
    </span>
    <p class="mt-4 text-lg font-medium text-text">{{ $t("contact.socialTitle") }}</p>
    <p class="mt-2 text-sm leading-relaxed text-text-muted">{{ $t("contact.socialText") }}</p>
    <div class="mt-4 flex flex-col gap-2">
      <a
        :href="instagramUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="group inline-flex items-center gap-2.5 text-sm text-text-muted transition-colors hover:text-accent"
      >
        <IconBrandInstagram :size="22" :stroke-width="1.5" class="text-accent transition-transform duration-200 group-hover:scale-110" />
        <span>Instagram</span>
      </a>
      <a
        :href="facebookUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="group inline-flex items-center gap-2.5 text-sm text-text-muted transition-colors hover:text-accent"
      >
        <IconBrandFacebook :size="22" :stroke-width="1.5" class="text-accent transition-transform duration-200 group-hover:scale-110" />
        <span>Facebook</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconBrandFacebook, IconBrandInstagram, IconHeart } from "@tabler/icons-vue";

const { public: publicConfig } = useRuntimeConfig();
const instagramUrl = publicConfig.instagramUrl as string;
const facebookUrl = publicConfig.facebookUrl as string;
</script>
