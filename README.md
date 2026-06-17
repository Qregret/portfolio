# 陈俊宇的个人作品集 (Junyu Chen Portfolio)

这是用于展示个人项目成果、技术栈和工程落地能力的个人主页。采用现代深浅色科技风设计，响应式适配多端设备，旨在向招聘企业、HR 和面试官快速直观地展示个人综合能力。

## 🛠 技术栈

- **核心框架**: [Vue 3](https://vuejs.org/) (Composition API) + [Vite](https://vitejs.dev/)
- **语言**: [TypeScript](https://www.typescriptlang.org/)
- **路由**: [Vue Router 4](https://router.vuejs.org/)
- **样式**: [Tailwind CSS v4](https://tailwindcss.com/)
- **图标**: [Lucide Icons](https://lucide.dev/)

## 🚀 本地运行命令

### 1. 安装依赖
```bash
npm install
```

### 2. 启动本地开发服务器
```bash
npm run dev
```
启动后，可在浏览器中访问 `http://localhost:5173`。

## 📦 构建命令

### 1. 构建生产版本
```bash
npm run build
```
这将在根目录下生成 `dist` 文件夹，包含了压缩优化后的静态资源。

### 2. 本地预览生产构建
```bash
npm run preview
```

## ☁️ Vercel 部署方式

本项目非常适合部署到 Vercel：
1. 将此项目推送到你的 GitHub 仓库。
2. 登录 [Vercel](https://vercel.com/)。
3. 点击 "Add New..." -> "Project"。
4. 选择你刚刚推送的 GitHub 仓库并点击 "Import"。
5. Vercel 会自动识别出这是一个 Vite/Vue 项目。
6. 点击 "Deploy" 等待部署完成即可。
7. （可选）在 Vercel 后台的 Domains 设置中绑定你的自定义域名 `junyuc.me`。

## 📝 如何修改项目配置与内容

### 1. 如何新增项目 / 修改项目链接
所有的项目数据都集中配置在 `src/data/projects.ts` 文件中。
打开该文件，你可以：
- **新增项目**: 复制一个 `{ ... }` 对象并填充相应的内容。
- **修改链接**: 修改 `demoUrl`, `githubUrl`, `docUrl` 字段即可。如果有链接，页面会自动高亮显示；如果没有，会自动置灰并显示“整理部署中”。
- **隐藏项目**: 将 `visible` 字段设置为 `false`。

### 2. 如何修改个人信息
- **首页介绍**: 在 `src/views/Home.vue` 中修改文字内容。
- **关于我**: 在 `src/views/About.vue` 中修改。
- **技术栈**: 在 `src/views/Skills.vue` 中修改分类和具体技术。
- **成长经历**: 在 `src/views/Timeline.vue` 中修改时间轴数据。
- **联系方式**: 在 `src/views/Contact.vue` 中补充你的邮箱、GitHub 主页等。

---
*Powered by Vue & Tailwind CSS*
