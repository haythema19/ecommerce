import React, { useState } from "react";
import { Column } from "@ant-design/plots";

import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";

const data = [
  {
    type: "Jan",
    sales: 38,
  },
  {
    type: "Feb",
    sales: 52,
  },
  {
    type: "Mar",
    sales: 61,
  },
  {
    type: "Apr",
    sales: 145,
  },
  {
    type: "May",
    sales: 48,
  },
  {
    type: "Jun",
    sales: 38,
  },
  {
    type: "Jul",
    sales: 18,
  },
  {
    type: "Aug",
    sales: 98,
  },
  {
    type: "Sep",
    sales: 68,
  },
  {
    type: "Oct",
    sales: 200,
  },
  {
    type: "Dec",
    sales: 108,
  },
];

const config = {
  data,
  xField: "type",
  yField: "sales",
  color: ({ type }) => {
    return "#ffd333";
  },
  label: {
    position: "middle",
    // 'top', 'bottom', 'middle',
    style: {
      fill: "#FFFFFF",
      opacity: 1,
    },
  },
  xAxis: {
    label: {
      autoHide: true,
      autoRotate: false,
    },
  },
  meta: {
    type: {
      alias: "Month",
    },
    sales: {
      alias: "Income",
    },
  },
};

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

const Dashboard = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
      <h3 className="mb-4">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex flex-grow-1 justify-content-between bg-white p-3 rounded-3">
          <div>
            <p>Total</p>
            <h4>$9999</h4>
          </div>
          <div className="d-flex flex-column align-items-end gap-2">
            <h6 className="red d-flex gap-1 align-items-center">
              <BsArrowDownRight /> 32%
            </h6>
            <p>Compare to april 2023</p>
          </div>
        </div>
        <div className="d-flex flex-grow-1 justify-content-between bg-white p-3 rounded-3">
          <div>
            <p>Total</p>
            <h4>$9999</h4>
          </div>
          <div className="d-flex flex-column align-items-end gap-2">
            <h6 className="green d-flex gap-1 align-items-center">
              <BsArrowUpRight /> 32%
            </h6>
            <p>Compare to april 2023</p>
          </div>
        </div>
        <div className="d-flex flex-grow-1 justify-content-between bg-white p-3 rounded-3">
          <div>
            <p>Total</p>
            <h4>$9999</h4>
          </div>
          <div className="d-flex flex-column align-items-end gap-2">
            <h6 className="red d-flex gap-1 align-items-center">
              <BsArrowDownRight /> 32%
            </h6>
            <p>Compare to april 2023</p>
          </div>
        </div>
      </div>
      <div className="mt-4 card">
        <h3>Income Statics</h3>
        <div className="mt-4">
          <Column {...config} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
