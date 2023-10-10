import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { login } from "./api/main";



const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 
    const token = localStorage.getItem("token");
    console.log("LOGIN TOKEN", token);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (username.length < 1) {
            alert("Ypur username must be at minimum 5 characters in length");
        } else if (password.length <1) {
            alert("Your password must be minimum 8 characters in length");
        } else {
            try {
                console.log("name", username);
                console.log("password", password);
                const result = await login(username, password); 
                console.log("login", result);
                localStorage.setItem("token", result.data.token)
                navigate("/user");
            } catch (error) {
                setError(error.message);
            }
        }
    };

    return (
        <>
        <h2 id="signIn"> Sign In </h2>
        <form onSubmit={handleSubmit}>
           <label value={username} onChange={(e) => setUsername(e.target.value)}>
            username: <input/>
           </label>
           <label value={password} onChange={(e) => setPassword(e.target.value)}>
            password: <input/>
           </label>
           <br></br>
            {/*change to profile page later*/}
           <button onClick={() => navigate("/profile")}>Log In</button>
        </form>
        <button onClick={() => navigate("/sign-up")}>Sign Up</button>

        </>
    );
};
export default Login;