<template>
  <section class="bg-header px-4 py-20 sm:px-6 sm:py-28">
    <div class="mx-auto max-w-3xl text-center">
      <IconQuote :size="32" stroke-width="1.5" class="mx-auto text-accent/60" aria-hidden="true" />
      <p class="mt-6 font-heading text-[clamp(1.5rem,3.2vw,2.5rem)] leading-snug font-medium text-balance text-header-text">
        {{ $t("about.manifesto.text") }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IconQuote } from "@tabler/icons-vue";
</script>
