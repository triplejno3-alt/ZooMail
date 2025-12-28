# ZooMail

极简风格个人主页，使用React构建的动态页面。

## 技术栈

- **前端框架**: React 19.2.3
- **构建工具**: Webpack 5.104.1
- **编译器**: Babel (ES6+ to ES5)
- **部署平台**: Cloudflare Pages
- **开发工具**: Wrangler 4.0.1
- **样式**: CSS

## 项目结构

```
ZooMail/
├── src/                    # 源代码目录
│   ├── App.js             # 主React组件
│   ├── index.js           # React应用入口
│   └── style.css          # 样式文件
├── dist/                  # 构建输出目录
│   ├── index.html         # HTML入口文件
│   ├── bundle.js          # 打包后的JavaScript
│   └── style.css          # 样式文件
├── node_modules/          # 依赖包
├── package.json           # 项目配置和依赖
├── webpack.config.js      # Webpack配置
├── wrangler.toml          # Cloudflare配置
└── README.md              # 项目说明文档
```

## 功能特性

- **动态时间显示**: 页面实时显示当前时间，每秒自动更新
- **手动更新**: 点击按钮可以手动刷新时间
- **响应式设计**: 支持移动端和桌面端
- **极简风格**: 简洁的UI设计

## 安装和运行

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

启动本地开发服务器，访问 http://localhost:8788 查看页面。

### 构建项目

```bash
npm run build
```

将React代码打包到 `dist/` 目录。

### 部署到Cloudflare Pages

```bash
npm run deploy
```

将构建后的文件部署到Cloudflare Pages。

## 开发说明

- 源代码位于 `src/` 目录，使用React Hooks实现动态功能
- Webpack负责打包React应用，输出到 `dist/` 目录
- Cloudflare Pages用于静态文件托管和部署
- 支持热重载开发模式

## 许可证

MIT License
