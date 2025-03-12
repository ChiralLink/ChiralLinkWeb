<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex-shrink-0">
            <span class="text-xl font-bold text-indigo-600">ChiralLink</span>
          </div>
          <div class="hidden md:flex space-x-8">
            <a href="#" class="text-gray-700 hover:text-indigo-600 transition-colors">首页</a>
            <a href="#" class="text-gray-700 hover:text-indigo-600 transition-colors">产品</a>
            <a href="#" class="text-gray-700 hover:text-indigo-600 transition-colors">关于</a>
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

<style scoped>
main {
  padding-top: 4rem;
}
</style>