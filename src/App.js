import React, { useState, useEffect } from 'react';

// 导航栏组件
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">🌙 MOON</div>
        <ul className="nav-links">
          <li><a href="#home">🏠 首页</a></li>
          <li><a href="#about">👋 关于</a></li>
          <li><a href="#contact">📬 联系</a></li>
          <li><a href="#dynamic">⚡ 动态</a></li>
        </ul>
      </div>
    </nav>
  );
}

// 卡片组件
function Card({ children, icon, title }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon">{icon}</div>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}

// 主要应用组件
function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const updateTime = () => {
    setCurrentTime(new Date());
  };

  const timeString = currentTime.toLocaleString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <>
      <Navbar />
      <main className="main-content">
        <div className="container">
          {/* 首页卡片 */}
          <Card icon="🌙" title="欢迎来到我的主页">
            <div id="home">
              <h1>MOON</h1>
              <p className="subtitle">您的职位或简介</p>
            </div>
          </Card>

          {/* 关于我卡片 */}
          <Card icon="👋" title="关于我">
            <div id="about">
              <p>Hello！我是一个热爱创造和分享的前端开发者。</p>
              <p>喜欢用代码解决有趣的问题，享受学习新技术带来的快乐。</p>
            </div>
          </Card>

          {/* 联系方式卡片 */}
          <Card icon="📬" title="联系方式">
            <div id="contact">
              <a href="mailto:your.email@example.com" className="contact-item">
                邮箱联系
              </a>
              <a href="https://github.com/yourusername" className="contact-item" target="_blank" rel="noopener noreferrer">
                GitHub 主页
              </a>
              <a href="https://linkedin.com/in/yourprofile" className="contact-item" target="_blank" rel="noopener noreferrer">
                LinkedIn 简介
              </a>
            </div>
          </Card>

          {/* 动态内容卡片 */}
          <Card icon="⚡" title="动态内容">
            <div id="dynamic" className="dynamic-content">
              <div className="time-display">
                🕐 当前时间: {timeString}
              </div>
              <button className="update-btn" onClick={updateTime}>
                🔄 更新时间
              </button>
            </div>
          </Card>
        </div>
      </main>
    </>
  );
}

export default App;
