<template>
  <div class="flex min-h-screen flex-col bg-bg">
    <LayoutAppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <LayoutAppFooter />
  </div>
</template>
