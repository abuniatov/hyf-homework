const voiceAssistant = (function () {
  let userName = "";
  let todos = [];
  let timers = {};

  function getReply(command) {
    command = command.toLowerCase().trim();
    // Greeting
    if (command.startsWith("hello my name is ")) {
      const name = command.replace("hello my name is ", "").trim();
      if (userName === name) {
        return `You have already introduced yourself as ${userName}.`;
      } else {
        userName = name;
        return `Nice to meet you, ${userName.charAt(0).toUpperCase() + userName.slice(1)}.`;
      }
    }

    // Name response
    if (command === "what is my name?") {
      return userName
        ? `Your name is ${userName}`
        : "You haven't told me your name yet.";
    }
