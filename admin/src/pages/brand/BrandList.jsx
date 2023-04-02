import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import { Link } from "react-router-dom";

import { getBrands } from "../../features/brand/brandSlice";

const BrandList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrands());
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
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  const brandState = useSelector((state) => state.brand.brands);

  const dataTable = [];
  for (let i = 0; i < brandState.length; i++) {
    dataTable.push({
      key: i + 1,
      title: brandState[i].title,
      status: brandState[i].status,
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
      <h3 className="mb-4 title">Brand list</h3>
      <div>
        <Table columns={columns} dataSource={dataTable} />
      </div>
    </div>
  );
};

export default BrandList;
