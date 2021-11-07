 import React, {useState} from "react"
 const MessageForm = () => {
     const [message,setMessage ] = useState('')

    const handleChange =() => {

    }

    const handleSubmit = () => {

    }

    return(
       <form className="message-form" onSubmit={handleSubmit}>
           <input className="message-input" placeholder="Send a message..." value={message}  onChange={handleChange} onSubmit={handleSubmit}/>
           
       </form>
    )
}

export default MessageForm