import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

export default function Data() {
  const [search, setsearch] = useState("");
  const [data, setdata] = useState([]);
  const [filtereddata, setfiltereddata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/data/");
      const json = await response.json();
      if (response.ok) {
        console.log("data Uploaded");
        setdata(json);
        setfiltereddata(json);
      }
    };
    fetchData();
  },[]);
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Age",
      selector: (row) => row.age,
    },
    {
      name: "gender",
      selector: (row) => row.gender,
    },
    {
      name: "Mobile",
      selector: (row) => row.mobile,
    },
    {
      name: "Govt ID",
      selector: (row) => `${row.doc_type}: ${row.doc_num}`,
    },
    {
      name: "Guardian Name",
      selector: (row) => `${row.guardian_label} ${row.guardian_name}`,
    },
    {
      name: "Nationailty",
      selector: (row) => row.nationality,
    },
  ];
  useEffect(()=>{
    const result = data.filter(data=>{
      return data.name.toLowerCase().match(search.toLowerCase());
    })
    setfiltereddata(result);
  },[search])
  return (
    <div className="datatable">
      <div className="table">
        <DataTable
          columns={columns}
          data={filtereddata}
          pagination
          fixedHeader
          highlightOnHover
          fixedHeaderScrollHeight="450px"
          subHeader
          subHeaderComponent={
            <input
              type="text"
              placeholder="Search Bar"
              className="w-100 form-control"
              value={search}
              onChange={(e)=>setsearch(e.target.value)}
            />
          }
        />
      </div>
    </div>
  );
}
