import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate= useNavigate();
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={()=>{navigate("/")}}>My Hotel</span>
        <div className="navItems">
          <button className="button-17">Register</button>
          <button className="button-17">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar