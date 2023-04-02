import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import { Link } from "react-router-dom";

import { getColors } from "../../features/color/colorSlice";

const ColorList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getColors());
  }, []);

  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      defaultSortOrder: null,
      sorter: (a, b) => a.key - b.key,
    },
    {
      title: "Title",
      dataIndex: "title",
      sorter: (a, b) => a.title.length - b.title.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      // sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  const colorState = useSelector((state) => state.color.colors);
  const dataTable = [];
  for (let i = 0; i < colorState.length; i++) {
    dataTable.push({
      key: i + 1,
      title: colorState[i].title,
      status: colorState[i].status,
      action: (
        <div className="d-flex gap-2">
          <Link className="btn-edit">Edit</Link>
          <Link className="btn-remove">Delete</Link>
        </div>
      ),
    });
  }
  return (
    <div className="card">
      <h3 className="mb-4 title">Color List</h3>
      <div>
        <Table columns={columns} dataSource={dataTable} />
      </div>
    </div>
  );
};

export default ColorList;
