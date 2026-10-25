import Container from '../Container/Container';
import LinkSection from '../LinkSection/LinkSection';
import './Footer.css';
const Footer = () => {
  return (
    <div className = 'footer'> 
      <Container>
   
      <div className='top-fotter'>
      <div className='first-sec'>
      <img src="./assets/images/estatelogo.png" alt=""/>
      <div className='input-sec'>
      <div className='image'> <img src="./assets/images/icons8-send-24.png" alt="" /></div>
      <input type="email" placeholder="enter your email"/>
      <div className='image'>
      <img src="./assets/images/icons8-send-24 (1).png" alt="" />
      </div>
      </div>
      </div>
      <div className='links'>
       <LinkSection title="Home" link1="Hero Section" link2="Features" link3="Properties" link4="Testimonials" link5="FAQs"/>
       <LinkSection title="About Us" link1="Our Story" link2="Our Works" link3="How it Works" link4="Our Team" link5="Our Clients"/>
       <LinkSection title="Properties" link1="Portfolio" link2="Categories" />
       <LinkSection title="Services" link1="Valuation Mastery" link2="Strategic Marketing" link3="Negotiation Wizardry" link4="Closing Success
        " link5="Property Management"/>
       <LinkSection title="Contact Us" link1="Contact Form" link2="Our Offices"/>
      </div>
    </div>
    </Container>
    
    <div className="bottom-footer">
     <Container>
      <div className='full-footer'>
      <div className='end-links'>
         <a href=""> @2023 Estatein. All Rights Reserved</a>
         <a href="">Terms & Conditions</a>   
      </div>
      <div className="icons">
         <div className='icon'><img src="../../../public/assets/images/icons8-facebook-24.png" alt="" /></div>    
         <div className='icon'><img src="../../../public/assets/images/icons8-in-24.png" alt="" /></div>
         <div className='icon'><img src="../../../public/assets/images/icons8-twitter-bird-24.png" alt="" /></div>
         <div className='icon'><img src="../../../public/assets/images/icons8-youtube-24.png" alt="" /></div>
      </div>
      </div>
    </Container>
    </div>
    
     
    </div>

    
  );
}

export default Footer;
