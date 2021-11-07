 import React, {useState} from "react"
 import { sendMessage, isTyping } from "react-chat-engine"
 const MessageForm = (props) => {
     const [message,setMessage ] = useState('');
     const {chatId, creds} = props;

    const handleChange =(event) => {
        setMessage(event.target.value)
        isTyping(props, chatId)

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const text = value.trim();
        if(text.length > 0 ) sendMessage(creds, chatId, { text })

    }

    return(
       <form className="message-form" onSubmit={handleSubmit}>
           <input className="message-input" placeholder="Send a message..." value={message}  onChange={handleChange} onSubmit={handleSubmit}/>
           
       </form>
    )
}

export default MessageForm