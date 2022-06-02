import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { RiAddBoxLine } from 'react-icons/ri'
import { AiFillPieChart } from 'react-icons/ai'
import {
  MdSettingsOverscan,
  MdOutlineAnalytics,
  MdLocationOn,
  MdListAlt,
  MdAddChart,
  MdGridView,
  MdOutlineHome,
} from 'react-icons/md'
import SideHeaderImage from '../assets/images/side-header.png'

function SideBar() {
  return (
    <div className="side-bar">
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
           <img src={SideHeaderImage} alt="side-header" width={152} height={37} style={{margin:"24px 0 60px 0"}}/>

      <div className="search-box">
        <input type="text" placeholder="جستجو" dir="rtl" />
        <FiSearch color="#E7E7E7" />
      </div>
      </div>
   

   <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",marginRight:68}}>
   <div style={{width:"100%"}}>


        <div className="side-bar--sub-menu main-page-button">
          <div className="active-border"  ></div>
          <p className="side-bar--active-option">صفحه اصلی</p>
          <MdOutlineHome color="#FDC816" size={20} />
        </div>

        <p className='sub-title'>سرویس ها</p>

        <div className="side-bar--sub-menu">
          <p>شارژ سیمکارت</p>
          <RiAddBoxLine color="#818181" size={20} />
        </div>

        <div className="side-bar--sub-menu">
          <p> اینترنت</p>
          <AiFillPieChart color="#818181" size={20} />
        </div>

        <div className="side-bar--sub-menu">
          <p> کارکردوفروش</p>
          <MdOutlineAnalytics color="#818181" size={20} />
        </div>

        <div className="side-bar--sub-menu">
          <p> خدمات</p>
          <MdSettingsOverscan color="#818181" size={20} />
        </div>

        <p className='sub-title'> مدیریت</p>

        <div className="side-bar--sub-menu">
          <p> مدیریت خدمات</p>
          <MdGridView color="#818181" size={20} />
        </div>

        <div className="side-bar--sub-menu">
          <p> مدیریت سیمکارت</p>
          <MdAddChart color="#818181" size={20} />
        </div>
      </div>


      <div className="side-bar--sub-menu">
        <p> سوالات متداول</p>
        <MdListAlt color="#818181" size={20} />
      </div>

      <div className="side-bar--sub-menu">
        <p> ارتباط با ما</p>
        <MdLocationOn color="#818181" size={20} />
      </div>
   </div>
  
    </div>
  )
}

export default SideBar
