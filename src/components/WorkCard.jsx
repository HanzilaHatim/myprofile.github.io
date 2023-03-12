import React from 'react';
import Work from './Work';
import WorkData from './WorkData';
const WorkCard = () => {
  return (
    <div className='work-container'>
      <h1 className='project-headig'>Projects </h1>  
      <div className='project-container'>

        {WorkData.map((val,ind)=>{
            return(
                <Work 
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                />
            )
        })}
        
      </div>
    </div>
  )
}

export default WorkCard;
