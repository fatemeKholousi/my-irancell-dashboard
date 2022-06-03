import React from 'react'
import "./layout/app.css"
import LineChart from "./components/diagrams/LineChart"
import DoughnutChart from './components/diagrams/DounghnutChart'
import PackageTable from './components/packageTable/PackageTable'

const App=() =>{
  return (
    <div style={{display:"flex",height:'100vh'}}>
      <div style={{flexGrow:1.75,flexBasis:50}}>
<DoughnutChart width="400px"/>

      </div>
      <div style={{background:"rgba(246, 246, 246, 1)",width:"60vw"}}>
          {/* <PackageTable/>        */}
        </div>
        <div style={{background:"orange",flexGrow:1.5,flexBasis:150}}>
        4
        </div>

    </div>
  
  )
}

export default App