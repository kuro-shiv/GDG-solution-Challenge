document.getElementById('report-btn').addEventListener('click', function() {
    generateReport();
});

document.getElementById('chatbot-btn').addEventListener('click', function() {
    toggleChatbot();
});

document.getElementById('send-chat').addEventListener('click', function() {
    sendChatMessage();
});

function generateReport() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text("EduAccess - Student Report", 10, 10);
    doc.text("This is a sample student performance report.", 10, 20);
    doc.save("EduAccess_Report.pdf");
}

function toggleChatbot() {
    let chatbot = document.getElementById('chatbot-container');
    chatbot.classList.toggle('hidden');
}

function sendChatMessage() {
    let input = document.getElementById('chat-input').value;
    let chatOutput = document.getElementById('chat-output');
    
    if (input.trim() !== "") {
        let newMessage = document.createElement("p");
        newMessage.textContent = "You: " + input;
        chatOutput.appendChild(newMessage);
    }
}

async function loadNotices() {
    let notices = [
        "Upcoming Scholarship Deadlines",
        "New Learning Modules Added",
        "Support Group Sessions Starting Soon"
    ];

    let noticeList = document.getElementById('notice-list');
    noticeList.innerHTML = "";

    notices.forEach(notice => {
        let li = document.createElement("li");
        li.textContent = notice;
        noticeList.appendChild(li);
    });
}

window.onload = loadNotices;
