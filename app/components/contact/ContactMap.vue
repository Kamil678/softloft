<template>
  <iframe
    title="Soft Loft - mapa"
    class="h-full w-full"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    :src="mapSrc"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  address: string
}>()

const mapSrc = computed(() => `https://www.google.com/maps?q=${encodeURIComponent(props.address)}&output=embed`)
</script>
