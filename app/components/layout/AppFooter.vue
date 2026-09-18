<template>
  <footer class="bg-header text-footer-text">
    <div class="mx-auto flex flex-col justify-between max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:flex-row">
      <div class="flex flex-col items-center sm:items-start">
        <NuxtLink to="/" class="inline-flex">
          <AppLogo size="sm" />
        </NuxtLink>
        <p class="mt-5 max-w-sm text-sm text-footer-text/70 max-sm:text-center">{{ $t("footer.tagline") }}</p>

        <div class="mt-6 flex items-center gap-3">
          <a
            :href="instagramUrl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            class="inline-flex text-accent transition-all duration-200 hover:-translate-y-1 hover:scale-110 hover:text-accent-hover"
          >
            <IconBrandInstagram :size="36" :stroke-width="1.5" />
          </a>
          <a
            :href="facebookUrl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            class="inline-flex text-accent transition-all duration-200 hover:-translate-y-1 hover:scale-110 hover:text-accent-hover"
          >
            <IconBrandFacebook :size="36" :stroke-width="1.5" />
          </a>
        </div>

        <AppButton variant="outline" class="mt-8" @click="scrollToTop">
          <IconChevronUp :size="16" :stroke-width="1.8" />
          {{ $t("footer.backToTop") }}
        </AppButton>
      </div>

      <div class="flex flex-col gap-10 sm:flex-row">
        <div class="flex flex-col items-center sm:items-start">
          <p class="text-sm font-semibold tracking-[0.2em] text-footer-text/50 uppercase">{{ $t("footer.documents") }}</p>
          <div class="mt-5 flex flex-col items-center gap-3 text-sm text-footer-text/70 sm:items-start">
            <a
              href="/docs/Regulamin_Soft_Loft_Pilates.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm transition-colors hover:text-accent-hover"
            >
              {{ $t("footer.terms") }}
            </a>
            <a
              href="/docs/Polityka_Prywatnosci_i_Monitoringu_Soft_Loft.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm transition-colors hover:text-accent-hover"
            >
              {{ $t("footer.privacyPolicy") }}
            </a>
          </div>
        </div>
        <div class="flex flex-col items-center sm:items-start">
          <p class="text-sm font-semibold tracking-[0.2em] text-footer-text/50 uppercase">{{ $t("footer.contact") }}</p>
          <div class="mt-5 flex flex-col items-center gap-3 text-sm text-footer-text/70 sm:items-start">
            <a :href="phoneHref" class="flex items-center gap-2.5 text-sm transition-colors hover:text-accent-hover">
              <IconPhone :size="16" :stroke-width="1.6" class="shrink-0 text-accent" />
              <span>{{ phone }}</span>
            </a>
            <a :href="emailHref" class="flex items-center gap-2.5 text-sm transition-colors hover:text-accent-hover">
              <IconMail :size="16" :stroke-width="1.6" class="shrink-0 text-accent" />
              <span>{{ email }}</span>
            </a>
            <a
              :href="directionsUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-start gap-2.5 text-sm transition-colors hover:text-accent-hover"
            >
              <IconMapPin :size="16" :stroke-width="1.6" class="mt-0.5 shrink-0 text-accent" />
              <span>{{ address }}</span>
            </a>
          </div>
        </div>
        <div class="flex flex-col items-center sm:items-start">
          <p class="text-sm font-semibold tracking-[0.2em] text-footer-text/50 uppercase">{{ $t("footer.quickLinks") }}</p>
          <nav class="mt-5 flex flex-col items-center gap-3 sm:items-start">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="text-sm transition-colors hover:text-accent-hover"
              :class="isActive(link.to) ? 'text-accent underline underline-offset-4' : 'text-footer-text/70'"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>
        </div>
      </div>
    </div>

    <div class="bg-accent px-6 py-4 text-center text-xs text-accent-text sm:px-10">
      © {{ year }} Soft Loft. {{ $t("footer.rights") }} {{ $t("footer.credit") }}
      <a href="https://kamilpigulak.com" target="_blank" class="font-semibold underline-offset-2 hover:underline">Kamil Pigulak</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { IconBrandFacebook, IconBrandInstagram, IconChevronUp, IconMail, IconMapPin, IconPhone } from "@tabler/icons-vue";
import AppButton from "../ui/AppButton.vue";

const { t } = useI18n();
const route = useRoute();
const { public: publicConfig } = useRuntimeConfig();

const instagramUrl = publicConfig.instagramUrl as string;
const facebookUrl = publicConfig.facebookUrl as string;
const phone = publicConfig.phone as string;
const phoneHref = publicConfig.phoneHref as string;
const email = publicConfig.email as string;
const emailHref = publicConfig.emailHref as string;
const address = publicConfig.address as string;
const directionsUrl = publicConfig.directionsUrl as string;

const year = new Date().getFullYear();

const navLinks = computed(() => [
  { to: "/", label: t("nav.home") },
  { to: "/o-studio", label: t("nav.about") },
  { to: "/oferta", label: t("nav.offer") },
  { to: "/zapisy", label: t("nav.booking") },
  { to: "/opinie", label: t("nav.reviews") },
  { to: "/wspolprace", label: t("nav.partners") },
  { to: "/kontakt", label: t("nav.contact") },
]);

function isActive(to: string) {
  return to === "/" ? route.path === "/" : route.path.startsWith(to);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>
