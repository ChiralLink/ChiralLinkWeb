<template>
  <div class="min-h-screen flex flex-col px-4 pt-2">
    <header class="fixed top-3 left-0 z-50 w-full px-4"> <!-- 添加 w-full 类 -->
      <nav class="float-card rounded-xl w-full px-4"> <!-- 添加 w-full 类 -->
        <div class="flex justify-between h-16 items-center">
          <div class="flex-shrink-0">
            <span class="text-xl font-bold text-indigo-600">ChiralLink</span>
          </div>
        </div>
      </nav>
    </header>
    
    <main class="flex-1 mt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <slot />
      </div>
    </main>
  </div>
</template>

<style lang='scss' scoped>
main {
  padding-top: 4rem;
}
</style>