<script setup lang="ts">
defineProps<{
  title: string
  skills: string[]
  icon?: any
}>()
</script>

<template>
  <div class="card p-5 sm:p-6 h-full flex flex-col hover:border-blue-200 dark:hover:border-blue-800/50">
    <div class="flex items-center mb-4">
      <div v-if="icon" class="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-4">
        <component :is="icon" :size="20" />
      </div>
      <h3 class="text-lg font-bold text-slate-900 dark:text-white">{{ title }}</h3>
    </div>
    
    <div class="mt-2 text-slate-600 dark:text-slate-400 leading-relaxed text-[13px] sm:text-sm">
      <template v-for="(skill, index) in skills" :key="skill">
        <span class="font-medium text-slate-800 dark:text-slate-200">{{ skill }}</span>
        <span v-if="index < skills.length - 1" class="mx-1.5 sm:mx-2 text-slate-300 dark:text-slate-700">/</span>
      </template>
    </div>
  </div>
</template>
