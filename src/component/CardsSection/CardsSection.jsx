import Container from "../Container/Container";
import "./CardsSection.css";
const CardsSection = ({icons}) => {
  return (
    <Container>  
    <div className="cards-section">
      {
       icons.map((el,index)=>{
          return (
          <div  key ={index} className="card-element">
            <div className="arow-icon">
                  <img src="./assets/images/icons8-forward-arrow-24.png" alt="" />
            </div>
            <div className="bottom-icon-circle">
                 <div className="top-icon-circle">
                      <img src={el.image} alt="##" />
                  </div>       
            </div>
            <p>{el.description}</p>
            </div>
          )  
       })     
      }  
        
    </div>
    </Container>
  );
}

export default CardsSection;
