<template>
  <header ref="headerRef" class="sticky top-0 z-40 bg-header text-header-text shadow-[0_8px_30px_-12px_rgba(0,0,0,0.55)]">
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
      <NuxtLink to="/" class="shrink-0" @click="closeMenu">
        <AppLogo size="sm" />
      </NuxtLink>

      <nav class="hidden items-center gap-8 lg:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="flex items-center gap-1.5 text-xs font-medium tracking-[0.12em] uppercase transition-colors hover:text-accent"
          :class="isActive(link.to) ? 'text-accent' : 'text-header-text'"
        >
          <span v-if="link.highlight" class="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {{ link.label }}
        </NuxtLink>
      </nav>

      <AppButton :href="fitsseyUrl" variant="primary" class="hidden lg:inline-flex">
        {{ $t("nav.cta") }}
      </AppButton>

      <button
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center text-header-text lg:hidden"
        :aria-label="menuOpen ? $t('nav.menuClose') : $t('nav.menuOpen')"
        aria-controls="mobile-nav"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <svg v-if="!menuOpen" viewBox="0 0 24 24" fill="none" class="h-6 w-6" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
        </svg>
        <svg v-else viewBox="0 0 24 24" fill="none" class="h-6 w-6" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <div
      v-if="menuOpen"
      id="mobile-nav"
      class="fixed inset-x-0 top-[88px] bottom-0 z-40 flex flex-col overflow-y-auto bg-header px-6 py-8 lg:hidden"
    >
      <nav class="flex flex-col gap-6">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="flex items-center gap-2 text-2xl font-medium transition-colors hover:text-accent"
          :class="isActive(link.to) ? 'text-accent' : 'text-header-text'"
          @click="closeMenu"
        >
          <span v-if="link.highlight" class="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          {{ link.label }}
        </NuxtLink>
      </nav>

      <AppButton :href="fitsseyUrl" variant="primary" class="mt-10 w-full" @click="closeMenu">
        {{ $t("nav.cta") }}
      </AppButton>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppButton from "../ui/AppButton.vue";

const route = useRoute();
const { t } = useI18n();
const { public: publicConfig } = useRuntimeConfig();
const fitsseyUrl = publicConfig.fitsseyUrl as string;

const menuOpen = ref(false);
const headerRef = ref<HTMLElement | null>(null);

const links = computed(() => [
  { to: "/", label: t("nav.home") },
  { to: "/o-studio", label: t("nav.about") },
  { to: "/oferta", label: t("nav.offer") },
  { to: "/zapisy", label: t("nav.booking"), highlight: true },
  { to: "/opinie", label: t("nav.reviews") },
  { to: "/wspolpraca", label: t("nav.partners") },
  { to: "/kontakt", label: t("nav.contact") },
]);

function isActive(to: string) {
  return to === "/" ? route.path === "/" : route.path.startsWith(to);
}

function closeMenu() {
  menuOpen.value = false;
}

watch(
  () => route.fullPath,
  () => closeMenu(),
);

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});

function handleKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") closeMenu();
}

function updateHeaderHeight() {
  if (headerRef.value) {
    document.documentElement.style.setProperty("--header-h", `${headerRef.value.offsetHeight}px`);
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("resize", updateHeaderHeight);
  updateHeaderHeight();
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
  window.removeEventListener("resize", updateHeaderHeight);
  document.body.style.overflow = "";
});
</script>
