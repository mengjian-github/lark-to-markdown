# ✨ 飞书文档转公众号排版工具

<div align="center">
  <img src="./public/images/product.png" alt="飞书文档转公众号排版工具" width="800"/>
  
  <p>一个强大的在线工具，助您快速将飞书文档转换为美观的微信公众号文章</p>
  
  [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
  [![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?logo=typescript)](https://www.typescriptlang.org/)
</div>

## 🚀 核心功能

### 📝 一键转换
- **智能解析**：从飞书文档直接复制，自动转换为标准 Markdown 格式
- **格式保持**：完美保留原文档的排版结构和样式

### 🎨 多样主题
- **科技蓝**：现代科技风格，适合技术类文章
- **商务橙**：商务专业风格，适合商业内容
- **极简黑**：简约黑白风格，专注内容本身
- **清新绿**：清新自然风格，适合生活类文章
- **典雅紫**：优雅紫色风格，适合文艺内容

### 📱 双屏预览
- **手机预览**：模拟微信公众号手机端阅读效果
- **电脑预览**：适配桌面端显示效果
- **实时同步**：编辑内容实时预览，所见即所得

### 🎯 完整支持
- ✅ **图片处理**：支持图片上传和链接引用
- ✅ **表格渲染**：完美显示复杂表格结构
- ✅ **代码高亮**：多语言代码块语法高亮
- ✅ **列表格式**：有序、无序列表完美支持
- ✅ **引用块**：支持多级引用和特殊标注

### 🚧 计划功能
- 🔄 **数学公式**：LaTeX 数学公式渲染（开发中）

## 📖 使用指南

### 第一步：准备内容
1. 打开您的飞书文档
2. 选择需要转换的内容
3. 使用 `Ctrl+C` (Windows) 或 `Command+C` (Mac) 复制

### 第二步：粘贴转换
1. 在工具的左侧编辑器中粘贴内容
2. 系统自动识别并转换格式
3. 查看右侧预览区域的效果

### 第三步：选择主题
1. 在工具右侧选择合适的主题样式
2. 预览不同主题的显示效果
3. 根据文章类型选择最佳主题

### 第四步：导出使用
1. 点击"复制到公众号"按钮
2. 粘贴到微信公众号编辑器
3. 发布您的美观文章

## 🛠️ 本地开发

### 环境要求
- Node.js 18+
- npm 或 yarn

### 快速开始

```bash
# 克隆项目
git clone https://github.com/mengjian-github/lark-to-markdown.git
cd lark-to-markdown

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 在浏览器中打开 http://localhost:3000
```

### 构建部署

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 静态导出（可选）
npm run export
```

## 🔧 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| **Next.js** | 14.0.4 | React 全栈框架 |
| **React** | 18.2.0 | 用户界面库 |
| **TypeScript** | 5.3.3 | 类型安全的 JavaScript |
| **TailwindCSS** | 3.3.6 | 原子化 CSS 框架 |
| **React Markdown** | 9.0.1 | Markdown 渲染组件 |
| **Turndown** | 7.1.2 | HTML 到 Markdown 转换 |

## 🌐 在线使用

🔗 **访问地址**: [https://www.larkmd.online/](https://www.larkmd.online/)

## 📱 联系作者

<div align="center">
  <p>遇到问题或有建议？随时联系我！</p>
  
  **点击工具右上角"联系作者"按钮可以：**
  - 📱 扫码添加作者微信
  - 🐱 访问 GitHub 项目
  - 💬 反馈问题和建议
  - 📚 获取使用帮助
</div>

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 开源协议

本项目采用 MIT 协议 - 查看 [LICENSE](LICENSE) 文件了解详情

---

<div align="center">
  <p>⭐ 如果这个项目对您有帮助，请给它一个 Star！</p>
  <p>💡 <strong>提示</strong>: 支持飞书文档的所有常用格式，让您的公众号文章更加专业美观</p>
</div>
