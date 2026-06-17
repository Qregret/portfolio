<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Phone, CheckCircle } from 'lucide-vue-next'

const showToast = ref(false)

const copyToClipboard = async (text: string, type?: string) => {
  try {
    await navigator.clipboard.writeText(text)
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 2000)
    
    if (type === 'wechat') {
      setTimeout(() => {
        window.location.href = 'weixin://'
      }, 500)
    }
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative">
    
    <!-- Toast Notification -->
    <div class="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300"
         :class="showToast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'">
      <div class="bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-900 px-5 py-3 rounded-full shadow-lg shadow-slate-500/20 flex items-center font-medium">
        <CheckCircle :size="18" class="mr-2 text-emerald-400 dark:text-emerald-500" />
        内容已复制到剪贴板
      </div>
    </div>

    <div class="mb-6 sm:mb-8 text-center">
      <h1 class="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">联系我</h1>
      <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-400">
        欢迎交流探讨技术问题，或提供工作机会。
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-md md:max-w-2xl mx-auto">
        <div @click="copyToClipboard('1147254646@qq.com')" class="card p-3 sm:p-4 flex items-center hover:border-blue-300 dark:hover:border-blue-700 transition-colors group cursor-pointer" title="点击复制邮箱">
          <div class="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 transition-colors">
            <Mail class="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div class="text-left overflow-hidden">
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mb-0.5">电子邮箱</p>
            <p class="text-sm sm:text-base font-medium text-slate-900 dark:text-white truncate">1147254646@qq.com</p>
          </div>
        </div>

        <div @click="copyToClipboard('18983464109')" class="card p-3 sm:p-4 flex items-center hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors group cursor-pointer" title="点击复制手机号">
          <div class="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mr-4 group-hover:bg-emerald-600 group-hover:text-white dark:group-hover:bg-emerald-500 transition-colors">
            <Phone class="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div class="text-left overflow-hidden">
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mb-0.5">手机号码</p>
            <p class="text-sm sm:text-base font-medium text-slate-900 dark:text-white truncate">18983464109</p>
          </div>
        </div>

        <div @click="copyToClipboard('chenunyu', 'wechat')" class="card p-3 sm:p-4 flex items-center hover:border-green-300 dark:hover:border-green-700 transition-colors group cursor-pointer" title="点击复制并打开微信">
          <div class="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mr-4 group-hover:bg-green-600 group-hover:text-white dark:group-hover:bg-green-500 transition-colors">
            <svg class="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/></svg>
          </div>
          <div class="text-left overflow-hidden">
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mb-0.5">微信</p>
            <p class="text-sm sm:text-base font-medium text-slate-900 dark:text-white truncate">chenunyu</p>
          </div>
        </div>

        <a href="mqqwpa://im/chat?chat_type=wpa&uin=1147254646&version=1&src_type=web&web_src=oicqzone.com" class="card p-3 sm:p-4 flex items-center hover:border-cyan-300 dark:hover:border-cyan-700 transition-colors group cursor-pointer block" title="点击打开QQ">
          <div class="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mr-4 group-hover:bg-cyan-600 group-hover:text-white dark:group-hover:bg-cyan-500 transition-colors">
            <svg class="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M21.395 15.035a40 40 0 0 0-.803-2.264l-1.079-2.695c.001-.032.014-.562.014-.836C19.526 4.632 17.351 0 12 0S4.474 4.632 4.474 9.241c0 .274.013.804.014.836l-1.08 2.695a39 39 0 0 0-.802 2.264c-1.021 3.283-.69 4.643-.438 4.673.54.065 2.103-2.472 2.103-2.472 0 1.469.756 3.387 2.394 4.771-.612.188-1.363.479-1.845.835-.434.32-.379.646-.301.778.343.578 5.883.369 7.482.189 1.6.18 7.14.389 7.483-.189.078-.132.132-.458-.301-.778-.483-.356-1.233-.646-1.846-.836 1.637-1.384 2.393-3.302 2.393-4.771 0 0 1.563 2.537 2.103 2.472.251-.03.581-1.39-.438-4.673"/></svg>
          </div>
          <div class="text-left overflow-hidden">
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mb-0.5">QQ</p>
            <p class="text-sm sm:text-base font-medium text-slate-900 dark:text-white truncate">1147254646</p>
          </div>
        </a>
      </div>
  </div>
</template>
