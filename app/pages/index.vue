<template>
  <div>
    <Hero
      :eyebrow="$t('home.heroEyebrow')"
      :title="$t('home.heroTitle')"
      :subtitle="$t('home.heroSubtitle')"
      :cta-label="$t('home.heroCta')"
      cta-href="/zapisy"
      image="/images/pilates-reformers-studio-white.png"
      image-alt="Loftowe wnętrze studia pilates z reformerami"
    />

    <HomeBrandStatement />

    <HomeAboutTeaser />

    <HomeFaqTeaser />

    <FinalCta
      :title="$t('home.finalCta.title')"
      :subtitle="$t('home.finalCta.subtitle')"
      :primary-label="$t('home.finalCta.primaryCta')"
      primary-href="/zapisy"
      :secondary-label="$t('home.finalCta.secondaryCta')"
      secondary-href="/oferta#cennik"
    />
  </div>
</template>

<script setup lang="ts">
import FinalCta from "~/components/ui/FinalCta.vue";
import Hero from "~/components/home/Hero.vue";
import HomeAboutTeaser from "~/components/home/HomeAboutTeaser.vue";
import HomeBrandStatement from "~/components/home/HomeBrandStatement.vue";
import HomeFaqTeaser from "~/components/home/HomeFaqTeaser.vue";

useHead({
  title: "Soft Loft - Pilates Reformer Studio w Krakowie",
  meta: [
    {
      name: "description",
      content:
        "Soft Loft - kameralne Pilates Reformer Studio na Białym Prądniku w Krakowie. Precyzja ruchu, loftowy design, treningi na reformerach.",
    },
  ],
});
</script>
