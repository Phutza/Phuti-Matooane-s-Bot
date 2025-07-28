const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

 
  if (document.body.classList.contains("light-mode")) {
    toggleThemeBtn.textContent = "Switch to Dark Mode";
  } else {
    toggleThemeBtn.textContent = "Switch to Light Mode";
  }
});

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  displayMessage("You", message, "user-msg");
  respond(message.toLowerCase());
  userInput.value = "";
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
  let response;

  if (message.includes("who made you") || message.includes("developer")) {
    response = `I was developed by Phuti Matooane. View the developer profile here: <a href="https://phutza.github.io/My-portfolio/" target="_blank" rel="noopener noreferrer">My Portfolio</a>`;
  } else if (message.includes("hello") || message.includes("hi")) {
    response = "Hello! 👋 I'm Phuti Matooane's Bot. How can I help you today?";
  } else if (message.includes("how are you")) {
    response = "I'm just code, but I'm functioning perfectly 😄";
  } else if (message.includes("bye")) {
    response = "Goodbye! Come back soon!";
  } else {
    response = "I'm still learning. Please try asking something else!";
  }

  displayMessage("Bot", response, "bot-msg");
}


userInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});
