// 脚本文件 - 可添加交互功能

// 获取当前时间并显示
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('current-time').textContent = '当前时间: ' + timeString;
}

// 页面加载时更新时间
window.addEventListener('load', updateTime);

// 按钮点击事件
document.getElementById('update-time').addEventListener('click', updateTime);
