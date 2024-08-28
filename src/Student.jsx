export default function Student(props){
    return(
      <div className="container p-1"> 
      
      <div className="Row Border">
      <div className='col-2'>
        <img 
        src={props.headshot} alt=""
        className="w-100"></img></div>
    <div className='Col-10'>{props.name}
      <br/>
      Programming Experience {props.experience} years
    </div>
      </div>
      </div>
    );
  }