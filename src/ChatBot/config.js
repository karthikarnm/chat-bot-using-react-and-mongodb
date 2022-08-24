import { createChatBotMessage } from "react-chatbot-kit";
import "./todos"
import Todos from "./todos";

const config = {

  initialMessages: [createChatBotMessage(`Hello Mate`)],
  botName: "DotBot",

  state: {
    todos: []
  },
  widgets: [{
    widgetName: "todos",
    widgetFunc: (props) => <Todos {...props} />,
    mapStateToProps: ["todos"]
  }]
}

export default config