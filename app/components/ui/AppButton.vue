<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener noreferrer' : undefined"
    :type="tag === 'button' ? (type ?? 'button') : undefined"
    class="inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-xs font-semibold tracking-[0.15em] uppercase transition-colors cursor-pointer"
    :class="variantClasses"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";

const props = withDefaults(
  defineProps<{
    variant?: "primary" | "secondary" | "ghost" | "outline";
    to?: string;
    href?: string;
    type?: "button" | "submit";
  }>(),
  { variant: "primary" },
);

const tag = computed(() => (props.href ? "a" : props.to ? NuxtLink : "button"));

const variantClasses = computed(() => {
  switch (props.variant) {
    case "secondary":
      return "border border-header text-header hover:bg-header hover:text-header-text";
    case "ghost":
      return "text-header-text hover:text-accent";
    case "outline":
      return "border border-current/20 hover:border-accent hover:text-accent";
    default:
      return "bg-accent text-accent-text hover:bg-accent-hover";
  }
});
</script>
