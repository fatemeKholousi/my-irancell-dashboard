import React from 'react'
import "./layout/app.css"
import LineChart from "./components/diagrams/LineChart"
import DoughnutChart from './components/diagrams/DounghnutChart'
import PackageTable from './components/packageTable/PackageTable'
import PanelBar from './components/panelBar/PanelBar'
import SideBar from './components/sideBar/SideBar'

const App=() =>{
  return (
    <div style={{display:"flex",height:'100vh'}}>
      <div style={{flexGrow:1.75,flexBasis:50}}>
<PanelBar/>
      </div>
      <div style={{background:"rgba(246, 246, 246, 1)",width:"60vw"}}>
          {/* <PackageTable/>        */}
        </div>
        <div style={{background:"orange",flexGrow:1.5,flexBasis:150}}>
        <SideBar/>
        </div>

    </div>
  
  )
}

export default App