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
    <div className='app' >
      <div className='left'>
        <UserCard />
        <PanelBar />
      </div>
      <div className='center'>
        <Header/>
        <LineChart />
        <PackageTable/>       
      </div>
      <div className='right'>
        <SideBar />
      </div>
    </div>
  )
}

export default App
