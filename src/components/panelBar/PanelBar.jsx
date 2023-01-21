import React from 'react'
import './panelBar.scss'
import DownloadAppImage from './downloadOurApp.png'
import DoughnutChart from '../diagrams/DounghnutChart'
import TextCard from '../textCards/TextCard'
import { MdNetworkWifi,MdMarkEmailUnread } from "react-icons/md";


function PanelBar() {
  return (
    <div className="panel-bar-wrapper">
      <DoughnutChart width="400px" />
      <div className='text-cards'>
          <TextCard singleTextMode={false} text1="بسته پیامک هفتگی" text2=" تا 31 خرداد 1400" icon={<MdMarkEmailUnread/>}/>
          <TextCard singleTextMode={false} text1="بسته اینترنت ماهانه" text2=" تا 12 خرداد 1400" icon={<MdNetworkWifi/>}/>
      </div>
      <img src={DownloadAppImage} alt="download-app" />
    </div>
  )
}

export default PanelBar
