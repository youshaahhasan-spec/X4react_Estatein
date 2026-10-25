import HeroSection from "../../component/HeroSection/HeroSection";

const About = () => {
     const cards  =[
      {
        title :"200+",
        description :"Happy Customers"
      },
      {
        title :"10k+",
        description :"Properties For Clients"
      },
      {
        title :"16+",
        description :"Years of Experience"
     
      }
     ];
  
      return (
  <>
    <HeroSection title="Our Journey" cards={cards} description="Our story is one of continuous growth and evolution.We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients." image="./assets/images/ourjournyphoto.png" icon="./assets/images/icons8-stars-32.png"/>
    </>
  );
}

export default About;
