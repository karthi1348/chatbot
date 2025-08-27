document.addEventListener("DOMContentLoaded", () => {
  /* ---------------------------
     Horizontal Scrolling
  ----------------------------*/
  const scrollBtns = document.querySelectorAll(".scroll-btn");

  scrollBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const row = document.getElementById(targetId);

      // Scroll 1 card width (adjust if needed)
      row.scrollBy({
        left: 240, 
        behavior: "smooth"
      });
    });
  });

  /* ---------------------------
     Chatbot Toggle
  ----------------------------*/
  const chatbot = document.getElementById("chatbot");
  const chatbotIcon = document.getElementById("chatbotIcon");
  const chatbotToggle = document.getElementById("chatbotToggle");

  // Open/close by clicking chat bubble
  chatbotIcon.addEventListener("click", () => {
    chatbot.classList.toggle("minimized");
  });

  // Minimize button inside chatbot
  chatbotToggle.addEventListener("click", () => {
    chatbot.classList.add("minimized");
  });

  /* ---------------------------
     Chatbox (simple mock send)
  ----------------------------*/
  const form = document.querySelector(".chatbox-area");
  const textarea = document.querySelector(".chatbox");
  const chatlist = document.querySelector(".chatlist");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userText = textarea.value.trim();
    if (userText === "") return;

    // Append user message
    const li = document.createElement("li");
    li.textContent = userText;
    li.classList.add("user__output");
    chatlist.appendChild(li);

    textarea.value = "";

    // Fake bot reply
    setTimeout(() => {
      const reply = document.createElement("li");
      reply.textContent = "I heard you say: " + userText;
      reply.classList.add("bot__output");
      chatlist.appendChild(reply);

      // Auto scroll to bottom
      chatlist.scrollTop = chatlist.scrollHeight;
    }, 800);
  });
});
