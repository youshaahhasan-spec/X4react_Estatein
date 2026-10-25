import Container from "../Container/Container";
import "./HeroSection.css";
const HeroSection = ({title,description,btn1,btn2,image,cards,icon}) => {
  return (
    <Container>   
    <div className="hero-section">
       <div className="info">
           <img src={icon} alt="" /> 
          <h1>{title}</h1>
          <p className="description">{description}</p>
             <div className="btns">
              {btn1 && <button>{btn1}</button>}
             {btn2 && <button>{btn2}</button>}
          </div>
          <div className="cards">
          {cards.map((el,index)=>{
            return (
            <div key={index} className="card-info">
             <span>{el.title}</span>
             <p>{el.description}</p>
            </div>
            )
          })}
          </div>
       </div>
       <img className="image" src={image} alt="" />
   </div>
    </Container>
  );
}

export default HeroSection;
