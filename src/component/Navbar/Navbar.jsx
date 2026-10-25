import { Link } from "react-router-dom";
import Container from "../Container/Container";
import "./Navbar.css";
import { useRef } from "react";
const Navbar = () => {
  //let d = document.querySelector(".nav-list-small");   
  const re = useRef("");
  const change = ()=>{
  console.log(re.current);
  re.current.classList.toggle("open");
}

  return (
    <Container>
    <nav className="ele-nav">
     <img src="./assets/images/estatelogo.png" alt="" />
     <ul className="nav-list">
      <li ><Link to="/">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li ><Link to="">Properties</Link></li>
      <li><Link to="">services</Link></li>
     </ul>
     <ul className="nav-list-small" ref={re}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="">Properties</Link></li>
      <li><Link to="">services</Link></li>
      <li><Link to="">Contact US</Link></li>
     </ul>
      <button className="contact-btn">
        <Link to="">Contact Us</Link>    
      </button>
      <div className="list-icon" onClick={change}>
         <img src="./assets/images/icons8-list-30.png" alt=""/>   
      </div>
    </nav>
    </Container>

  );
}

export default Navbar;
