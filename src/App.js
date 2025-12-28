import React, { useState, useEffect } from 'react';

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
    <div className="container">
      <header>
        <h1>MOON</h1>
        <p className="subtitle">您的职位或简介</p>
      </header>
      <section className="about">
        <h2>关于我</h2>
        <p>Hello</p>
      </section>
      <section className="contact">
        <h2>联系方式</h2>
        <ul>
          <li><a href="mailto:your.email@example.com">邮箱</a></li>
          <li><a href="https://github.com/yourusername">GitHub</a></li>
          <li><a href="https://linkedin.com/in/yourprofile">LinkedIn</a></li>
        </ul>
      </section>
      <section className="dynamic-content">
        <h2>动态内容</h2>
        <p>当前时间: {timeString}</p>
        <button onClick={updateTime}>更新时间</button>
      </section>
    </div>
  );
}

export default App;
