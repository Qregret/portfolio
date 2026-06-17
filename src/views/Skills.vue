<script setup lang="ts">
import { Server, Layout, Database, BrainCircuit, Cpu, Wrench } from 'lucide-vue-next'
import SkillCard from '../components/SkillCard.vue'

const skillCategories = [
  {
    title: '后端开发',
    icon: Server,
    skills: ['Java', 'Spring Boot', 'Spring Cloud', 'MyBatis', 'REST API', 'WebSocket']
  },
  {
    title: '前端开发',
    icon: Layout,
    skills: ['Vue', 'Vite', 'TypeScript', 'Tailwind CSS', 'Ant Design Vue', 'Element Plus', 'ECharts']
  },
  {
    title: '数据库与中间件',
    icon: Database,
    skills: ['MySQL', 'Redis', 'MongoDB', 'RabbitMQ']
  },
  {
    title: '人工智能与数据',
    icon: BrainCircuit,
    skills: ['Python', '机器学习', '图增强模型', '大模型工具调用', '模型蒸馏', '数据预处理', '实验评估']
  },
  {
    title: '物联网与硬件',
    icon: Cpu,
    skills: ['ESP32', 'MQTT', 'RFID', '传感器数据采集']
  },
  {
    title: '部署与工具',
    icon: Wrench,
    skills: ['Linux', 'Docker', 'Nginx', 'Vercel', 'Git', 'API 对接', '服务器部署', 'ChatGPT', 'Codex', 'Google AI Studio']
  }
]
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
    <div class="mb-10 text-center">
      <h1 class="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">技术栈</h1>
      <p class="text-base sm:text-lg text-slate-500 dark:text-slate-400">
        全栈工程化能力与 AI 模型实践
      </p>
    </div>
    
    <div class="flex flex-col gap-6">
      <SkillCard 
        v-for="category in skillCategories" 
        :key="category.title"
        :title="category.title"
        :skills="category.skills"
        :icon="category.icon"
      />
    </div>
  </div>
</template>
