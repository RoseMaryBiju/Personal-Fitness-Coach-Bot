//const { defaultHead } = require("next/head");

// to store messeges from gpt
class MessageParser {
    constructor(actionProvider, state){
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse = (message) => {
        this.actionProvider.respond(message);
    }
}

export default MessageParser;