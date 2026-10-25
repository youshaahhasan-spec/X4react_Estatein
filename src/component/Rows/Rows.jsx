import Container from "../Container/Container";
import "./Rows.css";
const Rows = () => {
  return (
    <Container>  
    <div className="rows-section">
       <div className="rows">
          <div className="left"><img src="../../../public/assets/images/icons8-left-24.png" alt="" /></div>
          <div className="right"><img src="../../../public/assets/images/icons8-right-24.png" alt=""/></div>
       </div>
    </div>
    </Container> 
  );
}

export default Rows;
