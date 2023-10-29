import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { login } from "./api/main";



const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        // Redirect to the user page or another authenticated route
        navigate("/");
      }
    }, [navigate]);

    const checkPersistentLogin = () => {
      const token = localStorage.getItem("token");
      if (token) {
        console.log("logged in ")
      } else {
        console.log("not logged in")
      }
    };
    
    // Call the function to check for persistent login when the component mounts
    useEffect(() => {
      checkPersistentLogin();
    }, []);
    


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
                navigate("/");
            } catch (error) {
                setError(error.message);
            }
        }
    };

    return (
        <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={() => navigate("/")}>
                Submit
              </button>
              <p>Not singed up with us?</p>
              <button className="btn btn-primary" onClick={() => navigate("/sign-up")}>Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    )
};
export default Login;