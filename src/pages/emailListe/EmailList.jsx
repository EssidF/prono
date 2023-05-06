import "./emailList.css";
// import { DataGrid } from "@material-ui/data-grid";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as React from "react";
import * as ReactDOM from "react-dom";
//import {  GridColumn, GridToolbar } from "@progress/kendo-react-grid";
//import { Grid } from '@progress/kendo-react-grid';
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { useDemoData } from '@mui/x-data-grid-generator';
import { CSVLink } from "react-csv";
import * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style';

import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/footer/Footer";

import Topbar from "../../components/topbar/Topbar";


export default function EmailList() {

  

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
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/email/" + params.row.id}>
              <button className="userListEdit">Rependre</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
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

      
  
      <DataGrid className="userLists"
      
      data={data}
  
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
       
      />
      
   

      </div>
      </div>
      </div>
    <Footer />
    </>
  );
}
