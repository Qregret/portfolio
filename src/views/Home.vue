<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Download, Terminal, Code, Cpu, Brain, Trophy, LayoutGrid } from 'lucide-vue-next'

const router = useRouter()
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
    <!-- Hero Section -->
    <div class="flex flex-col lg:flex-row items-center justify-center gap-5 sm:gap-8 lg:gap-16">
      <div class="flex-1 w-full max-w-md sm:max-w-lg lg:max-w-none text-center lg:text-left">
        <div class="inline-flex items-center px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium mb-3 sm:mb-6">
          <Terminal :size="14" class="mr-1.5 sm:mr-2" />
          <span>Hello World</span>
        </div>
        
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-3 sm:mb-5 tracking-tight">
          Hi, 我是<br class="hidden lg:block"/><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">陈俊宇</span>
        </h1>
        
        <p class="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light mb-4 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          大数据技术与工程在读 / 全栈开发者。<br class="hidden sm:block" />
          <span class="hidden sm:inline">热衷于代码与数据，喜欢让 AI 模型与智能终端在真实场景中运转起来。</span>
        </p>
        
        <div class="grid grid-cols-2 sm:flex sm:flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-3 sm:mt-6">
          <a href="http://13.213.88.162" target="_blank" class="w-full sm:w-auto flex items-center justify-center btn btn-primary px-4 py-2 sm:px-6 sm:py-3 text-sm md:text-base shadow-lg shadow-blue-500/30">
            <LayoutGrid :size="16" class="mr-1.5 sm:mr-2" /> 数据大屏
          </a>
          <button @click="router.push('/skills')" class="hidden sm:flex items-center justify-center bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50 border border-blue-100 dark:border-blue-800 transition-colors rounded-lg font-medium px-4 py-2 sm:px-6 sm:py-3 text-sm md:text-base">
            <Code :size="16" class="mr-1.5 sm:mr-2" /> 探索技术栈
          </button>
          <a href="/陈俊宇_简历.pdf" target="_blank" class="w-full sm:w-auto flex items-center justify-center btn btn-outline px-4 py-2 sm:px-6 sm:py-3 text-sm md:text-base" title="在线预览/下载简历">
            <Download :size="16" class="mr-1.5 sm:mr-2" /> 简历
          </a>

        </div>
      </div>
      
      <!-- Core Strengths -->
      <div class="flex-1 w-full max-w-md sm:max-w-lg lg:max-w-none mt-5 sm:mt-0">
        <div class="grid grid-cols-2 gap-3 sm:gap-5 md:gap-6">
          <div class="card p-3 sm:p-5 border-t-2 sm:border-t-4 border-t-blue-500 hover:-translate-y-1 transition-transform duration-300">
            <div class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-2 sm:mb-4">
              <Code class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </div>
            <h3 class="text-sm sm:text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1">全栈与工程</h3>
            <p class="text-[11px] sm:text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-tight">
              独立构建前后端与高可用架构
            </p>
          </div>
          
          <div class="card p-3 sm:p-5 border-t-2 sm:border-t-4 border-t-amber-500 hover:-translate-y-1 transition-transform duration-300">
            <div class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center text-amber-600 dark:text-amber-400 mb-2 sm:mb-4">
              <Trophy class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </div>
            <h3 class="text-sm sm:text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1">国家级荣誉</h3>
            <p class="text-[11px] sm:text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-tight">
              荣获国奖及多项国家级顶级大奖
            </p>
          </div>

          <div class="card p-3 sm:p-5 border-t-2 sm:border-t-4 border-t-purple-500 hover:-translate-y-1 transition-transform duration-300">
            <div class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-2 sm:mb-4">
              <Brain class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </div>
            <h3 class="text-sm sm:text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1">AI与大数据</h3>
            <p class="text-[11px] sm:text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-tight">
              深耕大模型优化与海量数据处理
            </p>
          </div>
          
          <div class="card p-3 sm:p-5 border-t-2 sm:border-t-4 border-t-emerald-500 hover:-translate-y-1 transition-transform duration-300">
            <div class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-2 sm:mb-4">
              <Cpu class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </div>
            <h3 class="text-sm sm:text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1">物联网协同</h3>
            <p class="text-[11px] sm:text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-tight">
              掌握ESP32实现跨终端软硬协同
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
