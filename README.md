<div align="center">
  <img src="dist/assets/orbi-icon.png" width="100" height="100" alt="Orbi">
  <h1>Orbi 1.2</h1>
  <p>音乐、日程、剪贴板。轻轻移入，在 Mac 顶部展开你的日常。</p>
  <p>A native notch workspace for your Mac. Designed & created by <strong>PaJii</strong>.</p>
  <p><a href="https://kaitangkevin.github.io/Orbi/">访问官网 / Website</a> · <a href="https://kaitangkevin.github.io/Orbi/download/">下载 Orbi 1.2 / Download</a> · <a href="https://kaitangkevin.github.io/Orbi/download/#whats-new">完整更新内容 / What’s New</a></p>
</div>

## 下载与系统要求

**请从 [Orbi 官网下载页面](https://kaitangkevin.github.io/Orbi/download/) 获取当前版本。**

| 项目 | 当前版本 |
|---|---|
| 版本 | **1.2**（Build 3） |
| 发布日期 | 2026 年 11 月 2 日 |
| 系统 | **macOS 26.6 或更新版本** |
| 架构 | Apple silicon 与 Intel 通用版本 |
| 安装方式 | 打开 DMG，将 Orbi 拖入 Applications |
| 语言 | 简体中文、English、跟随系统 |
| 创作者 | **PaJii** |

当前版本独立分发，未使用 Apple Developer ID 签名或 Apple 公证。首次打开说明、系统要求和文件校验值均在 [官网安装指南](https://kaitangkevin.github.io/Orbi/download/#install) 中提供。

## 1.2 本次更新

### 全新展开界面

- 展开面板调整为 **1040 × 180**，重新分配音乐、日历和剪贴板的空间。
- 顶部两侧加入与屏幕边缘衔接的**反向圆弧**，底部圆角加大。
- 放大文字、图标、封面和播放控件，让内容更充实、更易读。
- 删除展开面板里的 Music、Calendar、Clipboard 重复标题。

### 音乐与音频

- 音乐卡片改成**左侧大封面，右侧歌曲名、歌手，下方三个播放按钮与细进度条**。
- Apple Music 打开就显示卡片；暂停或没有声音时保留歌曲信息，未选择歌曲时显示占位内容。
- 将播放活动与波形音量分开判断，静音片段不再只因音量为零就收起。
- 音频与电量的收起提示统一为 **276** 的宽度，左右各延伸 **48**。
- 从源头排除 **PowerChime**，避免将插电提示音识别成音乐。
- Apple Music 提供明确的播放状态；其他播放器通过系统输出活动判断，暂停识别仍取决于播放器行为。

### 充电与低电量

- 连接电源时，独立显示电源图标和电量百分比。
- 电量低于 **20%** 时持续显示橙色提醒。
- 音乐开始播放后替换电量提示；播放停止后，若仍需显示电量，则自动切回。
- 充电和低电量提醒都可在设置中单独开关。

### 日历与剪贴板

- 日历改为**月份＋七天日期条＋日程列表**，突出今天，显示全天和后续日程。
- 日历未授权时提供说明和设置入口。
- 剪贴板的文字和行高放大，保留最近 **15** 条文本，支持重新复制和清空。
- 剪贴板历史只存于运行内存，退出 Orbi 后清除。

### 设置中心与授权

- 全新设置布局：搜索、彩色分类图标、蓝色选中状态、返回／前进和可隐藏的侧边栏。
- 工作区、音乐、日历、剪贴板、电池、权限、软件更新各有对应页面。
- 查看系统音频、Apple Music 自动化、日历、剪贴板和登录启动的访问状态。
- 提供请求授权、打开系统设置、刷新状态和验证音频的入口。
- 系统音频通过实际采集验证“待验证／已验证可用”，不会把静音误报为未授权。
- 增加偏好设置重置、剪贴板清空确认和操作失败提示。

### 应用内更新与其他

- 菜单栏与设置中加入**检查更新**，支持可选的自动检查与自动下载。
- 更新包使用 Sparkle Ed25519 签名校验，支持应用内下载、安装和重新启动。
- 更新源与官网下载使用相同的正式版本包，版本与构建号一致。
- 改善 Xcode 预览的启动行为，预览时不启动后台采集。
- 设计与创作、版权署名统一为 **PaJii**。

[在官网查看完整更新与安装说明 →](https://kaitangkevin.github.io/Orbi/download/#whats-new)

## 官网也已更新

- 首页交互已按 Orbi 1.2 重做：反向圆弧、三栏展开、大封面、日期条与剪贴板。
- 可切换待机、音乐、充电和低电量状态；体验示例切歌、暂停、进度和清空。
- 增加设置交互预览，模块开关可影响网页中的演示。
- 产品介绍、下载页、安装指南、权限说明、FAQ 和关于页面均同步新版功能。
- 支持中英文与手机端布局，保留 DailyLaunch、MacNative 徽章。
- 网页交互使用示例数据，不会读取访客的音乐、日历或剪贴板。

[体验新版首页 →](https://kaitangkevin.github.io/Orbi/)

## 已有用户如何升级

1. 退出旧版 Orbi。
2. 从 [官网](https://kaitangkevin.github.io/Orbi/download/) 下载 1.2，把新版拖入 Applications 并替换旧应用。
3. 重新打开 Orbi，在设置中检查模块和权限。
4. 原先没有更新器的版本需要手动替换这一次；安装带更新器的版本后，可从“设置 → 软件更新”获取后续更新。

## 仓库范围

**Orbi 原生应用源码不公开。** 此仓库仅用于：

- 官网 HTML、CSS、JavaScript 与公共图片资源；
- 使用说明、版本更新记录及下载校验信息；
- 官网提供的 DMG 二进制安装包；
- 应用内更新清单及 GitHub Pages 部署配置。

应用的 Swift 源码、Xcode 工程、私钥、证书和开发数据不提交到这里。公开静态托管中的安装文件仍可通过文件地址访问；README 和面向用户的下载入口统一引导至官网，不创建 GitHub Releases 下载入口。

## 网站开发与部署

```sh
PAGES_BASE_PATH= python3 scripts/build-pages.py
python3 -m http.server 8000 --directory _site
```

默认部署路径为 `/Orbi`。GitHub Actions 从 Pages 配置获取实际路径，并将 `dist/` 导出到 `_site/` 后部署。

| 路径 | 用途 |
|---|---|
| `dist/index.html` | 首页入口与原始静态徽章 |
| `dist/app.js` | 导航、语言、页面入口与页脚 |
| `dist/product.js` | 新版首页与交互演示 |
| `dist/pages.js` | 下载、更新记录、安装、权限、FAQ 与关于 |
| `dist/release.js` | 当前版本、构建号、文件大小与 SHA-256 |
| `dist/downloads/` | 官网安装包与校验文件 |
| `dist/updates/appcast.xml` | Sparkle 更新清单 |
| `.github/workflows/` | GitHub Pages 自动部署 |

## 反馈与版权

使用前请阅读 [官网说明](https://kaitangkevin.github.io/Orbi/download/#faq)。反馈中请避免公开私人日历内容、剪贴板文字或其他个人资料。

**© 2026 PaJii · Orbi. 保留所有权利。**

Orbi 是独立应用，与 Apple 无隶属关系。Apple、Mac、macOS 和 Apple Music 名称用于说明平台与集成功能。
