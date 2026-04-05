---
title: 了解博主
date: 2024-01-01 00:00:00
type: "about"
comments: false
---

<style>
  /* 页面整体样式 */
  .about-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }
  
  /* 两个板块的共同样式 */
  .about-section {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 24px;
    padding: 30px 35px;
    margin-bottom: 30px;
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    transition: all 0.3s ease;
  }
  
  /* 深色模式适配 */
  [data-theme="dark"] .about-section {
    background: rgba(30, 30, 30, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
  }
  
  .section-title {
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0 0 25px 0;
    padding-bottom: 12px;
    border-bottom: 3px dashed #b19cd9;
    color: #1e293b;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  [data-theme="dark"] .section-title {
    color: #e2e8f0;
    border-bottom-color: #60a5fa;
  }
  
  .section-title i {
    color: #b19cd9;
    font-size: 2rem;
  }
  
  /* 关于我 - 左侧头像右侧信息的布局 */
  .profile-grid {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
  }
  
    .avatar-area {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 220px;  /* 增加固定宽度，让头像容器变宽 */
    }

    .avatar {
    width: 200px;    /* 宽度加大 */
    height: auto;    /* 高度自动，保持原图比例 */
    max-height: 280px; /* 限制最大高度，避免太高 */
    border-radius: 50px;  /* 改成圆角矩形，不用圆形了 */
    object-fit: cover;
    border: 5px solid #fff;
    box-shadow: 0 15px 30px -8px rgba(179, 157, 219, 0.3);
    transition: transform 0.3s ease;
    }
  
  .avatar:hover {
    transform: scale(1.02);
  }
  
  [data-theme="dark"] .avatar {
    border-color: #334155;
  }
  
  .signature {
    font-size: 1.1rem;
    font-style: italic;
    color: #4b5563;
    text-align: center;
    max-width: 210px;
    line-height: 1.5;
    padding: 10px 15px;
    background: rgba(59, 130, 246, 0.1);
    border-radius: 40px;
  }
  
  [data-theme="dark"] .signature {
    color: #cbd5e1;
    background: rgba(96, 165, 250, 0.1);
  }
  
  .info-area {
    flex: 1;
    min-width: 300px;
  }
  
  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 18px;
  }
  
  .info-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 16px;
    border: 1px solid rgba(203, 213, 225, 0.4);
    transition: all 0.2s;
  }
  
  [data-theme="dark"] .info-item {
    background: rgba(30, 41, 59, 0.6);
    border-color: rgba(51, 65, 85, 0.6);
  }
  
  .info-item:hover {
    transform: translateY(-2px);
    border-color: #b19cd9;
    box-shadow: 0 8px 16px -8px #b19cd9;
  }
  
  .info-icon {
    width: 40px;
    height: 40px;
    background: #b19cd9;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
    flex-shrink: 0;
  }
  
  .info-content {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .info-label {
    font-size: 0.85rem;
    color: #64748b;
    margin-bottom: 4px;
  }
  
  [data-theme="dark"] .info-label {
    color: #94a3b8;
  }
  
  .info-value {
    font-weight: 500;
    color: #0f172a;
    word-break: break-word;
  }
  
  [data-theme="dark"] .info-value {
    color: #e2e8f0;
  }
  
  .info-value a {
    color: #0f172a;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }
  
  .info-value a:hover {
    text-decoration: underline;
  }
  
  /* 关于本站的样式 */
  .site-info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .site-card {
    background: rgba(255, 255, 255, 0.6);
    border-radius: 20px;
    padding: 20px;
    border: 1px solid rgba(203, 213, 225, 0.4);
    transition: all 0.2s;
  }
  
  [data-theme="dark"] .site-card {
    background: rgba(30, 41, 59, 0.6);
    border-color: rgba(51, 65, 85, 0.6);
  }
  
  .site-card:hover {
    transform: translateY(-2px);
    border-color: #b19cd9;
    box-shadow: 0 8px 16px -8px #b19cd9;
  }
  
  .site-card-title {
    font-size: 1.3rem;
    font-weight: 600;
    margin: 0 0 15px 0;
    color: #1e293b;
    display: flex;
    align-items: center;
    gap: 8px;
    border-left: 4px solid #b19cd9;
    padding-left: 15px;
  }
  
  [data-theme="dark"] .site-card-title {
    color: #e2e8f0;
  }
  
  .site-detail {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .site-row {
    display: flex;
    align-items: baseline;
    gap: 10px;
    padding: 8px 0;
  }
  
  .site-label {
    min-width: 80px;
    color: #64748b;
    font-size: 0.95rem;
  }
  
  [data-theme="dark"] .site-label {
    color: #94a3b8;
  }
  
  .site-value {
    flex: 1;
  }
  
  .project-links {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 5px;
  }
  
  .project-link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    background: rgba(59, 130, 246, 0.05);
    border-radius: 14px;
    text-decoration: none;
    color: #1e293b;
    transition: all 0.2s;
    border: 1px solid transparent;
  }
  
  [data-theme="dark"] .project-link {
    background: rgba(96, 165, 250, 0.1);
    color: #e2e8f0;
  }
  
  .project-link:hover {
    background: rgba(59, 130, 246, 0.15);
    border-color: #b19cd9;
    transform: translateX(5px);
  }
  
  .project-link i {
    font-size: 1.5rem;
    min-width: 30px;
    text-align: center;
  }
  
  .fa-netlify {
    color: #00C7B7;
  }
  
  .fa-github {
    color: #333;
  }
  
  [data-theme="dark"] .fa-github {
    color: #fff;
  }
  
  .project-url {
    flex: 1;
    word-break: break-all;
    font-size: 0.9rem;
  }
  
  .project-url small {
    display: block;
    color: #64748b;
    font-size: 0.8rem;
    margin-bottom: 2px;
  }
  
  /* 响应式调整 */
  @media (max-width: 768px) {
    .profile-grid {
      justify-content: center;
    }
    .avatar-area {
      align-items: center;
    }
    .info-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="about-container">
  <!-- 关于我板块 -->
  <div class="about-section">
    <div class="section-title">
      <i class="fas fa-user"></i>
      <span> 关于我</span>
    </div>
    <div class="profile-grid">
      <!-- 左侧头像区域 -->
      <div class="avatar-area">
        <!-- 这里替换成你的头像图片地址 -->
        <img class="avatar" src="/img/about/avatar.jpg" alt="史国庆的头像" onerror="this.src='https://cdn.jsdelivr.net/npm/butterfly-extsrc@1.0.0/img/avatar.png'">
        <div class="signature">
          “我们一路奋战，不是为了改变世界，而是为了不让世界改变我们”
        </div>
      </div>
      <!-- 右侧信息区域 -->
      <div class="info-area">
        <div class="info-grid">
          <!-- 姓名 -->
          <div class="info-item">
            <div class="info-icon"><i class="fas fa-user-tag"></i></div>
            <div class="info-content">
              <div class="info-label">姓名</div>
              <div class="info-value">史国庆</div>
            </div>
          </div>
          <!-- 性别 -->
          <div class="info-item">
            <div class="info-icon"><i class="fas fa-venus-mars"></i></div>
            <div class="info-content">
              <div class="info-label">性别</div>
              <div class="info-value">男</div>
            </div>
          </div>
          <!-- 年龄 -->
          <div class="info-item">
            <div class="info-icon"><i class="fas fa-calendar-alt"></i></div>
            <div class="info-content">
              <div class="info-label">年龄</div>
              <div class="info-value">26岁</div>
            </div>
          </div>
          <!-- 出生地 -->
          <div class="info-item">
            <div class="info-icon"><i class="fas fa-map-marker-alt"></i></div>
            <div class="info-content">
              <div class="info-label">出生地</div>
              <div class="info-value">河北 · 唐山</div>
            </div>
          </div>
          <!-- 邮箱 1（主要） -->
          <div class="info-item" style="grid-column: span 2;">
            <div class="info-icon"><i class="fas fa-envelope"></i></div>
            <div class="info-content">
              <div class="info-label">邮箱（优先）</div>
              <div class="info-value">
                <a href="mailto:3118482822@qq.com">
                  3118482822@qq.com
                </a>
              </div>
            </div>
          </div>
          <!-- 邮箱 2（备用） -->
          <div class="info-item" style="grid-column: span 2;">
            <div class="info-icon"><i class="fas fa-envelope-open"></i></div>
            <div class="info-content">
              <div class="info-label">邮箱（备用）</div>
              <div class="info-value">
                <a href="mailto:shiguoqing99@gmail.com">
                  shiguoqing99@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 关于本站板块 -->
  <div class="about-section">
    <div class="section-title">
      <i class="fas fa-laptop-code"></i>
      <span> 关于本站</span>
    </div>
    <div class="site-info-grid">
      <!-- 技术框架卡片 -->
      <div class="site-card">
        <div class="site-card-title">
          <i class="fas fa-cogs"></i>
          技术框架
        </div>
        <div class="site-detail">
          <div class="site-row">
            <span class="site-label">项目框架</span>
            <span class="site-value"><strong>Hexo</strong> <span style="color: #b19cd9;">7.3.0</span></span>
          </div>
          <div class="site-row">
            <span class="site-label">项目主题</span>
            <span class="site-value"><strong>Butterfly</strong> <span style="color: #b19cd9;">5.5.4</span></span>
          </div>
        </div>
      </div>
      <!-- 项目地址卡片 -->
      <div class="site-card">
        <div class="site-card-title">
          <i class="fas fa-link"></i>
          项目地址
        </div>
        <div class="project-links">
          <!-- Netlify 链接 -->
          <a class="project-link" href="https://app.netlify.com/projects/shiguoqing/overview" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-netlify"></i>
            <span class="project-url">
              <small>Netlify 部署</small>
              app.netlify.com/projects/shiguoqing/overview
            </span>
            <i class="fas fa-external-link-alt" style="font-size: 0.9rem; opacity: 0.6;"></i>
          </a>
          <!-- GitHub 链接 -->
          <a class="project-link" href="https://github.com/shiguoqing99/shiguoqing99.github.io" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i>
            <span class="project-url">
              <small>GitHub Pages 部署</small>
              github.com/shiguoqing99/shiguoqing99.github.io
            </span>
            <i class="fas fa-external-link-alt" style="font-size: 0.9rem; opacity: 0.6;"></i>
          </a>
        </div>
      </div>
    </div>
    <!-- 补充说明（可选） -->
    <div style="margin-top: 25px; padding: 15px; background: rgba(59, 130, 246, 0.05); border-radius: 16px; font-size: 0.95rem; color: #475569;">
      <i class="fas fa-info-circle" style="color: #b19cd9; margin-right: 8px;"></i>
      本站基于 Hexo 框架搭建，使用 Butterfly 主题，通过 Netlify 和 GitHub Pages 双线部署，确保访问稳定，<strong>两个项目内容完全一致</strong>。
    </div>
  </div>
</div>

<!-- 确保 Font Awesome 图标能正常显示（如果主题没有加载，可以取消下面这行的注释） -->
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"> -->