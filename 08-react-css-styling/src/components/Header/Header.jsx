import "./Header.scss";

const Heading = () => {
    const h1Styles = {
      rotate: `${(Math.random() - 0.5) * 15}deg`,
    };
  
    return (<h1 className="heading" style={h1Styles}>
      Heading
      </h1>
    )
  };

  export default Heading;