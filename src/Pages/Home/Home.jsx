import CardsSection from "../../component/CardsSection/CardsSection";
import Feedbacks from "../../component/Feedbacks/Feedbacks";
import Footer from "../../component/Footer/Footer";
import HeroSection from "../../component/HeroSection/HeroSection";
import LastSection from "../../component/LastSection/LastSection";
import Line from "../../component/Line/Line";
import PropertySection from "../../component/PropertySection/PropertySection";
import QuestionSection from "../../component/QuestionSection/QuestionSection";
import Rows from "../../component/Rows/Rows";
import StarSection from "../../component/StarSection/StarSection";

const Home = () => {
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
     const icons =[
      {
        image :"./assets/images/icons8-home-40.png",
        description :"Find Your Dream Home"
      },
      {
        image :"../../../public/assets/images/icons8-camera-40.png",
        description :"Unlock Property Value"
      },
      {
        image :"../../../public/assets/images/icons8-buildings-40.png",
        description :"Effortless Property Management"
      },
      {        
        image :"../../../public/assets/images/icons8-sun-40.png",
        description :"Smart Investments, Informed Decisions"
      }
    ]

      const properties =[
      {
       image :"./assets/images/Property,home-villa.jpg",
       title :"Seaside Serenity Villa",
       description :"A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood..."
      },
      {
       image :"./assets/images/Property,home-Rustic.jpg",
       title :"Metropolitan Haven",
       description :"A chic and fully-furnished 2-bedroom apartment with panoramic city views..."
      },
      {
       image :"./assets/images/Property,home-Metropolitan.jpg",
       title :"Rustic Retreat Cottage",
       description :"An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community..."
      }
    ];
    const feedbacks =[
      {
       title :"Exceptional Service!",
       description :"Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
       name :"Wade Warren",
       country :"USA, California",
       image :"./assets/images/HOME-S2-wade.png"
      },
      {
      title :"Efficient and Reliable",
      description :"Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      name :"Emelie Thomson",
      country :"USA, Florida",
      image :"./assets/images/HOME-S2-emilly.png"
      },
      {
      title :"Trusted Advisors",
      description :"The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      name :"john Mans",
      country :"USA, Nevada",
      image :"./assets/images/HOME-S2 -john.png"
      }
    ]
    const  questions = [
      {
       question :"How do I search for properties on Estatein?",
       description :"Learn how to use our user-friendly search tools to find properties that match your criteria."
      },
      {
       question :"What documents do I need to sell my property through Estatein?",
       description :"Find out about the necessary documentation for listing your property with us."
      },
      {
       question :"How can I contact an Estatein agent?",
       description :"Discover the different ways you can get in touch with our experienced agents."
      
      }
    ]  

    return (
    <>
    <HeroSection  title="Discover Your Dream Property with Estatein"  description="Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams." image="./assets/images/Container.png" btn1="Learn More" btn2="Browse properties" cards={cards}/> 
    <Line/>
    <CardsSection icons={icons} />
    <Line/>
    <StarSection image="./assets/images/icons8-stars-32.png" title="Featured Properties" description="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click 'View Details'for more information."/>
    <PropertySection properties={properties}/>
    <Rows/>
     <StarSection image="./assets/images/icons8-stars-32.png" title="What Our Clients Say" description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."/>
     <Feedbacks feeds={feedbacks}/>
     <Rows/>
     <StarSection image="./assets/images/icons8-stars-32.png" title="Frequently Asked Questions" description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."/>
    <QuestionSection goals={questions} />
     <Rows/>
     <LastSection/>
     <Footer/>
    </>
  );
}

export default Home;
