const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggleThemeBtn.textContent = document.body.classList.contains("light-mode")
    ? "Switch to Dark Mode"
    : "Switch to Light Mode";
});

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  displayMessage("You", message, "user-msg");
  simulateTyping(() => respond(message.toLowerCase()));
  userInput.value = "";
}

function simulateTyping(callback) {
  displayMessage("Bot", "Typing...", "bot-msg");
  setTimeout(() => {
    const botMsgs = document.querySelectorAll(".bot-msg");
    if (botMsgs.length > 0) chatbox.removeChild(botMsgs[botMsgs.length - 1]);
    callback();
  }, 800);
}

function displayMessage(sender, text, className = "") {
  const div = document.createElement("div");
  div.className = className;

  if (className === "bot-msg") {
    div.innerHTML = `
      <span class="avatar">🤖</span>
      <div><strong>${sender}:</strong> ${text}</div>
    `;
  } else {
    div.innerHTML = `<strong>${sender}:</strong> ${text}`;
  }

  chatbox.appendChild(div);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function respond(message) {
  let response = "";

  if (message.includes("who made you") || message.includes("developer")) {
    response = `I was developed by Phuti Matooane using HTML, CSS, and JavaScript. <a href="https://phutza.github.io/My-portfolio/" target="_blank">Visit my portfolio</a>`;
  } else if (
    message.includes("tell me about your developer") ||
    message.includes("about your developer")
  ) {
    response = `Phuti Matooane is a 26-year-old developer who loves to code. He invented this bot and has worked on many other projects. He grew up in Sebokeng, Zone 7, attended Tlholo Primary School, and completed his matric at Kgokare Secondary School. 💻🔥`;
  } else if (["hello", "hi", "hey"].some(w => message.includes(w))) {
    response = "Hey there! 👋 How can I assist you today?";
  } else if (message.includes("how are you")) {
    response = "I'm just a happy bunch of code, running smoothly 😄";
  } else if (message.includes("what is your name")) {
    response = "I'm Phuti Matooane's Bot 🤖, at your service!";
  } else if (message.includes("what can you do")) {
    response = "I can chat with you, tell jokes, give motivation, and share time or weather info. I'm always learning!";
  } else if (message.includes("joke")) {
    response = "Why did the JavaScript developer go broke? Because he kept using 'var' when he should've been using 'let'! 😄";
  } else if (message.includes("motivate") || message.includes("motivation")) {
    response = "Believe in yourself! Every great developer started with a simple 'Hello, World!'";
  } else if (message.includes("bye")) {
    response = "Goodbye! Come back anytime 🫡";
  } else if (message.includes("time")) {
    const now = new Date();
    response = `The current time is ${now.toLocaleTimeString()}`;
  } else if (message.includes("date") || message.includes("day")) {
    const today = new Date();
    response = `Today is ${today.toDateString()}`;
  } else if (message.includes("weather")) {
    response = "I'm not connected to the internet yet, so I can't fetch real-time weather 🌧️. Maybe in a future update!";
  } else if (message.includes("language")) {
    response = "I'm built using HTML, CSS, and JavaScript!";
  } else if (message.includes("where is your developer from")) {
    response = "Phuti Matooane is a 25-year-old developer who grew up in the dusty streets of Sebokeng in a township called Zone 7. He attended primary and high school there. He is passionate about software development and created me!";
  } else {
    response = "Hmm... I didn't catch that. Can you try rephrasing it?";
  }

  displayMessage("Bot", response, "bot-msg");
}

userInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});
