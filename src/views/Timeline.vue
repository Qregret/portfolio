<script setup lang="ts">
import { ref } from 'vue'
import { GraduationCap } from 'lucide-vue-next'

const timelineEvents = [
  {
    period: '2021.09 - 2025.06',
    title: '本科阶段',
    subtitle: '长江师范学院 · 大数据与智能工程学院',
    iconUrl: '/undergrad-cap.png',
    color: 'bg-emerald-500',
    colorLight: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
    highlights: [
      '荣获本科生最高荣誉 <strong class="text-slate-800 dark:text-slate-200 font-bold">国家奖学金</strong>',
      '荣获 <strong class="text-slate-800 dark:text-slate-200 font-bold">全国数媒竞赛全国一等奖</strong>',
      '荣获 <strong class="text-slate-800 dark:text-slate-200 font-bold">中国大学生计算机设计大赛全国二等奖</strong>',
      '荣获 <strong class="text-slate-800 dark:text-slate-200 font-bold">全国电工数学建模全国三等奖</strong>',
      '获评校级 <strong class="text-slate-800 dark:text-slate-200 font-bold">优秀毕业生</strong>',
      '取得 <strong class="text-slate-800 dark:text-slate-200 font-bold">软考“软件设计师”</strong> 认证',
      '取得 <strong class="text-slate-800 dark:text-slate-200 font-bold">人工智能训练师三级</strong> 认证',
      '取得 <strong class="text-slate-800 dark:text-slate-200 font-bold">华为 HCIA-AI</strong> 初级认证',
      '毕业设计《公交客流出行分析》获评 <strong class="text-slate-800 dark:text-slate-200 font-bold">校级优秀论文</strong>'
    ]
  },
  {
    period: '2025.09 - 至今',
    title: '研究生阶段',
    subtitle: '长江师范学院 · 大数据与智能工程学院',
    iconUrl: '/grad-cap.svg',
    color: 'bg-blue-500',
    colorLight: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    highlights: [
      '攻读 <strong class="text-slate-800 dark:text-slate-200 font-bold">大数据技术与工程</strong> 专业硕士学位',
      '研一期间荣获 <strong class="text-slate-800 dark:text-slate-200 font-bold">一等奖学金</strong>',
      '参与 <strong class="text-slate-800 dark:text-slate-200 font-bold">智能交通预测</strong> 方向研究',
      '参与 <strong class="text-slate-800 dark:text-slate-200 font-bold">图增强模型</strong> 方向研究',
      '参与 <strong class="text-slate-800 dark:text-slate-200 font-bold">大模型工具调用</strong> 方向研究',
      '参与 <strong class="text-slate-800 dark:text-slate-200 font-bold">MCP-DTP 动态工具剪枝</strong> 方向研究',
      '具备从 0 到 1 <strong class="text-slate-800 dark:text-slate-200 font-bold">独立完成全栈项目设计与线上部署</strong> 的能力',
      '取得 <strong class="text-slate-800 dark:text-slate-200 font-bold">大学英语四级（CET-4）</strong> 证书'
    ]
  }
]

const currentIndex = ref(0)
const scrollContainer = ref<HTMLElement | null>(null)

const onScroll = () => {
  if (!scrollContainer.value) return
  const scrollLeft = scrollContainer.value.scrollLeft
  const clientWidth = scrollContainer.value.clientWidth
  // If scrolled past half the width, consider it the second card
  if (scrollLeft > clientWidth / 2) {
    currentIndex.value = 1
  } else {
    currentIndex.value = 0
  }
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 h-full flex flex-col">
    <div class="mb-3 sm:mb-8 text-center relative shrink-0">
      <h1 class="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-1">成长经历</h1>
      <div class="lg:hidden mt-2 text-xs flex items-center justify-center transition-all duration-300">
        <span class="inline-block bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800 shadow-sm animate-pulse font-medium">
          {{ currentIndex === 0 ? '👉 滑动查看研究生阶段' : '👈 滑动查看本科阶段' }}
        </span>
      </div>
    </div>

    <div class="max-w-6xl mx-auto w-full flex-grow flex flex-col min-h-0">
      <div 
        ref="scrollContainer"
        class="flex lg:grid lg:grid-cols-2 gap-4 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar flex-grow items-stretch"
        @scroll="onScroll"
      >
        <div 
          v-for="(event, index) in timelineEvents" 
          :key="index"
          class="card p-4 sm:p-6 md:p-8 flex flex-col h-full hover:shadow-md transition-shadow shrink-0 w-full lg:w-auto snap-center relative overflow-hidden"
        >
          <!-- Header -->
          <div class="flex justify-between items-start mb-3 sm:mb-6">
            <div class="flex items-center space-x-3 sm:space-x-4">
              <div class="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl" :class="event.colorLight">
                <component v-if="event.icon" :is="event.icon" :size="18" class="sm:w-6 sm:h-6" />
                <img v-if="event.iconUrl" :src="event.iconUrl" class="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
              </div>
              <div>
                <h3 class="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white">{{ event.title }}</h3>
                <p class="text-slate-500 dark:text-slate-400 text-[10px] sm:text-sm mt-0.5 sm:mt-1 font-medium">{{ event.subtitle }}</p>
              </div>
            </div>
          </div>
          
          <!-- Period Badge -->
          <div class="mb-3 sm:mb-6 border-b border-slate-100 dark:border-slate-700 pb-3 sm:pb-6">
            <span 
              :class="[
                'inline-block px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold border',
                event.period.includes('至今') 
                  ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800' 
                  : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700'
              ]"
            >
              {{ event.period }}
            </span>
          </div>

          <!-- Content List -->
          <ul class="flex flex-col gap-1.5 sm:gap-2 flex-grow py-2">
            <li 
              v-for="(highlight, hIndex) in event.highlights" 
              :key="hIndex"
              class="flex items-start text-slate-600 dark:text-slate-300 leading-relaxed sm:leading-loose text-[13px] sm:text-base"
            >
              <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 mt-2 sm:mt-3 mr-3"></div>
              <span v-html="highlight"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
