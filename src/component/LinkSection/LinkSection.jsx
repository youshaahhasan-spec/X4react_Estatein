import "./LinkSection.css";
const LinkSection = ({title,link1,link2,link3,link4,link5}) => {
  return (
    <div className="link-el">
      <h4>{title}</h4>
      <a href="">{link1}</a>
      <a href="">{link2}</a>
      {link3 && <a href="">{link3}</a>}
      {link3 && <a href="">{link4}</a>}
      {link3 && <a href="">{link5}</a>}
  
  </div>
  );
}

export default LinkSection;
