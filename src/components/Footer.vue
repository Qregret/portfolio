<script setup lang="ts">
import { Mail, Phone } from 'lucide-vue-next'

const handleWechat = async () => {
  try {
    await navigator.clipboard.writeText('chenunyu')
    alert('微信号已复制，即将打开微信')
    window.location.href = 'weixin://'
  } catch(e) {
    window.location.href = 'weixin://'
  }
}
</script>

<template>
  <footer class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center justify-center space-y-4">
        <div class="flex justify-center">
          <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-600 to-slate-400 dark:from-slate-300 dark:to-slate-500">
            Junyu Chen
          </span>
        </div>
        
        <div class="grid grid-cols-[auto_auto] gap-x-6 gap-y-2 md:gap-x-12 w-fit mx-auto">
          <a href="mailto:1147254646@qq.com" class="flex items-center justify-start text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
            <Mail :size="16" class="mr-1.5 shrink-0" />
            <span class="text-sm font-medium">1147254646@qq.com</span>
          </a>
          <a href="tel:18983464109" class="flex items-center justify-start text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors">
            <Phone :size="16" class="mr-1.5 shrink-0" />
            <span class="text-sm font-medium">18983464109</span>
          </a>
          <div @click="handleWechat" class="flex items-center justify-start text-slate-500 hover:text-green-600 dark:text-slate-400 dark:hover:text-green-400 transition-colors cursor-pointer" title="点击复制并打开微信">
            <svg class="w-4 h-4 mr-1.5 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/></svg>
            <span class="text-sm font-medium">chenunyu</span>
          </div>
          <a href="mqqwpa://im/chat?chat_type=wpa&uin=1147254646&version=1&src_type=web&web_src=oicqzone.com" class="flex items-center justify-start text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors cursor-pointer" title="点击打开QQ">
            <svg class="w-4 h-4 mr-1.5 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M21.395 15.035a40 40 0 0 0-.803-2.264l-1.079-2.695c.001-.032.014-.562.014-.836C19.526 4.632 17.351 0 12 0S4.474 4.632 4.474 9.241c0 .274.013.804.014.836l-1.08 2.695a39 39 0 0 0-.802 2.264c-1.021 3.283-.69 4.643-.438 4.673.54.065 2.103-2.472 2.103-2.472 0 1.469.756 3.387 2.394 4.771-.612.188-1.363.479-1.845.835-.434.32-.379.646-.301.778.343.578 5.883.369 7.482.189 1.6.18 7.14.389 7.483-.189.078-.132.132-.458-.301-.778-.483-.356-1.233-.646-1.846-.836 1.637-1.384 2.393-3.302 2.393-4.771 0 0 1.563 2.537 2.103 2.472.251-.03.581-1.39-.438-4.673"/></svg>
            <span class="text-sm font-medium">1147254646</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
