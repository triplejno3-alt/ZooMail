// 动物园邮局 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const zooMap = document.getElementById('zoo-map');
    const writeLetter = document.getElementById('write-letter');
    const receivedLetters = document.getElementById('received-letters');
    const letterForm = document.getElementById('letter-form');
    const lettersList = document.getElementById('letters-list');

    let selectedAnimal = null;

    // 动物选择
    document.querySelectorAll('.animal').forEach(animal => {
        animal.addEventListener('click', function() {
            selectedAnimal = this.dataset.animal;
            zooMap.style.display = 'none';
            writeLetter.style.display = 'block';
            document.getElementById('delay').value = getDefaultDelay(selectedAnimal);
            toggleDelayOptions();
        });
    });

    // 发送方式切换
    document.querySelectorAll('input[name="send-type"]').forEach(radio => {
        radio.addEventListener('change', toggleDelayOptions);
    });

    function toggleDelayOptions() {
        const sendType = document.querySelector('input[name="send-type"]:checked').value;
        const delayOptions = document.getElementById('delay-options');
        if (sendType === 'immediate') {
            delayOptions.style.display = 'none';
        } else {
            delayOptions.style.display = 'block';
        }
    }

    // 获取默认延迟时间
    function getDefaultDelay(animal) {
        const delays = {
            turtle: 7,
            owl: 3,
            rabbit: 1
        };
        return delays[animal] || 1;
    }

    // 提交信件
    letterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const recipient = document.getElementById('recipient').value;
        const message = document.getElementById('message').value;
        const sendType = document.querySelector('input[name="send-type"]:checked').value;

        if (sendType === 'immediate') {
            // 立即发送邮件
            const subject = encodeURIComponent('来自动物园邮局的信件');
            const body = encodeURIComponent(`${getAnimalName(selectedAnimal)}为你送来一封信：\n\n${message}`);
            window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
            alert(`${getAnimalName(selectedAnimal)}正在为你立即发送邮件！`);
        } else {
            // 延迟发送
            const delay = parseInt(document.getElementById('delay').value);
            const letter = {
                recipient: recipient,
                message: message,
                animal: selectedAnimal,
                timestamp: Date.now(),
                deliveryTime: Date.now() + (delay * 24 * 60 * 60 * 1000) // 延迟天数转毫秒
            };

            // 存储到localStorage
            let letters = JSON.parse(localStorage.getItem('zooMailLetters') || '[]');
            letters.push(letter);
            localStorage.setItem('zooMailLetters', JSON.stringify(letters));

            alert(`${getAnimalName(selectedAnimal)}将会在${delay}天后送达你的信件！`);
        }

        // 重置表单
        letterForm.reset();
        writeLetter.style.display = 'none';
        zooMap.style.display = 'block';
        selectedAnimal = null;
    });

    // 获取动物名称
    function getAnimalName(animal) {
        const names = {
            turtle: '🐢 乌龟',
            owl: '🦉 猫头鹰',
            rabbit: '🐇 兔子'
        };
        return names[animal] || animal;
    }

    // 检查和显示收到的信件
    function checkReceivedLetters() {
        const now = Date.now();
        let letters = JSON.parse(localStorage.getItem('zooMailLetters') || '[]');
        const received = letters.filter(letter => letter.deliveryTime <= now);

        if (received.length > 0) {
            receivedLetters.style.display = 'block';
            lettersList.innerHTML = '';

            received.forEach(letter => {
                const letterDiv = document.createElement('div');
                letterDiv.className = 'letter-item';
                letterDiv.innerHTML = `
                    <h3>${getAnimalName(letter.animal)}送来了一封信！</h3>
                    <p><strong>发件人：</strong>${letter.recipient}</p>
                    <p><strong>内容：</strong></p>
                    <p>${letter.message.replace(/\n/g, '<br>')}</p>
                    <p><small>发送时间：${new Date(letter.timestamp).toLocaleString()}</small></p>
                `;
                lettersList.appendChild(letterDiv);
            });

            // 从存储中移除已显示的信件
            letters = letters.filter(letter => letter.deliveryTime > now);
            localStorage.setItem('zooMailLetters', JSON.stringify(letters));
        }
    }

    // 页面加载时检查信件
    checkReceivedLetters();

    // 每分钟检查一次新信件
    setInterval(checkReceivedLetters, 60000);

    // 添加导航按钮
    const nav = document.createElement('nav');
    nav.innerHTML = `
        <button id="view-letters-btn">查看收到的信件</button>
        <button id="write-new-btn">写新信</button>
    `;
    document.querySelector('header').appendChild(nav);

    document.getElementById('view-letters-btn').addEventListener('click', function() {
        zooMap.style.display = 'none';
        writeLetter.style.display = 'none';
        receivedLetters.style.display = 'block';
        checkReceivedLetters();
    });

    document.getElementById('write-new-btn').addEventListener('click', function() {
        zooMap.style.display = 'block';
        writeLetter.style.display = 'none';
        receivedLetters.style.display = 'none';
    });
});
