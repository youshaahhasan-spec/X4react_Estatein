import Container from "../Container/Container";
import "./QuestionSection.css";
const QuestionSection = ({goals}) => {
  return (
      <Container>
    <div className="question-section">
      
      {
        goals.map((el,index)=>{ 
         return(
         <div key={index} className="box">
         <h4>{el.question}</h4>
         <p>{el.description}</p>
         <span>Read More</span> 
         </div>
          )
      })
      }
      
      </div>
          
      

    </Container>
  );
}

export default QuestionSection;
