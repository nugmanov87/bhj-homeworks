const chat = document.querySelector(".chat-widget");
const messagesChat = document.querySelector(".chat-widget__messages");
const messageField = document.querySelector(".chat-widget__input");

let hours = new Date().getHours();
let minutes = new Date().getMinutes();

chat.addEventListener("click", function() {
  if (!chat.classList.contains("chat-widget_active")) {
    chat.classList.add("chat-widget_active");
  }
});

messageField.addEventListener("keydown", function(e) {
  if (e.keyCode === 13 && e.target.value !== "") {
    messagesChat.innerHTML += messageClient();
    messagesChat.innerHTML += messageRobot();
  }
});

function messageClient() {
  let textMessage = event.target.value;

  return `<div class="message message_client">
        <div class="message__time">${hours}:${minutes}</div>
        <div class="message__text">${textMessage}</div>
    </div>`;
}

function messageRobot() {
  let robotMessage = [
    "Добрый день!",
    "Кто здесь?",
    "Как к вам обращаться?",
    "Где вы живете?"
  ];

  const random = Math.floor(Math.random() * robotMessage.length);
  robotRandomMessage = robotMessage[random];

  return `<div class="message">
        <div class="message__time">${hours}:${minutes}</div>
        <div class="message__text">${robotRandomMessage}</div>
    </div>`;
}
