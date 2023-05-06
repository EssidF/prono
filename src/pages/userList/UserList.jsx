import "./userList.css";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as React from "react";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { CSVLink } from "react-csv";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import Topbar from "../../components/topbar/Topbar";
import img from "./bloquer.png"

export default function UserList() {

  

  const [data, setData] = useState(userRows);

  
  
  
  const headers = [
    { label: "First Name", key: "prenom" },
    { label: "Last Name", key: "nom" },
    { label: "Email", key: "email" },
    { label: "Age", key: "code_pp" }
  ];
  const csvReport = {
    data: data,

  };


  const _export = React.useRef(null);
  const exportExport = () => {
    if (_export.current !== null) {
      _export.current.save(data);
    }
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    // { field: "id", headerName: "ID", width: 100 },
    {
      field: "nom",
      headerName: "Nom",
      width: 160,
     renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.nom}
          </div>
        );
    }},
    {
      field: "prenom",
      headerName: "Prenom",
      width: 100
    },
    {
      field: "pseudo" ,
      headerName: "Pseudo",
      width: 100
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "date_Naiss",
      headerName: "Date Naissance",
      width: 120,
    },
    {
      field: "date_Inscrit",
      headerName: "Date Inscription",
      width: 120,
    },
    {
      field: "abonnement",
      headerName: "Abonnement",
      width: 120,
    },
    {
      field: "code_pp",
      headerName: "Code Promo",
      width: 160,
    },
    {
      field: "code_pr",
      headerName: "Code Parainnage",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="action">
            <div>            <Link to={"/customer-edit/" + params.row.id}>
              <button className="userListEdit">Modifier</button>
            </Link>
            </div>

            <div
              className="userListDelete"
              
              onClick={() => handleDelete(params.row.id)}
            >
              <img src={img} height={30}/>
              </div>
          </div>
        );
      },
    },
  ];

  return (
    <>
    <Topbar />

        
    
    <div className='container'>
    <Sidebar />
    <div className="userList">
    <h1 className="userListTitle">Liste Clients </h1>
    <div className="userListTable">

      
    
   
    <CSVLink {...csvReport}
                  className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"

      > <button
      className="btn_export k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary" >
       Exporter
     </button></CSVLink>
     
      <DataGrid className="userLists"
      
      data={data}
  
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        checkboxSelection
       
      />
      
  

      </div>
      </div>
      </div>
    <Footer />
    </>
  );
}
