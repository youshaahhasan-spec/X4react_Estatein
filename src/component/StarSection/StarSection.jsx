import Container from "../Container/Container";
import "./StarSection.css";
const StarSection = ({image , title , description}) => {
  return (
     <Container> 
    <div className="star-section">
      <img src={image} alt =""/>
      <h2>{title}</h2>
      <p>{description}</p>

    </div>
    </Container>
  );
}

export default StarSection;
