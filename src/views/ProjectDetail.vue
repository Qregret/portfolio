<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft, ExternalLink, Github, FileText, Calendar, User, LayoutTemplate, Activity } from 'lucide-vue-next'
import { projects } from '../data/projects'

const route = useRoute()
const router = useRouter()

const project = computed(() => {
  return projects.find(p => p.id === route.params.id)
})

const goBack = () => {
  router.back()
}

const handleLinkClick = (e: Event, url: string, projectId: string) => {
  const isMobile = window.innerWidth < 640;
  const mobileAdaptedIds = ['exam-assistant', 'esp32-seat', 'flink-bus-prediction'];
  const isAdapted = mobileAdaptedIds.includes(projectId);
  
  if (isMobile && !isAdapted) {
    e.preventDefault();
    const proceed = window.confirm("💡 当前项目暂未做手机端适配，建议在电脑端访问以获得最佳体验。\n\n是否仍要继续前往？");
    if (proceed) {
      window.open(url, '_blank');
    }
  }
}
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <button @click="goBack" class="flex items-center text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 mb-8 group transition-colors">
      <ArrowLeft :size="20" class="mr-2 group-hover:-translate-x-1 transition-transform" />
      返回项目列表
    </button>

    <div v-if="project">
      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          {{ project.name }}
        </h1>
        
        <div class="flex flex-wrap items-center gap-6 text-slate-600 dark:text-slate-300">
          <div class="flex items-center">
            <Activity :size="18" class="mr-2 text-blue-500" />
            <span class="font-medium">{{ project.status }}</span>
          </div>
          <div class="flex items-center">
            <Calendar :size="18" class="mr-2 text-blue-500" />
            <span>{{ project.period }}</span>
          </div>
          <div class="flex items-center">
            <User :size="18" class="mr-2 text-blue-500" />
            <span>{{ project.role }}</span>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div class="lg:col-span-2 space-y-10">
          <!-- Overview -->
          <section>
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <div class="w-2 h-6 bg-blue-500 rounded-full mr-3"></div>
              项目简介
            </h2>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-lg bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700" v-html="project.description">
            </p>
          </section>

          <!-- Highlights / Responsibilities -->
          <section>
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <div class="w-2 h-6 bg-blue-500 rounded-full mr-3"></div>
              项目亮点与工作内容
            </h2>
            <ul class="space-y-3">
              <li v-for="(highlight, index) in project.highlights" :key="index" class="flex items-start bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                <span class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm mr-4">
                  {{ index + 1 }}
                </span>
                <span class="text-slate-700 dark:text-slate-300 mt-0.5">{{ highlight }}</span>
              </li>
            </ul>
          </section>

          <!-- Screenshots -->
          <section>
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <div class="w-2 h-6 bg-blue-500 rounded-full mr-3"></div>
              系统展示与实物图
            </h2>
            
            <div v-if="project.screenshots && project.screenshots.length > 0" class="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div v-for="(img, idx) in project.screenshots" :key="idx" class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-slate-100 dark:bg-slate-800 flex items-center justify-center h-48 sm:h-56 cursor-pointer group">
                <img :src="img" :alt="`${project.name} 展示图 ${idx + 1}`" class="w-full h-full object-contain p-2 hover:scale-[1.03] transition-transform duration-500" />
              </div>
            </div>
            <div v-else-if="project.cover" class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm">
              <img :src="project.cover" :alt="project.name" class="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500" />
            </div>
            <div v-else class="w-full aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-500 flex-col">
              <LayoutTemplate :size="48" class="mb-3 opacity-50" />
              <span class="text-lg">系统界面截屏 / 待补充</span>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="space-y-8">
          <!-- Action Links -->
          <div class="card p-6">
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">项目链接</h3>
            <div class="space-y-3">
              <a v-if="project.demoUrl" :href="project.demoUrl" @click="handleLinkClick($event, project.demoUrl, project.id)" target="_blank" class="flex items-center justify-center w-full btn btn-primary">
                <ExternalLink :size="18" class="mr-2" />
                在线演示 / 项目入口
              </a>
              <button v-else disabled class="flex items-center justify-center w-full py-2.5 px-4 rounded-lg font-medium bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500 cursor-not-allowed border border-slate-200 dark:border-slate-700">
                <ExternalLink :size="18" class="mr-2 opacity-50" />
                演示已下线 / 不可跳转
              </button>

              <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="flex items-center justify-center w-full btn btn-secondary">
                <Github :size="18" class="mr-2" />
                源码仓库
              </a>

              <a v-if="project.docUrl" :href="project.docUrl" target="_blank" class="flex items-center justify-center w-full btn btn-outline">
                <FileText :size="18" class="mr-2" />
                项目文档
              </a>
            </div>
          </div>

          <!-- Tech Stack -->
          <div class="card p-6">
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">技术架构</h3>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in project.techStack" 
                :key="tech"
                class="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/50 rounded-md text-sm font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="text-center py-20">
      <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">找不到该项目</h2>
      <button @click="goBack" class="btn btn-primary">返回</button>
    </div>
  </div>
</template>
