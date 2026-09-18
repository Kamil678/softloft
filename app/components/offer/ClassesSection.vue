<template>
  <section class="mx-auto max-w-7xl px-4 mb-10 md:px-6 md:mb-16">
    <div class="mx-auto grid w-full max-w-md gap-6 md:max-w-none md:grid-cols-3">
      <ClassCard
        v-for="item in classes"
        :key="item.slug"
        :name="item.name"
        :description="item.description"
        :billing-label="item.billingLabel"
        :details-cta="$t('offer.classesSection.detailsCta')"
        :image="item.image"
        :image-position="item.imagePosition"
        @details="openModal(item)"
      />
    </div>

    <Modal v-model="modalOpen" :title="selected?.name">
      <div v-if="selected" class="space-y-6">
        <p class="text-sm leading-relaxed text-text-muted md:text-base">{{ selected.details }}</p>

        <dl class="flex flex-col gap-4 border-t border-border pt-5">
          <div v-for="fact in facts" :key="fact.label" class="flex gap-3">
            <span class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
              <component :is="fact.icon" :size="16" stroke-width="1.8" aria-hidden="true" />
            </span>
            <div>
              <dt class="text-xs font-semibold tracking-[0.1em] text-accent-strong uppercase">{{ fact.label }}</dt>
              <dd class="mt-1 text-sm leading-relaxed text-text md:text-base">{{ fact.value }}</dd>
            </div>
          </div>
        </dl>
      </div>
    </Modal>
  </section>
</template>

<script setup lang="ts">
import { IconGauge, IconListCheck, IconUsers } from "@tabler/icons-vue";
import classesData from "~/data/classes.json";
import ClassCard from "./ClassCard.vue";
import Modal from "~/components/ui/Modal.vue";

type ClassItem = (typeof classesData)[number];

const classes = classesData;

const modalOpen = ref(false);
const selected = ref<ClassItem | null>(null);

const { t } = useI18n();

const facts = computed(() => {
  if (!selected.value) return [];
  return [
    { label: t("offer.classesSection.modalLevel"), value: selected.value.level, icon: IconGauge },
    { label: t("offer.classesSection.modalForWho"), value: selected.value.forWho, icon: IconUsers },
    { label: t("offer.classesSection.modalIncludes"), value: selected.value.includes, icon: IconListCheck },
  ];
});

function openModal(item: ClassItem) {
  selected.value = item;
  modalOpen.value = true;
}
</script>
