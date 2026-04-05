---
title: 友情链接
date: 2024-03-10
---

<div class="friend-link-card">
  <a href="https://36ela.github.io/" target="_blank" style="text-decoration: none !important;">
    <div class="link-item">
      <img src="/img/links/link1.ico" alt="图标">
      <div class="link-info">
        <div class="link-title">第36届大学生英语爱好者协会微信公众号数据迁移站</div>
        <div class="link-desc">欢迎来到第36届大学生英语爱好者协会微信公众号数据存储和展示站<br>这里保存了协会的历史资料、活动信息和珍贵回忆</div>
      </div>
    </div>
  </a>
</div>

<div class="friend-link-card">
  <a href="https://36ela.github.io/" target="_blank" style="text-decoration: none !important;">
    <div class="link-item">
      <img src="/img/links/link1.ico" alt="图标">
      <div class="link-info">
        <div class="link-title">更多友情链接待添加。。。</div>
        <div class="link-desc">友情链接描述待添加。。。</div>
      </div>
    </div>
  </a>
</div>

<style>
.friend-link-card {
  margin: 30px auto;
  max-width: 600px;
}
.friend-link-card a {
  text-decoration: none;
  display: block;
}
.link-item {
  display: flex;
  gap: 20px;
  padding: 24px;
  background: var(--card-bg);
  border-radius: 20px;
  box-shadow: var(--card-box-shadow);
  border: 1px solid var(--card-border);
  transition: all 0.3s ease;
  background: color-mix(in srgb, var(--card-bg) 95%, black 5%);
}
[data-theme='dark'] .link-item {
  background: color-mix(in srgb, var(--card-bg) 95%, white 5%);
}
.link-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.1);
}
.link-item img {
  width: 70px;
  height: 70px;
  border-radius: 18px;
  background: var(--card-bg);
}
.link-info {
  flex: 1;
}
.link-title {
  font-weight: 600;
  font-size: 1.2rem;
  color: #1e293b;  /* 纯黑色 */
  margin-bottom: 8px;
  line-height: 1.4;
}
.link-desc {
  font-size: 0.95rem;
  color: #64748b;  /* 灰色 */
  line-height: 1.6;
}
</style>