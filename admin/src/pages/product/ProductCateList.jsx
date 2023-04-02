import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import { Link } from "react-router-dom";

import { getCategories } from "../../features/category/pcategorySlice";

const ProductCateList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
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

  const categoryState = useSelector((state) => state.pCategory.pCategories);
  console.log(categoryState);
  const dataTable = [];
  for (let i = 0; i < categoryState.length; i++) {
    dataTable.push({
      key: i + 1,
      title: categoryState[i].title,
      status: categoryState[i].status,
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
      <h3 className="mb-4 title">Product categories</h3>
      <div>
        <Table columns={columns} dataSource={dataTable} />
      </div>
    </div>
  );
};

export default ProductCateList;
