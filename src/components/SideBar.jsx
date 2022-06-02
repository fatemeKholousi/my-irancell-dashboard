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
    <div className="my-irancell-page side-bar">
      <img src={SideHeaderImage} alt="side-header" width={152} height={37} />
      <div className="search-box">
        <input type="text" placeholder="جستجو" dir="rtl" />
        <FiSearch color="#E7E7E7" />
      </div>
      <div>
        <div className="side-bar--sub-menu">
          <p className="side-bar--active-option">صفحه اصلی</p>
          <MdOutlineHome color="#FDC816" size={20} />
        </div>
        <p>سرویس ها</p>

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

        <p> مدیریت</p>

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
  )
}

export default SideBar
