class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }
  handler1 = () => {
    const message = this.createChatBotMessage("Go to the nav bar u will find the sign Up option and Register")
    this.setChatbotMesssage(message)
  };
  handler2 = () => {
    const message = this.createChatBotMessage("Go to the menu and click on Contact ")
    this.setChatbotMesssage(message)
  };
  handler3 = () => {
    const message = this.createChatBotMessage("For any complaint DOT Glasses headquarters info@dotglass.org mail us  ")

    this.setChatbotMesssage(message)
  };
  handler = () => {
    const message = this.createChatBotMessage("hello wellcome to dot glasses.Please enter 'Help' for more details")
    this.setChatbotMesssage(message)
  };
  todoshandler = () => {
    const message = this.createChatBotMessage("choose the options", {
      widget: "todos",
    })
    this.setChatbotMesssage(message);
  };


  setChatbotMesssage = (message) => {
    this.setState(state => ({
      ...state, messages: [...state.messages, message]
    }))
  }

}

export default ActionProvider;