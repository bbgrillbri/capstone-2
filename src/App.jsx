import Login from "./login.jsx";
import Signup from "./Signup";
import Profile from "./Profile.jsx";
import ProductsPage from "./ProductsPage.jsx"
import {Routes, Route} from "react-router-dom";
import Header from "./header.jsx";



export default function App() {
    return (
        <div className="App">
            
         <Routes>
            <Route path ="/" element={<ProductsPage />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />

        </Routes>

        </div>
       
    );
}
