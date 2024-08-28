
function MainBody(){
    const whatWeWillLearn="React Js";
    let lecture="Total Lecture-3"
    return(<div style={{minheight:"70vh"}}>
      <p>
    In this Course we will Learn {whatWeWillLearn} by Building Taskopedia.
      </p>
      <p>{lecture}</p>
      <ul>
        <li>
          Basic foundation
        </li>
        <li>
         functional and Class Components
        </li>
      </ul>
      {/* <div>
        Enter task: <input maxlength={5} readOnly={false} placeholder='Ben'></input>
  
      </div> */}
      </div>)
  };
   export default MainBody;