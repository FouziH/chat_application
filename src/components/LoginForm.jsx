import React, {useState} from "react";
import axios from "axios";

const LoginForm = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit =  async (event) => {
        event.preventDefault();

        const authObject = {
          "Project-ID": "b17b4621-da49-4604-965c-90679ed82192",
          "User-Name":userName,
          "User-Secret" : password
        };
        try{
           await axios.get('https://api.chatengine.io/chats', {headers: authObject})
           localStorage.setItem("username",  userName);
           localStorage.setItem("password", password)
           
           window.location.reload()

        }
        catch (error) {
            console.log("error is", error)
        }

        //

    }

    return (
      <div className="wrapper">
        <div className="form">
          <h1>Chat Application</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="input"
              placeholder="Username"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Password"
              required
            />
            <div align="center">
                <button type="submit" className="button"><span>Start Chatting</span></button>

            </div>
            
          </form>
        </div>
      </div>
    );
}
export default LoginForm