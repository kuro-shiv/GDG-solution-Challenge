// Function for the "Learn More" button in the MVP section


function showMessage() {
    alert("EduAccess MVP includes AI-based learning, offline support, and engagement tracking.");
}



// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: "smooth"
                });
            }
        });
    });
});


// chat-bot


document.addEventListener("DOMContentLoaded", function () {
    const chatIcon = document.getElementById("chat-icon");
    const chatContainer = document.getElementById("chat-container");
    const closeChatBtn = document.getElementById("close-chat");
    const sendBtn = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");

    // Expand chatbot on click
    chatIcon.addEventListener("click", function () {
        chatContainer.style.display = "block";
        chatIcon.style.display = "none";
    });

    // Close chatbot
    closeChatBtn.addEventListener("click", function () {
        chatContainer.style.display = "none";
        chatIcon.style.display = "flex";
    });

    // Hover effect on minimized chat icon
    chatIcon.addEventListener("mouseenter", function () {
        chatIcon.style.transform = "scale(1.1)";
    });

    chatIcon.addEventListener("mouseleave", function () {
        chatIcon.style.transform = "scale(1)";
    });

    // Send message when clicking send button
    sendBtn.addEventListener("click", sendMessage);

    // Send message on pressing Enter
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    });
});

function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let chatBox = document.getElementById("chat-box");

    if (userInput.trim() === "") return;

    // Add User Message
    let userMessage = document.createElement("div");
    userMessage.className = "chat-message user";
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // Generate Bot Response
    let botResponse = getBotResponse(userInput);
    let botMessage = document.createElement("div");
    botMessage.className = "chat-message bot";
    botMessage.textContent = botResponse;
    chatBox.appendChild(botMessage);

    // Scroll Chat to Bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear Input Field
    document.getElementById("user-input").value = "";
}

function getBotResponse(input) {
    input = input.toLowerCase();

    // Basic rule-based responses
    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How can I assist you with EduAccess?";
    } else if (input.includes("courses")) {
        return "We offer various AI-driven courses. Check the Learning Hub!";
    } else if (input.includes("scholarships")) {
        return "Yes! Scholarships are available. Visit the Announcements section.";
    } else if (input.includes("help")) {
        return "I'm here to help! Ask about courses, scholarships, or learning resources.";
    } else {
        return "I'm still learning. Try asking about courses, scholarships, or help!";
    }
}
