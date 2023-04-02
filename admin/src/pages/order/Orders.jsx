import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Select, Table } from "antd";
import moment from "moment";

import { getOrders } from "../../features/auth/authSlice";

const Orders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
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
      title: "Product",
      dataIndex: "product",
      sorter: (a, b) => a.product.length - b.product.length,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount - b.amount,
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.status.length - b.status.length,
      render: (text) => {
        return (
          <div>
            <div>{moment(text).format("DD/MM/YYYY")}</div>
            <div>{moment(text).format("hh:mm:ss")}</div>
          </div>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  const orderState = useSelector((state) => state.auth.orders);
  const dataTable = [];

  for (let i = 0; i < orderState.length; i++) {
    dataTable.push({
      key: i + 1,
      name:
        orderState[i].orderby.firstName + " " + orderState[i].orderby.lastName,
      product: orderState[i].products.map((i) => {
        return (
          <>
            <p>- {i.product.title}</p>
          </>
        );
      }),
      amount: orderState[i].paymentIntent.amount + " đ",
      status: orderState[i].orderStatus,
      date: orderState[i].createdAt,
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
      <h3 className="mb-4 title">Orders</h3>
      <div>
        <Table columns={columns} dataSource={dataTable} />
      </div>
    </div>
  );
};

export default Orders;
