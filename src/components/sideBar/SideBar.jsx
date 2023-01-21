import React from 'react'
import SearchInput from '../searchInput/SearchInput'
import TextCard from '../textCards/TextCard'
import MyIrancellImage from './myIrancell.png'
import { MdHomeFilled ,MdAreaChart,MdLibraryAdd,MdOutlineAnalytics,MdContactPhone,MdQuestionAnswer,MdAnalytics,MdWindow} from "react-icons/md";
import "./sideBar.scss"

function SideBar() {
  return (
    <div className='side-bar-wrapper'>
        <img src={MyIrancellImage} alt='irancell'/>
        <SearchInput/>
        <div className='routes'> 
        <TextCard singleTextMode={true} text1="صفحه اصلی" icon={<MdHomeFilled/>}/>
        <p className='gray-title'>سرویس ها</p>
        <TextCard singleTextMode={true} text1="شارژ سیمکارت" icon={<MdLibraryAdd/>}/>
        <TextCard singleTextMode={true} text1="اینترنت" icon={<MdAreaChart/>}/>
        <TextCard singleTextMode={true} text1="کارکرد و فروش" icon={<MdOutlineAnalytics/>}/>
        <TextCard singleTextMode={true} text1="خدمات" icon={<MdWindow/>}/>
        <p className='gray-title'>مدیریت</p>
        <TextCard singleTextMode={true} text1="مدیریت خدمات" icon={<MdAnalytics/>}/>
        <TextCard singleTextMode={true} text1="مدیریت سیمکارت" icon={<MdHomeFilled/>}/>
        <p className='gray-title'></p>

      <TextCard singleTextMode={true} text1="سوالات متداول" icon={<MdQuestionAnswer/>}/>
        <TextCard singleTextMode={true} text1="ارتباط با ما" icon={<MdContactPhone/>}/>

      

        </div>
        <div>

        </div>
    </div>
  )
}

export default SideBar