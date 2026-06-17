<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'

const router = useRouter()
const route = useRoute()
const isMenuOpen = ref(false)

const navLinks = [
  { name: '首页', path: '/' },
  { name: '项目成果', path: '/projects' },
  { name: '技术栈', path: '/skills' },
  { name: '成长经历', path: '/timeline' },
  { name: '关于我', path: '/about' },
  { name: '联系我', path: '/contact' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800 shrink-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-row-reverse md:flex-row justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center cursor-pointer" @click="router.push('/')">
          <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">
            Junyu.
          </span>
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex space-x-8 items-center">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path" 
            :to="link.path"
            :class="[
              'text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400',
              route.path === link.path ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300'
            ]"
          >
            {{ link.name }}
          </router-link>
        </nav>

        <div class="flex items-center md:hidden space-x-4">
          <button @click="toggleMenu" class="text-slate-500 dark:text-slate-400 focus:outline-none">
            <X v-if="isMenuOpen" :size="24" />
            <Menu v-else :size="24" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Nav -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-lg">
        <div class="px-4 pt-2 pb-6 space-y-1">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path" 
            :to="link.path"
            @click="isMenuOpen = false"
            :class="[
              'block px-3 py-3 rounded-md text-base font-medium',
              route.path === link.path 
                ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400'
            ]"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>
