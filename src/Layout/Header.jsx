import logo from "../images/react.png";
function MainHeader(){
    return (<div className="pt-3 py-1 pt-2" style={{background:"black"}}>
      <img src={logo} style={{height:"45px",vertical:"top"}} alt=""></img>
      <span className="h2 pt-4 text-white-50">React Course- Taskopedia</span>
    </div>);
  };
  const subHeaderStyle={
  color:"yellow",
  backgroundColor:"blue"
  };
  function SubHeader(){
    return<p style= {subHeaderStyle} className="text-center">This will be exciting Course</p>
  };
  export default function Header(){
    return(
      <div>
        <MainHeader></MainHeader>
        <SubHeader></SubHeader>
      </div>
    )
  };
   