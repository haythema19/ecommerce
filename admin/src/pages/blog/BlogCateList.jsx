import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import moment from "moment";

import { getCategories } from "../../features/category/bcategorySlice";

const BlogCateList = () => {
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
      title: "Created",
      dataIndex: "createdAt",
      sorter: (a, b) => a.status.length - b.status.length,
      render: (text) => moment(text).format("DD-MM-YYYY HH:mm:ss"),
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  const categoryState = useSelector((state) => state.bCategory.bCategories);
  console.log(categoryState);
  const dataTable = [];
  for (let i = 0; i < categoryState.length; i++) {
    dataTable.push({
      key: i + 1,
      title: categoryState[i].title,
      status: categoryState[i].status,
      createdAt: categoryState[i].createdAt,
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
      <h3 className="mb-4 title">Blog categories</h3>
      <div>
        <Table columns={columns} dataSource={dataTable} />
      </div>
    </div>
  );
};

export default BlogCateList;
