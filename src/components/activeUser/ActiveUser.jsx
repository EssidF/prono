import React from 'react';
import {ArrowForwardIos} from '@mui/icons-material';
import Chart from "../chart/Chart";
import "./activeUser.css"

export default function ActiveUser() {
    return (
        <div className='activeUser'>
            <div className='chartTitle'>
                <div className='activeUserTitle'>
                    <h3>Nombre de paris par jour  </h3>
                    <span className='activeUserPra'></span>
                </div>
              
            </div>
          <div className='chatGrapgh'>
          <Chart />
          </div>
         
          
        </div>
    )
  }