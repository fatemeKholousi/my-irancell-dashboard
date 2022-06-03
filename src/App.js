import React from 'react'
import './layout/app.css'
import LineChart from './components/diagrams/LineChart'
import PackageTable from './components/packageTable/PackageTable'
import PanelBar from './components/panelBar/PanelBar'
import SideBar from './components/sideBar/SideBar'
import UserCard from './components/userCard/UserCard'
import Header from './components/header/Header'

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        background: 'rgba(246, 246, 246, 1)',
        
      }}
    >
      <div style={{ flexGrow: 1.5, flexBasis: 50,marginLeft:'1rem' }}>
        <UserCard />
        <PanelBar />
      </div>
      <div style={{ width: '55vw',margin:'0 1rem' }}>
        <Header/>
        <LineChart />
        <PackageTable/>       
      </div>
      <div style={{ flexGrow:1.5, flexBasis: 150 }}>
        <SideBar />
      </div>
    </div>
  )
}

export default App
