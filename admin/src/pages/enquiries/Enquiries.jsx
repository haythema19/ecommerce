import { Table } from "antd";
import React from "react";

const columns = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];
const dataTable = [];
for (let i = 1; i < 46; i++) {
  dataTable.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}

const Enquiries = () => {
  return (
    <div className="card">
      <h3 className="mb-4">Enquiries</h3>
      <div>
        <Table columns={columns} dataSource={dataTable} />
      </div>
    </div>
  );
};

export default Enquiries;