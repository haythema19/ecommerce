import React, { useState } from "react";
import { Column, Pie } from "@ant-design/plots";
import { Space, Table, Tag } from "antd";

import {
  BsArrowDownRight,
  BsArrowUpRight,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { ChartPie } from "../components";

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
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const dataTable = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "4",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "5",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

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
    <>
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-5">
        <div className="card d-flex flex-column gap-4 w-100">
          <div className="d-flex align-items-center justify-content-between">
            <p>Total</p>
            <BsThreeDotsVertical />
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="title">$9999</h3>
            <div className="d-flex flex-column align-items-end">
              <p className="red d-flex align-items-center gap-1">
                <BsArrowDownRight /> 50%
              </p>
              <p>Compared to April 2023</p>
            </div>
          </div>
        </div>
        <div className="card d-flex flex-column gap-4 w-100">
          <div className="d-flex align-items-center justify-content-between">
            <p>Total</p>
            <BsThreeDotsVertical />
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="title">$9999</h3>
            <div className="d-flex flex-column align-items-end">
              <p className="green d-flex align-items-center gap-1">
                <BsArrowUpRight /> 50%
              </p>
              <p>Compared to April 2023</p>
            </div>
          </div>
        </div>
        <div className="card d-flex flex-column gap-4 w-100">
          <div className="d-flex align-items-center justify-content-between">
            <p>Total</p>
            <BsThreeDotsVertical />
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="title">$9999</h3>
            <div className="d-flex flex-column align-items-end">
              <p className="red d-flex align-items-center gap-1">
                <BsArrowDownRight /> 50%
              </p>
              <p>Compared to April 2023</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 d-flex align-item-center justify-content-between gap-3">
        <div className="card d-flex flex-column w-25">
          <div className="d-flex align-items-center justify-content-between">
            <h6>Active users</h6>
            <div>
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className="mt-4 saw-pulse__counter">200</div>
          <div className="active-page mt-4 d-flex flex-column">
            <div className="d-flex justify-content-between">
              <span className="fw-bold">Active pages</span>
              <span className="fw-bold">Users</span>
            </div>
            <div className="d-flex justify-content-between">
              <p>/products/brandix-z4</p>
              <p>15</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>/categories/drivetrain</p>
              <p>11</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>/categories/monitors</p>
              <p>7</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>/account/orders</p>
              <p>4</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>/cart</p>
              <p>3</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>/checkout</p>
              <p>3</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>/pages/about-us</p>
              <p>1</p>
            </div>
          </div>
        </div>
        <div className="card w-75">
          <h6>Income Statics</h6>
          <div className="mt-4">
            <Column {...config} />
          </div>
        </div>
      </div>

      <div className="mt-4 d-flex gap-3">
        <div className="card w-75">
          <h6 className="mb-4">Recent orders</h6>
          <Table columns={columns} dataSource={dataTable} />
        </div>
        <div className="card w-25">
          <h6>Sales by traffic source</h6>
          <div>
            <ChartPie />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
