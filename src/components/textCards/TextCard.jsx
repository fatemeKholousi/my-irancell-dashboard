import React from 'react'
import "./textCard.css"

function TextCard({singleTextMode,text1="",text2="",icon='',userCard=false}) {

  return (
    <div className='text-card'>
        {singleTextMode?<div className='single-mode'>
            <div className='text-card-icon'>{icon}</div> 
       <div>
         <p>{text1}</p>
       </div>
        </div>:<div className={`double-mode ${userCard?"user-card-text":""}`}> 
       <div className='text-card-icon'>{icon}</div> 
       <div>
         <p>{text1}</p>
       <p>{text2}</p>  
       </div>
       

        </div>}
    </div>
  )
}

export default TextCard