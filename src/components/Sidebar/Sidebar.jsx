import React, {useState} from 'react'
import {AccountCircle,AccessTime,  PeopleAlt, LocalGroceryStore,Folder,Receipt,ExpandMore,ExpandLess} from '@mui/icons-material';
import { Link } from "react-router-dom";
import "./sidebar.css";
import { userRows } from "../../dummyData";
import img from "./classement.png"
import imgB from "./boite.png"
import imgL from "./logo.png"


export default function Sidebar() {

  const [isExpanded, setExpanded] = useState(false);
  const [isExpanded1, setExpanded1] = useState(false);
  const [isExpanded2, setExpanded2] = useState(false);
  const [isExpanded3, setExpanded3] = useState(false);
  const [isExpanded4, setExpanded4] = useState(false);
  const [isExpanded5, setExpanded5] = useState(false);
  function expand() {
    setExpanded(()=> isExpanded !== true)
  };
  function expand1() {
    setExpanded1(()=> isExpanded1 !== true)
  };
  function expand2() {
    setExpanded2(()=> isExpanded2 !== true)
  };
  function expand3() {
    setExpanded3(()=> isExpanded3 !== true)
  };
  function expand4() {
    setExpanded4(()=> isExpanded4 !== true)
  };
  function expand5() {
    setExpanded5(()=> isExpanded5 !== true)
  }


  const usr = userRows.map(card =>{
    if (card.type== "admin") then :
    return(<>
   
   <div className='sidebarWreapper'>
     <div className='sidebarTopHeader'>
         <div className='sidebarHeader'>
           <AccountCircle sx={{ fontSize: 75 }} className='icon'/>
           <h4 className='login'>Admin</h4>
          
         </div>
           <hr className='sidebarLine'/>
     </div>
     <div className='sidebarMenu'>
       <h3 className='sidebarTitle'>Rapports</h3>
       <ul className='sidebarList'>
       <Link to="/home" className="link">
         <li><span className="mainMenu active"><AccessTime className='sidebarIcon'/> Dashbord</span></li>
         </Link>
         {/* <li><span className="mainMenu"><SignalCellularAlt className='sidebarIcon'/> Dashboard Alternative</span></li> */}
       </ul>
     </div>
     <div className='sidebarMenu'>
       <h3 className='sidebarTitle'>Gestion</h3>
         <ul className='sidebarList'><span onClick={expand} className="mainMenu"><PeopleAlt className='sidebarIcon'/> Client 
         {isExpanded ? <ExpandLess className='downArrow' /> : <ExpandMore className='downArrow' />}</span>
         {isExpanded && ( <div>
           <Link to="/customer-list" className="link">
             <li className='sidebarListItem'>Liste Clients</li>
           </Link>

           <Link to="/newUser" className="link">
             <li className='sidebarListItem'> Ajouter Client</li>
           </Link>

           </div>
         )
         }
         </ul>
         <ul className='sidebarList'><span onClick={expand1} className="mainMenu"><LocalGroceryStore className='sidebarIcon'/> Promo {isExpanded1 ? <ExpandLess className='downArrowp' /> : <ExpandMore className='downArrowp' />}</span>
         {isExpanded1 && ( <div>
             <Link to="/products" className="link">
               <li className='sidebarListItem'>Liste Promo </li>
             </Link>

             <Link to="/newproduct" className="link">
               <li className='sidebarListItem'>Générer Promo</li>
             </Link>

           
           
             </div>
         )
         }
       
         </ul>
         <Link to="/support" className="link">
         <ul className='sidebarList'>
          <span  className="mainMenu"> 
          <img src={img} alt='' className='img' height={20} /> Classement </span>
    
        
         </ul>
         </Link>
         <Link to="/email-liste" className="link">
         <ul className='sidebarList'> 
         <span  className="mainMenu"> 
         <img src={imgB} alt='' className='img' height={20} /> Boite Email </span>
       
         </ul>
         </Link>
     </div>

     <img src={imgL} alt='' className='img2' height={20} />
     
   </div>

     </>
    )
  });






  return (
    <>
   <div className='sidebar'>
   
   {usr}

 </div>
   
    </>
  )
}
