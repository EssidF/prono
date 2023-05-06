import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/footer/Footer";

import Topbar from "../../components/topbar/Topbar";

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "nom",
      headerName: "Nom",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.nom}
          </div>
        );
      },
    },

    {
      field: "code_pp",
      headerName: "Code Promo",
      width: 120,
    },
    {
      field: "price",
      headerName: "Montant",
      width: 160,
    },
    {
      field: "user_id",
      headerName: "ID Utilisateur",
      width: 160,
    },
    {
      field: "user_name",
      headerName: "Nom utilisateur",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
    <Topbar />

        
    
    <div className='container'>
    <Sidebar />
    <div className="productList">
        <h1 className="productListTitle">Liste Promo</h1>
      <div className="productListTable">
      <DataGrid className="productLists"
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
