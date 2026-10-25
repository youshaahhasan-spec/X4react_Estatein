import Container from "../Container/Container";
import "./PropertySection.css";

const PropertySection = ({properties}) => {
  return (
    <Container>  
    <div className="property-section">
     {
      properties.map((el,index)=>{
       return(
        <div key={index} className="pro-card">

         <img className="image" src={el.image} alt="" />
         <h4>{el.title}</h4>
         <p>{el.description}
          <span className="read-more">Read More</span>
         </p>
         <div className="villa-room">
            
            <span className="special-span"><img src="./assets/images/icons8-bed-32.png" alt="#"/>4-Bedroom</span>  
            <span className="special-span"><img src="../../../public/assets/images/icons8-bathroom-32.png" alt="#" />2-Bathroom</span> 
            <span className="special-span"><img src="../../../public/assets/images/icons8-house-32.png" alt="##" />Villa</span> 
             
         </div>         
        <div className="bottom-part">
         <div>
          <p>price</p>
          <span>$550,000</span>
         </div>
         <button>View Properties Details</button>
        </div>  
        </div>
       )
       
      })
     }  
</div>
    </Container>
  );
}

export default PropertySection;
