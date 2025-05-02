// Xử lý form bài test
document.getElementById('holland-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const answers = {};
    formData.forEach((value, key) => {
        answers[key] = value;
    });

    // Gửi dữ liệu đến server Python
    try {
        const response = await fetch('http://localhost:5000/process', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(answers)
        });
        const result = await response.json();

        // Hiển thị kết quả
        document.getElementById('test-section').classList.add('hidden');
        document.getElementById('result-section').classList.remove('hidden');
        document.getElementById('result-content').innerHTML = result.html;
    } catch (error) {
        console.error('Error:', error);
        alert('Có lỗi xảy ra. Vui lòng thử lại!');
    }
});

// Xử lý chatbox
const chatbox = document.getElementById('chatbox');
const toggleChat = document.getElementById('toggle-chat');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');

toggleChat.addEventListener('click', () => {
    chatbox.classList.toggle('hidden');
    toggleChat.classList.toggle('hidden');
});

function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    // Hiển thị tin nhắn người dùng
    const userMsg = document.createElement('div');
    userMsg.textContent = `Bạn: ${message}`;
    chatMessages.appendChild(userMsg);

    // Giả lập phản hồi từ Grok
    const grokMsg = document.createElement('div');
    grokMsg.textContent = `Grok: Tôi sẽ giúp bạn hiểu rõ hơn về kết quả. Bạn muốn hỏi gì về nhóm ${message}?`;
    chatMessages.appendChild(grokMsg);

    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
}