import React from "react";
import MaterialTable from "material-table";

function createData(section, name) {
  return { section, name };
}

const templates = [
  createData("524", "Deceased died in local"),
  createData("524", "Deceased died in abroad"),
  createData("524", "Beneficiaries lives in local"),
  createData("524", "Beneficiaries lives in abroad"),
  createData("524", "Resealing"),

  createData("528", "Deceased died in local"),
  createData("528", "Deceased died in abroad"),
  createData("528", "Beneficiaries lives in local"),
  createData("528", "Beneficiaries lives in abroad"),
  createData("528", "Reinstate"),
];

export default function Orders() {
  return (
    <MaterialTable
      title="All Templates"
      columns={[
        { title: "Section", field: "section" },
        { title: "Name", field: "name" },
      ]}
      data={templates}
      actions={[
        {
          icon: "gavel",
          tooltip: "Generate",
          onClick: (event, rowData) => alert("You saved " + rowData.name),
        },
      ]}
      options={{
        pageSize: 10,
        grouping: true,
        actionsColumnIndex: -1,
      }}
      localization={{
        header: {
          actions: "",
        },
      }}
    />
  );
}
