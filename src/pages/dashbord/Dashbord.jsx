import React from 'react';
import ParformanceChart from "../../components/performanceChart/parformanceChart"
import FeatureInfo from "../../components/featuredInfo/FeatureInfo";
import ActiveUser from "../../components/activeUser/ActiveUser"
import "./dashbord.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/footer/Footer";

import Topbar from "../../components/topbar/Topbar";

export default function Dashbord() {
  return (
    <>
    <Topbar />

        
    
    <div className='container'>
    <Sidebar />
    <div className='home'>
 
        <div className='feartures'>
          {/* <FeatureInfo /> */}
        </div>
        <div className='dashbordMiddlepart'>
          
          {/* <ActiveUser /> */}
          <ParformanceChart />
        </div>
    </div>
    </div>
    <Footer />
    </>
  )
}
