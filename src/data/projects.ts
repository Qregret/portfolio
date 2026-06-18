export interface Project {
  id: string;
  name: string;
  period: string;
  role: string;
  status: string;
  description: string;
  techStack: string[];
  highlights: string[];
  demoUrl?: string;
  githubUrl?: string;
  docUrl?: string;
  cover?: string;
  screenshots?: string[];
  notice?: string;
  visible: boolean;
}

export const projects: Project[] = [
  {
    id: "exam-assistant",
    name: "考公助手小程序",
    period: "2026.04 - 至今",
    role: "全栈开发与部署",
    status: "已上线",
    description: "本项目为个人练习与自用项目，主要面向考公学习场景，提供单词学习、速算练习、测试记录、难点整理和学习进度展示等功能。本项目专为方便个人学习而设计，核心场景为<strong class=\"bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 px-1.5 py-0.5 rounded font-bold mx-1\">手机便携背诵</strong>，因此<strong class=\"bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 px-1.5 py-0.5 rounded font-bold mx-1\">未适配网页端</strong>。项目使用前端页面实现学习与统计展示，并通过 Vercel 完成在线部署，能够实际访问和使用。",
    techStack: ["Vue", "Vercel", "前端工程化", "数据展示"],
    highlights: ["完成项目页面设计、功能模块开发和在线部署；", "通过该项目熟悉前端工程化、页面交互、个人项目上线流程。"],
    demoUrl: "https://kg.junyuc.me",
    githubUrl: "https://github.com/Qregret/power",
    cover: "/images/exam-assistant/1.png",
    screenshots: [
      "/images/exam-assistant/1.png",
      "/images/exam-assistant/2.png",
      "/images/exam-assistant/3.png",
      "/images/exam-assistant/4.png"
    ],
    visible: true,
  },
  {
    id: "bus-alight-prediction",
    name: "基于图增强模型的公交下车站点预测系统",
    period: "2025.10 - 至今",
    role: "全栈开发",
    status: "已上线",
    description: "本项目面向公交出行场景，围绕乘客下车站点预测问题展开研究。项目结合乘客历史出行记录、公交线路站点关系、时间特征和空间特征，构建候选站点召回与排序预测流程，并引入图增强模型提升站点关系表达能力。",
    techStack: ["Python", "机器学习", "图增强模型", "候选召回", "排序模型", "数据预处理", "模型评估"],
    highlights: ["负责数据处理、候选站点生成、预测模型设计、接口封装和实验结果分析，重点优化 Top-K 候选中的 Top1 预测效果。"],
    demoUrl: "http://13.114.177.156/",
    githubUrl: "https://github.com/Qregret/graph-enhanced-bus-prediction",
    cover: "/images/bus-alight-prediction/overview.png",
    screenshots: [
      "/images/bus-alight-prediction/overview.png",
      "/images/bus-alight-prediction/map-dispatch.png",
      "/images/bus-alight-prediction/analytics.png",
      "/images/bus-alight-prediction/forecast.png",
      "/images/bus-alight-prediction/dashboard.png"
    ],
    visible: true,
  },
  {
    id: "esp32-seat",
    name: "ESP32 智能选座系统",
    period: "2026.04 - 2026.06",
    role: "全栈开发",
    status: "已上线",
    description: "本项目为<strong class=\"bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 px-1.5 py-0.5 rounded font-bold mx-1\">课程作业</strong>，主要面向校园座位管理场景。基于 ESP32、RFID、人脸识别和 MQTT 消息交互实现智能选座与身份认证。系统支持 RFID 识别、人脸识别双重验证，并通过后端接口与前端页面展示座位状态。在硬件测试与展示中，统一使用<strong class=\"bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 px-1.5 py-0.5 rounded font-bold mx-1\">LED灯泡亮灭代替</strong>实际座位的占用与释放状态。",
    techStack: ["ESP32", "MQTT", "Spring Boot", "Vue", "RFID", "人脸识别 API", "WebSocket"],
    highlights: ["实现硬件端与后端的数据交互，完成认证流程、消息通信和座位状态展示。"],
    demoUrl: "http://13.213.88.162/",
    githubUrl: "https://github.com/Qregret/esp32-intelligent-seating",
    cover: "/images/esp32-seat-cover.png",
    screenshots: [
      "/images/esp32-seat-1.png",
      "/images/esp32-seat-2.png",
      "/images/esp32-seat-3.jpg",
      "/images/esp32-seat-4.png",
      "/images/esp32-auth.png"
    ],
    visible: true,
  },
  {
    id: "mcp-dtp",
    name: "MCP-DTP 大规模 MCP 工具服务器动态工具剪枝方法",
    period: "2026.04 - 至今",
    role: "主要负责人",
    status: "部署中",
    description: "本项目围绕大规模 MCP 工具服务器中工具数量多、模型选择成本高、误调用风险增加等问题展开研究。项目设计了一种记忆引导的动态工具剪枝方法，根据任务上下文、历史工具使用记录和工具依赖关系，对工具进行 active、reserved、blocked 三态管理，从而减少无关工具暴露，提高大模型工具调用效率和安全性。",
    techStack: ["大模型工具调用", "MCP", "动态剪枝", "状态管理", "历史记忆", "实验评估"],
    highlights: ["完成方法框架设计和实验思路规划，明确工具状态划分、动态恢复机制和历史记忆引导策略。"],
    visible: true,
  },
  {
    id: "aiot-agriculture",
    name: "基于微服务架构的农业物联网远程实时监控系统",
    period: "2023.03 - 2024.05",
    role: "队长 / 后端开发",
    status: "往期项目",
    description: "本项目为<strong class=\"bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 px-1.5 py-0.5 rounded font-bold mx-1\">2023年往期项目</strong>。作为第十一届全国大学生数字媒体科技作品及创意竞赛参赛项目，主要面向智慧农业场景，设计并实现农业环境远程实时监控系统。系统通过传感器采集环境数据，借助 Netty 实现可靠传输，经由 Kafka 和 Spark 节点进行数据解析处理，最终通过 Spring Boot 服务持久化并供 Vue 前端（含移动端及 PC 网页端）实时监控。因项目涉及大量硬件设备且占地较大，无法长期维护部署，目前<strong class=\"bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 px-1.5 py-0.5 rounded font-bold mx-1\">硬件平台已拆除</strong>，但系统运行时的各端界面与实物照片均已提供展示截图。",
    techStack: ["Spring Boot", "Spring Cloud", "Vue", "Ant Design Vue", "MyBatis", "MySQL", "Netty", "RTSP", "Nginx", "目标检测"],
    highlights: [
      "🏆 荣获 2023 第十一届全国大学生数字媒体科技作品及创意竞赛 国赛一等奖",
      "🏆 荣获 2023 第十七届 iCAN 大学生创新创业大赛重庆赛区 三等奖",
      "本人作为项目队长，主要参与系统方案设计、后端接口开发、设备数据解析、功能联调和项目文档撰写。",
      "由于原物理设备已拆除，后续将复现为在线演示版，通过模拟设备数据展示原项目业务流程。"
    ],
    screenshots: [
      "/images/aiot/图片8.png",
      "/images/aiot/图片9.png",
      "/images/aiot/图片12.png",
      "/images/aiot/图片10.png",
      "/images/aiot/图片11.png",
      "/images/aiot/图片13.png",
      "/images/aiot/图片14.png",
      "/images/aiot/图片15.png",
      "/images/aiot/图片5.png",
      "/images/aiot/图片6.png",
      "/images/aiot/图片7.png"
    ],
    visible: true,
  },
  {
    id: "spark-od-analysis",
    name: "基于 Spark 的城市公交客流 OD 分析系统",
    period: "2024.01 - 2024.08",
    role: "核心开发者",
    status: "往期项目",
    description: "本项目为<strong class=\"bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 px-1.5 py-0.5 rounded font-bold mx-1\">本科毕业设计项目</strong>，聚焦城市公共交通客流分析，基于大数据处理框架 Spark 对海量公交刷卡和定位数据进行离线与实时分析，挖掘乘客出行起始点（OD）的时空分布规律，为城市交通规划和公交线路优化提供数据支撑。注：本项目仅作成果展示未独立部署，其核心功能现已<strong class=\"bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 px-1.5 py-0.5 rounded font-bold mx-1\">整合升级</strong>至前文的“基于图增强模型的公交下车站点预测系统”中。",
    techStack: ["Spark", "大数据处理", "数据分析", "数据预处理", "时空特征提取"],
    highlights: [
      "🏆 荣获 2024 年第 17 届中国大学生计算机设计大赛 全国二等奖",
      "🏆 荣获 2024 年第 17 届中国大学生计算机设计大赛重庆市级赛 一等奖",
      "参与设计客流特征提取与 OD 推导算法，优化大规模数据在 Spark 集群上的分布式处理效率。"
    ],
    cover: "/images/spark-od-analysis.png",
    screenshots: [
      "/images/spark-od-analysis.png"
    ],
    visible: true,
  },
  {
    id: "flink-bus-prediction",
    name: "“BUS出行”基于 Flink 的实时公交到站预测 APP",
    period: "2023.03 - 2023.06",
    role: "后端设计与开发",
    status: "往期项目",
    description: "本项目为<strong class=\"bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 px-1.5 py-0.5 rounded font-bold mx-1\">2023年作品</strong>。旨在为乘客提供准确的公交车辆实时到站预测服务，本人在项目中主要负责<strong class=\"bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 px-1.5 py-0.5 rounded font-bold mx-1\">后端的架构设计与开发</strong>。系统引入流处理引擎 Flink 实时接入和清洗公交车辆 GPS 数据，结合历史轨迹特征训练预测模型，并在前端 APP 提供车辆实时位置和预计到站时间展示。",
    techStack: ["Flink", "实时流处理", "公交预测模型", "移动端开发", "数据清洗"],
    highlights: [
      "🏆 荣获 2023 年第 16 届中国大学生计算机设计大赛重庆市级赛 三等奖",
      "使用 Flink 搭建实时数据流处理管道，解决车辆位置漂移和延迟问题，提升到站预测的实时性和准确度。"
    ],
    cover: "/images/bus/pc端.png",
    screenshots: [
      "/images/bus/pc端.png",
      "/images/bus/图片1.png",
      "/images/bus/图片2.png",
      "/images/bus/图片3.png",
      "/images/bus/图片4.png"
    ],
    visible: true,
  }
];
