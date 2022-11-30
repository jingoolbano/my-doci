import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import makeData from "../data";
import "./dataTable.css";
import BasicModal from "./Modal";

const columns = [
  { field: "age", headerName: "Age", type: "number", width: 70 },
  { field: "progress", headerName: "Progress", type: "number", width: 130 },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => {
      return (
        <div
          className={`${params.row.status == "single" ? "changeColor" : ""}`}
        >
          {params.row.status}
        </div>
      );
    },
  },
  {
    field: "visits",
    headerName: "Visits",
    type: "number",
    width: 90,
  },
  {
    field: "button",
    headerName: "Button",
    width: 160,
    renderCell: (params) => {
      return <button onClick={() => BasicModal(params.row)}>show modal</button>;
    },
  },
];

const rows = makeData(25);

export default function DataTable() {
  return (
    <div style={{ height: "100vh", width: "80%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={() => Math.floor(Math.random() * rows.length + 1)}
      />
    </div>
  );
}
