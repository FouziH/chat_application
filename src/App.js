import { ChatEngine } from 'react-chat-engine';
import './App.css';
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed';
const App  = () => {

    if(!localStorage.getItem('username'))  return <LoginForm />
    return(
        <ChatEngine
            height= "100vh"
            projectID = "b17b4621-da49-4604-965c-90679ed82192"
            userName= {localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed ={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App