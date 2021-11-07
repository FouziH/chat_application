 import React, {useState} from "react"
 import { sendMessage, isTyping } from "react-chat-engine"
 import { SendOutlined, PictureOutlined } from "@ant-design/icons";
 const MessageForm = (props) => {
     const [message,setMessage ] = useState('');
     const {chatId, creds} = props;

    const handleChange =(event) => {
        setMessage(event.target.value)
        isTyping(props, chatId)

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const text = message.trim();
        if(text.length > 0 ) sendMessage(creds, chatId, { text })

        setMessage('')

    }
    const handleUpload =(event) => {
        sendMessage(creds, chatId, {files: event.target.value, text: ""})
    
    }

    return(
       <form className="message-form" onSubmit={handleSubmit}>
           <input className="message-input" placeholder="Send a message..." value={message}  onChange={handleChange} onSubmit={handleSubmit}/>
           <label htmlFor="upload-button">
               <span className="image-button">
                   {<PictureOutlined  className="picture-icon"/>}
               </span>
           </label>
           <input 
            type="file"
            multiple={false}
            id="upload-button"
            style={{display: "none"}}
            onChange={handleUpload}
           />
           <button type="submit" className="send-button"><SendOutlined /></button>
       </form>
    )
}

export default MessageForm