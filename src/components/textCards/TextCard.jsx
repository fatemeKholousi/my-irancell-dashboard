import React from 'react'
import "./textCard.css"

function TextCard({singleTextMode,text1="",text2="",icon=''}) {

  return (
    <div className='text-card'>
        {singleTextMode?<>
        d
        </>:<div className='double-mode'>
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