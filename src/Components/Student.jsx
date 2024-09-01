export default function Student(props){
    return(
      <div className="col-4 p-1"> 
      
      <div className="Row Border">
      <div className='col-2'>
        <img 
        src={props.headshot} alt=""
        className="w-100"></img></div>
    <div className='Col-8'>{props.name}
      <br/>
      Programming Experience {props.experience} years
    </div>
    <div className="col-2">{props.children}</div>
      </div>
      </div>
    );
  }