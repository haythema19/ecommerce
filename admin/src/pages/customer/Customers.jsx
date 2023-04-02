import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { getUsers } from "../../features/customers/customerSlice";

const columns = [
  {
    title: "STT",
    dataIndex: "key",
    defaultSortOrder: null,
    sorter: (a, b) => a.key - b.key,
  },
  {
    title: "Tên",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: (a, b) => a.email.length - b.email.length,
  },
  {
    title: "Số điện thoại",
    dataIndex: "mobile",
    sorter: (a, b) => a.mobile - b.mobile,
  },
];

const Customers = () => {
  const dispatch = useDispatch();
  const customersState = useSelector((state) => state.customer.customers);

  const dataTable = [];
  for (let i = 0; i < customersState.length; i++) {
    if (customersState[i].role !== "admin") {
      dataTable.push({
        key: i,
        name: customersState[i].firstName + " " + customersState[i].lastName,
        email: customersState[i].email,
        mobile: customersState[i].mobile,
      });
    }
  }

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="card">
      <h3 className="mb-4 title">Customers</h3>
      <div>
        <Table columns={columns} dataSource={dataTable} />
      </div>
    </div>
  );
};

export default Customers;
