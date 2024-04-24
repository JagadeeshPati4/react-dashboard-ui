import React from 'react';
import './index.css'
import { IoSearch } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaHeadphones } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const Sidebar = (props) => {
  const {sidebar ,setSidebar}=props
  
  return (
    <div className={`sidebar-main-container ${sidebar? 'sidebar':''} `}>
      <div className='logo-main-containers'>

      
      <div className='logo-container' onClick={()=>setSidebar(!sidebar)}>
        <spam className='logo-icon'>d</spam>
      </div>
      </div>
      <div>
        <div className='middle-container'>
          
          <div className='logo-main-containers'>
          <IoSearch size={30} className='icon'/>
          <label className='label-iteam'>Search</label>
          </div>
          
          <div className='logo-main-containers'>
          <RiComputerLine size={30} className='icon'/>
          <label className='label-iteam'>Computer</label>
          </div>
          
          <div className='logo-main-containers'>
          <FaRegCircleQuestion size={30} className='icon'/>
          <lable className='label-iteam'>Questions</lable>
          </div>
          
          <div className='logo-main-containers'>
          <FaRegCalendarAlt size={30} className='icon'/>
          <label className='label-iteam'>Calander</label>
          </div>
          
          <div className='logo-main-containers'>
          <FaBuilding size={30} className='icon'/>
          <label className='label-iteam'>Address</label>
          </div>
          
          <div className='logo-main-containers'>
          <RiMoneyDollarCircleFill size={30} className='icon'/>
          <label className='label-iteam'>Money</label>
          </div>
          
          <div className='logo-main-containers'>
          <FaHeadphones size={30} className='icon'/>
          <label className='label-iteam'>Music</label>
          </div>
        </div>
      </div>
      <div>
        <div className='logo-main-containers'>
        <IoIosSettings size={30} />
        <label className='label-iteam'>Settings</label>
        </div>
        
      </div>
      
      
    </div>
  )
}

export default Sidebar
