# 星导员小轨与任务收尾 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将星导员小轨升级为克制的伪 3D 动态探测器，并在完成九个天体探索后播放任务收尾动画再返回总览。

**Architecture:** 保留现有 Three.js 与任务数据结构。角色视觉由语义化 HTML 层和 CSS 3D 变换完成；任务完成由现有 `completeMissionTarget()` 触发独立全屏 overlay，结束后调用 `showOverview(false)`。

**Tech Stack:** HTML、CSS、原生 JavaScript、Three.js、Node.js 静态回归测试。

---

### Task 1: 结构回归测试

**Files:**
- Create: `tests/guide-finale.test.mjs`

- [ ] 写入测试，验证小轨立体结构、任务完成 overlay 和完成流程函数存在。
- [ ] 运行 `node --test tests/guide-finale.test.mjs`，确认修改前失败。

### Task 2: 星导员小轨视觉升级

**Files:**
- Modify: `index.html`
- Modify: `style.css`

- [ ] 为两个小轨实例加入核心、轨道环、机械耳、扫描眼和声波结构。
- [ ] 使用 CSS perspective、渐变、高光、阴影和错速动画构建立体感。
- [ ] AI 面板中的小轨固定于右下区域；资料卡中的小轨保持正文流内。
- [ ] 添加移动端尺寸与 reduced-motion 降级。

### Task 3: 任务完成收尾

**Files:**
- Modify: `index.html`
- Modify: `style.css`
- Modify: `script.js`

- [ ] 新增任务完成 overlay、环形扫描、进度标记和粒子层。
- [ ] 将 `launchMissionCelebration()` 改为单次约 3 秒流程。
- [ ] 动画结束时关闭资料卡与语音，返回太阳系总览并恢复 AI 导航。
- [ ] 再次运行测试，确认通过。

### Task 4: 浏览器验证

- [ ] 检查页面加载、控制台和首屏。
- [ ] 验证进入后小轨位置、朗读状态动画和移动端无遮挡。
- [ ] 临时触发任务完成流程，验证 overlay 结束后回到总览。
