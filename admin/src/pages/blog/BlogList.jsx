import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "antd";
import moment from "moment";

import { getBlogs } from "../../features/blog/blogSlice";

// let invoices = "20-10-2023";
// invoices.map((el) => {
//   let date = moment(new Date(el.invoice_date));
//   el.invoice_date = date.format("DD/MM/YYYY");
// });

const BlogList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
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
      title: "Category",
      dataIndex: "category",
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: "Created",
      dataIndex: "createdAt",
      sorter: (a, b) => a.createdAt.length - b.createdAt.length,
      render: (text) => moment(text).format("DD-MM-YYYY HH:mm:ss"),
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  const blogState = useSelector((state) => state.blog.blogs);
  const dataTable = [];

  for (let i = 0; i < blogState.length; i++) {
    dataTable.push({
      key: i + 1,
      title: blogState[i].title,
      category: blogState[i].category,
      createdAt: blogState[i].createdAt,

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
      <h3 className="mb-4 title">Blog list</h3>
      <div>
        <Table columns={columns} dataSource={dataTable} />
      </div>
    </div>
  );
};

export default BlogList;
