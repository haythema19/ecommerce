import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Select, Table } from "antd";

import { getEnquiries } from "../../features/enquiry/enquirySlice";

const Enquiries = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEnquiries());
  }, []);

  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      defaultSortOrder: null,
      sorter: (a, b) => a.key - b.key,
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      sorter: (a, b) => a.mobile - b.mobile,
    },
    {
      title: "Comment",
      dataIndex: "comment",
      sorter: (a, b) => a.status.length - b.status.length,
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

  const enquiryState = useSelector((state) => state.enquiry.enquiries);
  const dataTable = [];
  for (let i = 0; i < enquiryState.length; i++) {
    dataTable.push({
      key: i + 1,
      name: enquiryState[i].name,
      email: enquiryState[i].email,
      mobile: enquiryState[i].mobile,
      comment: enquiryState[i].comment,
      status: (
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          // onChange={handleChange}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
      ),
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
      <h3 className="mb-4 title">Enquiries</h3>
      <div>
        <Table columns={columns} dataSource={dataTable} />
      </div>
    </div>
  );
};

export default Enquiries;
