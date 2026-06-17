<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { ExternalLink, Github, FileText, ArrowRight, LayoutTemplate } from 'lucide-vue-next'
import type { Project } from '../data/projects'

const props = defineProps<{
  project: Project
}>()

const router = useRouter()

const viewDetail = () => {
  router.push(`/projects/${props.project.id}`)
}

const statusColor = computed(() => {
  if (props.project.status.includes('已上线')) return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50'
  if (props.project.status.includes('部署中') || props.project.status.includes('研究中')) return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800/50'
  if (props.project.status.includes('往期项目')) return 'bg-slate-100 text-slate-700 dark:bg-slate-800/50 dark:text-slate-400 border-slate-200 dark:border-slate-700/50'
  if (props.project.status.includes('持续迭代') || props.project.status.includes('开发中')) return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800/50'
  return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800/50'
})



const handleLinkClick = (e: Event, url: string, isAdapted: boolean) => {
  const isMobile = window.innerWidth < 640;
  if (isMobile && !isAdapted) {
    e.preventDefault();
    const proceed = window.confirm("💡 当前项目暂未做手机端适配，建议在电脑端访问以获得最佳体验。\n\n是否仍要继续前往？");
    if (proceed) {
      window.open(url, '_blank');
    }
  }
}

const mobileAdaptedIds = ['exam-assistant', 'esp32-seat', 'flink-bus-prediction']
const isMobileAdapted = computed(() => mobileAdaptedIds.includes(props.project.id))
</script>

<template>
  <div class="card flex flex-col h-full cursor-pointer group" @click="viewDetail">
    <div class="p-4 sm:p-6 flex-grow flex flex-col">
      <!-- Header -->
      <div class="flex justify-between items-start mb-3 sm:mb-4">
        <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          {{ project.name }}
        </h3>
        <span 
          :class="['px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium border whitespace-nowrap ml-2 sm:ml-3', statusColor]"
        >
          {{ project.status }}
        </span>
      </div>

      <!-- Meta info -->
      <div class="flex items-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 sm:mb-4 space-x-2 sm:space-x-4">
        <span class="flex items-center">
          <LayoutTemplate :size="14" class="mr-1 sm:mr-1.5" />
          <span class="line-clamp-1">{{ project.role }}</span>
        </span>
        <span class="text-slate-300 dark:text-slate-600 hidden sm:inline">|</span>
        <span class="whitespace-nowrap">{{ project.period }}</span>
      </div>

      <!-- Description -->
      <p class="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3" v-html="project.description" style="display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden;">
      </p>

      <!-- Tech Stack Tags -->
      <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6 mt-auto">
        <span 
          v-for="tech in project.techStack" 
          :key="tech"
          class="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded text-[10px] sm:text-xs"
        >
          {{ tech }}
        </span>
      </div>
    </div>

    <!-- Actions / Footer -->
    <div class="px-4 py-3 sm:px-6 sm:py-4 border-t border-slate-100 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center">
      <div class="flex space-x-2 sm:space-x-3" @click.stop>
        <a v-if="project.demoUrl" :href="project.demoUrl" @click="handleLinkClick($event, project.demoUrl, isMobileAdapted)" target="_blank" class="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors" title="在线演示">
          <ExternalLink class="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
        </a>
        <span v-else class="text-slate-300 dark:text-slate-600 cursor-not-allowed" title="演示已下线">
          <ExternalLink class="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
        </span>

        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors" title="源码">
          <Github class="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
        </a>

        <a v-if="project.docUrl" :href="project.docUrl" target="_blank" class="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors" title="文档">
          <FileText class="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
        </a>
      </div>
      
      <div class="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform">
        查看详情 <ArrowRight class="ml-1 w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </div>
    </div>
  </div>
</template>
