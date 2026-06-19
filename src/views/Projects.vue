<script setup lang="ts">
import { computed, ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'
import { Filter } from 'lucide-vue-next'

const visibleProjects = projects.filter(p => p.visible).sort((a, b) => {
  if (a.status === '已上线' && b.status !== '已上线') return -1;
  if (a.status !== '已上线' && b.status === '已上线') return 1;
  return 0;
})

const filterOptions = ['全部', '已上线', '往期项目']
const activeFilter = ref('全部')

const filteredProjects = computed(() => {
  if (activeFilter.value === '全部') return visibleProjects
  
  if (activeFilter.value === '已上线') {
    return visibleProjects.filter(p => p.status === '已上线')
  }
  if (activeFilter.value === '往期项目') {
    return visibleProjects.filter(p => p.status === '往期项目')
  }
  return visibleProjects
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="mb-8 text-center">
      <h1 class="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-4">项目成果</h1>
      <p class="text-xl text-slate-600 dark:text-slate-400">
        研究与实践并重，展示部分已上线和正在研究中的开发成果。
      </p>
    </div>

    <!-- Filters -->
    <div class="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
      <div class="flex items-center text-slate-600 dark:text-slate-400 font-medium">
        <Filter :size="18" class="mr-2" />
        <span class="mr-4">过滤:</span>
        <div class="flex flex-wrap gap-2">
          <button 
            v-for="filter in filterOptions" 
            :key="filter"
            @click="activeFilter = filter"
            :class="[
              'px-4 py-1.5 rounded-full text-sm font-medium transition-colors border',
              activeFilter === filter 
                ? 'bg-blue-600 text-white border-blue-600 dark:bg-blue-500 dark:border-blue-500' 
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-700'
            ]"
          >
            {{ filter }}
          </button>
        </div>
      </div>
      <div class="text-sm text-slate-500 dark:text-slate-400">
        共显示 {{ filteredProjects.length }} 个项目
      </div>
    </div>

    <!-- Mobile Specific Section for Mobile-Adapted Projects -->
    <div class="block sm:hidden mb-10" v-if="activeFilter === '全部'">
      <div class="flex items-center mb-4">
        <h2 class="text-lg font-bold text-slate-900 dark:text-white">📱 移动端专属适配</h2>
        <div class="ml-4 flex-1 h-px bg-slate-200 dark:bg-slate-700"></div>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <ProjectCard 
          v-for="project in visibleProjects.filter(p => ['exam-assistant', 'esp32-seat', 'flink-bus-prediction'].includes(p.id))" 
          :key="'mobile-' + project.id" 
          :project="project" 
        />
      </div>
      
      <div class="flex items-center mb-4 mt-10">
        <h2 class="text-lg font-bold text-slate-900 dark:text-white">💻 全部项目库</h2>
        <div class="ml-4 flex-1 h-px bg-slate-200 dark:bg-slate-700"></div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
      <ProjectCard 
        v-for="project in filteredProjects" 
        :key="project.id" 
        :project="project" 
      />
    </div>
    
    <!-- Empty State -->
    <div v-if="filteredProjects.length === 0" class="text-center py-20 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 mt-8">
      <p class="text-slate-500 dark:text-slate-400 text-lg">没有找到符合该状态的项目。</p>
      <button @click="activeFilter = '全部'" class="mt-4 text-blue-600 dark:text-blue-400 font-medium hover:underline">
        清除过滤条件
      </button>
    </div>
  </div>
</template>
