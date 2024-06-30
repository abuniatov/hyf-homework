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

    // Add a task to your todo list
    if (command.startsWith("add")) {
      const todo = command
        .replace("add ", "")
        .replace(" to my todo", "")
        .trim();
      if (todo) {
        todos.push(todo);
        return `${todo} added to your todo`;
      } else {
        return "Please provide a valid todo item.";
      }
    }

        // Remove a task from your todo list
    if (command.startsWith("remove")) {
      const todo = command
        .replace("remove ", "")
        .replace(" from my todo", "")
        .trim();
      const index = todos.indexOf(todo);
      if (index > -1) {
        todos.splice(index, 1);
        return `Removed ${todo} from your todo`;
      } else {
        return `${todo} is not in your todo list`;
      }
    }

    // Respond with your todo list
    if (command === "what is on my todo?") {
      if (todos.length === 0) {
        return "Your todo list is empty.";
      }
      return `You have ${todos.length} todo${todos.length > 1 ? "s" : ""}: ${todos.join(" and ")}`;
    }

      // Current date
    if (command === "what day is it today?") {
      const today = new Date();
      const options = { day: "numeric", month: "long", year: "numeric" };
      return today.toLocaleDateString("en-US", options);
    }