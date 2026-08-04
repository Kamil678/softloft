<template>
  <Teleport to="body">
    <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-header/70" @click="close" />

      <div
        ref="panelRef"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="title ? titleId : undefined"
        tabindex="-1"
        class="relative w-full max-w-lg rounded-lg border border-border bg-bg p-6 sm:p-8"
        @keydown.esc="close"
      >
        <button
          type="button"
          aria-label="Zamknij"
          class="absolute top-4 right-4 text-text-muted transition-colors hover:text-text"
          @click="close"
        >
          <svg viewBox="0 0 24 24" fill="none" class="h-5 w-5" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
          </svg>
        </button>

        <h3 v-if="title" :id="titleId" class="font-heading text-xl font-medium text-text pr-8">
          {{ title }}
        </h3>

        <div class="mt-4">
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: boolean; title?: string }>()
const emit = defineEmits<{ 'update:modelValue': [boolean] }>()

const panelRef = ref<HTMLElement | null>(null)
const titleId = `modal-title-${Math.random().toString(36).slice(2, 9)}`

function close() {
  emit('update:modelValue', false)
}

watch(
  () => props.modelValue,
  async (open) => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (open) {
      await nextTick()
      panelRef.value?.focus()
    }
  }
)

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})
</script>
