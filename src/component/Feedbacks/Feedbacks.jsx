import Container from "../Container/Container";
import "./Feedbacks.css";
const Feedbacks = ({feeds}) => {
  return (
     <Container> 
    <div className="feedback-section">
      {
       feeds.map((el,index)=>{
       return(
          <div key={index} className="box">
             <div className="stars">
             <img src="./assets/images/icons8-star-20.png" alt="" />
             <img src="./assets/images/icons8-star-20.png" alt="" />
             <img src="./assets/images/icons8-star-20.png" alt="" />
             <img src="./assets/images/icons8-star-20.png" alt="" />
             <img src="./assets/images/icons8-star-20.png" alt="" />
             </div>
             <h4>{el.title}</h4>
             <p>{el.description}</p>
             <div className="img-part">
              <img src={el.image} alt="" />
              <div className="info">
                  <p>{el.name}</p>
                  <span>{el.country}</span>
              </div>

             </div>
          </div>
)
       })
      }
     
     {/* <div className="stars">
      </div> */}


    </div>
    </Container>
  );
}

export default Feedbacks;
