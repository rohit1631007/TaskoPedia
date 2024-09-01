import Student from './Components/Student';
import StudentReview from './Components/StudentReview';
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
      <div className="container-row"> Students Enrolled </div>
  <Student experience={2}  name="Krish Walley" headshot="https://api.lorem.space/image/face?w=150&h=157">
  <StudentReview/>
  </Student>
  <Student experience={5}  name="Angel Walley" headshot="https://api.lorem.space/image/face?w=150&h=156">
  <StudentReview/>
  </Student>
  <Student experience={7}  name="Raina Walley" headshot="https://api.lorem.space/image/face?w=150&h=151"></Student>
  </div>);
      
  }
   export default MainBody;