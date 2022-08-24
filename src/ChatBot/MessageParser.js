class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message)

    const lowercase = message.toLowerCase()
    console.log(this.state)

    if (lowercase.includes("hello")) {
      this.actionProvider.handler()
      console.log("wellcome to dot glasses")
    }
    if (lowercase.includes("help")) {
      this.actionProvider.todoshandler();
    }
    if (lowercase.includes("1")) {
      this.actionProvider.handler1();
    }
    if (lowercase.includes("2")) {
      this.actionProvider.handler2();
    }
    if (lowercase.includes("3")) {
      this.actionProvider.handler3();
    }
  }
}

export default MessageParser;
