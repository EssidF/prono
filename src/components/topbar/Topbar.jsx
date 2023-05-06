import React from 'react'
import "./topbar.css";
import logo from "./images/logo.png"
import { PeopleAlt, NotificationsNone, AccountCircle } from '@mui/icons-material';

import { Link } from "react-router-dom";

import { userRows } from "../../dummyData";

export default function Topbar() {


 
    
    
    
      const usr = userRows.map(card =>{
        if (card.type== "admin") then :
        return(<>
         <div className='topbar'>
        <div className='topbarWrapper'>
     
            <div className='topLeft'>
                <img className='logo' src={logo} alt="Logo"/>
            </div>
          
            <div className='topRight'>
                {/* <div className='topbarIconContainer'>
                    <Search className='icon' />
                </div> */}
                

                <Link to="/email-liste" className="link">
                <div className='topbarIconContainer'>
                    <NotificationsNone className='icon' />
                    <span className='topIconBadge'>0</span>
                </div>
                </Link>
            
                  
            </div>
        </div>
    </div>
         </>
        )
      });






  return (
    <>
 {usr}
 </>
  )
}
