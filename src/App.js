import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
const App  = () => {
    return(
        <ChatEngine
            height= "100vh"
            projectID = "b17b4621-da49-4604-965c-90679ed82192"
            userName="HamzaFowzi1"
            userSecret="Moha0901#"
            renderChatFeed ={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App