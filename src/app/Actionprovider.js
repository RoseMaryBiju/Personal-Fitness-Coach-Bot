import OpenAI  from "openai";
//import { createChatBotMessage, createClientMessage, createCustomMessage } from "react-chatbot-kit";

const openai = new OpenAI(
    {
        apiKey : '9560582c1f8e48b0b0db32d1307d2a32',
        baseURL: 'https://api.aimlapi.com',
        dangerouslyAllowBrowser: true
    }
)

class ActionProvider {
    createChatBotMessage
    setStateFunc
    createClientMessage
    stateRef
    createCustomMessage

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
        this.createClientMessage =createClientMessage ;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage
    }



    callGenAI = async (prompt) => {
        const chatCompletion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {role:"system", content:"you are a A fitness-focused chatbot that provides workout routines, tracks progress, suggests meal plans, and gives daily motivational messages."},
                {role:"user",content: prompt}
            ],
            temperature:0.5, //creativity of the gen ai response
            max_tokens: 50 //create 50 tokens out of the user prompt 

        });
        return chatCompletion.choices[0].message.content;
        //0 first response model sent us and the message content
    }
//ux part giving the notion that bot is taking some time thinking and answering
timer = ms => new Promise(res => setTimeout(res, ms));

generateResponseMessage = async (userMessage) => {
    const responseFromGPT = await this.callGenAI(userMessage);
    let message;
    let numberNoLines = responseFromGPT.split('/n').length;
    for(let i =0; i<numberNoLines; i++){
        const msg = responseFromGPT.split('/n')[i];
        if(msg.length){
            console.log('KW101', msg)
            message = this.createChatBotMessage(msg);
            this.updateChatBotMessege(message);

        }
        await this.timer(1000);  // wait for 1 sec to print the next line
    }
}

respond = (message) => {
    this.generateResponseMessage(message);  
}

updateChatBotMessege = (message) => {
    this.setState(prevState => ({
        ...prevState, messages:[...prevState.messages, message]
    }))
}

}

export default ActionProvider;

