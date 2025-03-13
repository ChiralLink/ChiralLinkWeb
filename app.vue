<template>
  <nuxt-layout>
    <nuxt-page></nuxt-page> 
  </nuxt-layout>
</template>

<script setup>
provideHeadlessUseId(() => useId())

</script>
<style lang="scss">
body {
  background-color: $background-1;
}
* {
  @extend .text-default;
}
</style>
