<script setup lang="ts">
import { User, MapPin, Calendar, GraduationCap } from 'lucide-vue-next'
</script>

<template>
  <div class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex-grow flex flex-col justify-evenly">
    <div class="text-center mb-2">
      <h1 class="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">关于我</h1>
      <p class="text-xl text-slate-600 dark:text-slate-400">
        执着于技术探索，专注于工程落地。
      </p>
    </div>
    
    <!-- Profile & Intro Section (Horizontal Layout) -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      <!-- Personal Info Card (Left, takes 3 columns) -->
      <div class="lg:col-span-3 h-full">
        <div class="card p-6 h-full bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-800 dark:to-slate-800/80 flex flex-col justify-center">
          <div class="flex flex-col items-center justify-center mb-6 text-center">
            <div class="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 text-3xl font-bold flex-shrink-0 mb-3">
              陈
            </div>
            <div>
              <h2 class="text-xl font-bold text-slate-900 dark:text-white">陈俊宇</h2>
              <p class="text-blue-600 dark:text-blue-400 font-medium text-xs mt-1">学生 / 全栈开发 / AI应用</p>
            </div>
          </div>
          
          <div class="grid grid-cols-3 gap-y-4 gap-x-2 sm:gap-x-4">
            <div class="flex flex-col items-center justify-center text-center text-slate-700 dark:text-slate-300 text-[12px] sm:text-[13px]">
              <span class="text-slate-400 flex items-center justify-center mb-1 whitespace-nowrap"><User :size="13" class="mr-1" /> 性别</span>
              <span class="font-medium whitespace-nowrap">男</span>
            </div>
            <div class="flex flex-col items-center justify-center text-center text-slate-700 dark:text-slate-300 text-[12px] sm:text-[13px]">
              <span class="text-slate-400 flex items-center justify-center mb-1 whitespace-nowrap"><Calendar :size="13" class="mr-1" /> 出生年月</span>
              <span class="font-medium whitespace-nowrap">2002-08</span>
            </div>
            <div class="flex flex-col items-center justify-center text-center text-slate-700 dark:text-slate-300 text-[12px] sm:text-[13px]">
              <span class="text-slate-400 flex items-center justify-center mb-1 whitespace-nowrap"><MapPin :size="13" class="mr-1" /> 出生地</span>
              <span class="font-medium whitespace-nowrap">重庆</span>
            </div>
            <div class="flex flex-col items-center justify-center text-center text-slate-700 dark:text-slate-300 text-[12px] sm:text-[13px]">
              <span class="text-slate-400 flex items-center justify-center mb-1 whitespace-nowrap"><GraduationCap :size="13" class="mr-1" /> 本科</span>
              <span class="font-medium whitespace-nowrap">长江师范学院</span>
            </div>
            <div class="flex flex-col items-center justify-center text-center text-slate-700 dark:text-slate-300 text-[12px] sm:text-[13px]">
              <span class="text-slate-400 flex items-center justify-center mb-1 whitespace-nowrap"><GraduationCap :size="13" class="mr-1" /> 硕士</span>
              <span class="font-medium whitespace-nowrap">长江师范学院</span>
            </div>
            <div class="flex flex-col items-center justify-center text-center text-slate-700 dark:text-slate-300 text-[12px] sm:text-[13px]">
              <span class="text-slate-400 flex items-center justify-center mb-1 whitespace-nowrap"><GraduationCap :size="13" class="mr-1" /> 毕业年份</span>
              <span class="font-medium whitespace-nowrap">2028</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="lg:col-span-9 h-full">
        <div class="card p-5 md:p-8 h-full flex flex-col justify-center">
          <div class="text-sm md:text-[15px]">
            <p class="leading-relaxed text-slate-700 dark:text-slate-300 indent-8">
              我具备较强的学习能力、实践能力和项目落地能力。本科与研究生均就读于长江师范学院，目前攻读大数据技术与工程专业硕士学位。研一期间获得一等奖学金，并跟随导师参与智能交通预测和大模型工具调用相关研究，主要涉及基于图增强模型的公交乘客上下车站点预测、MCP-DTP 动态工具剪枝等前沿方向。
            </p>
            
            <p class="leading-relaxed text-slate-700 dark:text-slate-300 indent-8">
              在项目实践方面，我不仅关注算法和模型，更重视工程实现。具备从 0 到 1 的项目落地能力，能够独立完成从需求分析、方案设计、代码开发、接口联调到服务器部署的完整流程。掌握 Linux 服务器搭建、API 对接、Vercel 部署、大模型蒸馏等技能。
            </p>
            
            <p class="leading-relaxed text-slate-700 dark:text-slate-300 indent-8">
              我有丰富的开发经验：包含公交预测系统、ESP32 智能选座、RFID 与人脸识别双重验证、MQTT 消息交互、高德/阿里云 API 接入以及农业物联网远程监控等。同时，我也深度使用过 ChatGPT、Codex、Google Antigravity 等 AI 开发工具，能够借助 AI 快速学习新技术并解决复杂问题。
            </p>
            
            <p class="leading-relaxed text-slate-700 dark:text-slate-300 font-medium indent-8">
              我做事认真，愿意钻研。相比仅停留在理论学习，我更注重把想法做成可运行、可展示、可部署的系统，希望在未来的工作中继续提升自己的全栈开发、AI 应用与架构落地能力。
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
