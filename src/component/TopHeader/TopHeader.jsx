import { MdOutlineCancel } from "react-icons/md";
import Container from "../Container/Container";
import "./TopHeader.css";

const TopHeader = () => {
  return (
    <Container> 
    <div className="top-header ">
     <div className="top-info">
        <p className="description">✨Discover Your Dream Property with Estatein</p>
        <a href="">learn more</a>
     </div>
     <div className="x-icon">
        <img src="../../../public/assets/images/icons8-multiply-24.png" alt=""/> 
     </div>
    </div>
     </Container> 
  );
}

export default TopHeader;
