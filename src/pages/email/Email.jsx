import { useState } from 'react';
import axios from 'axios';
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import { userRows } from "../../dummyData";
import Topbar from "../../components/topbar/Topbar";

export default function Email() {
 
   

const url=window.location.href.split("/");
const id=url[4]
console.log(url[4]);

const usemap =userRows.map(card =>{
    
  if (card.id== url[4]){
  
    return([card.nom,card.prenom,card.pseudo,card.email,card.date_Naiss,card.abonnement])
  }

})

const eml=usemap
console.log(eml);

  const [email, setEmail] = useState(eml[id][3]);
  const [sujet, setSujet] = useState('');
  const [message, setMessage] = useState('');
 
  const usr =userRows.map(card =>{
    
    if (card.id== url[4]){
    
      return(
<div className="user">
 
    
      
   
 <div className="userContainer">
   
   <div className="userUpdate">
     <span className="userUpdateTitle">Email</span>
     <form className="userUpdateForm">
       <div className="userUpdateLeft">
         <div className="userUpdateItem">
         
        
 
   <div className="newUserItem">
   <label>
     Destinataire :
   </label>
   <input name="email" type="email" id="email" placeholder="Exemple@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} />

   </div>
   <div className="newUserItem">
   <label>
     Sujet :
   </label>
   <input type="text" value={sujet} placeholder="Sujet" onChange={event => setSujet(event.target.value)} required />

   </div>
   
 
   <div className="newUserItem">
   <label>
     Message :
    
   </label>
   <textarea value={message} placeholder="Message..." onChange={event => setMessage(event.target.value)} required rows="7" cols="50"/>
   </div>
   </div>
  <br/>
         <button className="userUpdateButton">Envoyer</button>
       </div>
     </form>
   </div>
 </div>
 
</div>

      )
    }
    
   
  })



  return (<>

    <Topbar />

      
    
    <div className='container'>
    <Sidebar />

{usr}

    
  


</div>
<Footer/>

</>
 
  );
}


