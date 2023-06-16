import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = () => {

  const navigate= useNavigate();
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={()=>{navigate("/")}}>My Hotel</span>
        <div className="navItems">
          <button className="button-17" onClick={()=>{toast.success("Welcome Onboard")}}>Register</button>
          <button className="button-17" onClick={()=>{toast.success("Login Succesfull")}}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar