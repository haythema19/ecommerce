import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../features/product/productSlice";
import AddProduct from "./AddProduct";

const ProductList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
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
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Brand",
      dataIndex: "brand",
      sorter: (a, b) => a.brand.length - b.brand.length,
    },
    {
      title: "Category",
      dataIndex: "category",
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: "Color",
      dataIndex: "color",
      sorter: (a, b) => a.color.length - b.color.length,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  const productState = useSelector((state) => state.product.products);
  const dataTable = [];

  for (let i = 0; i < productState.length; i++) {
    dataTable.push({
      key: i + 1,
      title: productState[i].title,
      price: productState[i].price,
      brand: productState[i].brand,
      category: productState[i].category,
      color: productState[i].color,
      quantity: productState[i].quantity,
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
      <div className="d-flex justify-content-between">
        <h3 className="mb-4 title">Product list</h3>
        <Link to="/admin/product" className="button py-0 px-3">New product</Link>
      </div>
      <div>
        <Table columns={columns} dataSource={dataTable} />
      </div>
    </div>
  );
};

export default ProductList;
