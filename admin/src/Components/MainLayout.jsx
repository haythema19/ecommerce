import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Layout, Menu, theme } from "antd";

import { MdSpaceDashboard, MdAddBox, MdInvertColors } from "react-icons/md";
import {
  BsFillBoxFill,
  BsGrid,
  BsFillClipboardCheckFill,
} from "react-icons/bs";
import { FaUserAlt, FaBloggerB, FaPen, FaClipboardList } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-dark fs-4 text-center py-3">
            <span className="sm-logo">E</span>
            <span className="lg-logo">commerce</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => {
            if (key == "signout") {
              console.log(key);
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "/admin",
              icon: <MdSpaceDashboard className="icon-size" />,
              label: "Tổng quan",
            },
            {
              key: "customer",
              icon: <FaUserAlt className="icon-size" />,
              label: "Khách hàng",
            },
            {
              key: "catalog",
              icon: <BsFillBoxFill className="icon-size" />,
              label: "Sản phẩm",
              children: [
                {
                  key: "product",
                  icon: <MdAddBox className="icon-size" />,
                  label: "Thêm",
                },
                {
                  key: "product-list",
                  icon: <BsGrid className="icon-size" />,
                  label: "Danh sách",
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder className="icon-size" />,
                  label: "Thương hiệu",
                },
                {
                  key: "brand-list",
                  icon: <SiBrandfolder className="icon-size" />,
                  label: "DS Thương hiệu",
                },
                {
                  key: "category",
                  icon: <BiCategoryAlt className="icon-size" />,
                  label: "Loại",
                },
                {
                  key: "category-list",
                  icon: <BiCategoryAlt className="icon-size" />,
                  label: "DS Loại",
                },
                {
                  key: "color",
                  icon: <MdInvertColors className="icon-size" />,
                  label: "Màu",
                },
                {
                  key: "color-list",
                  icon: <MdInvertColors className="icon-size" />,
                  label: "DS Màu",
                },
              ],
            },
            {
              key: "order",
              icon: <BsFillClipboardCheckFill className="icon-size" />,
              label: "Đơn hàng",
            },
            {
              key: "",
              icon: <FaBloggerB className="icon-size" />,
              label: "Tin tức",
              children: [
                {
                  key: "blog",
                  icon: <FaPen className="icon-size" />,
                  label: "Bài mới",
                },
                {
                  key: "blog-list",
                  icon: <FaBloggerB className="icon-size" />,
                  label: "DS blog",
                },
                {
                  key: "blog-category",
                  icon: <FaPen className="icon-size" />,
                  label: "Thêm Category",
                },
                {
                  key: "blog-category-list",
                  icon: <BiCategoryAlt className="icon-size" />,
                  label: "DS Category",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <FaClipboardList className="icon-size" />,
              label: "Thắc mắc",
            },
          ]}
        />
      </Sider>

      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between align-items-center ps-2 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex align-items-center gap-3">
            <div className="position-relative">
              <IoNotifications size={30} />
              <span className="badge bg-danger position-absolute">1</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <div className="d-flex">
                <img
                  height={50}
                  width={50}
                  className="img-fluid rounded-circle"
                  src="https://firebasestorage.googleapis.com/v0/b/music-app-ca98f.appspot.com/o/Images%2F1674572647353-Screenshot%202023-01-23%20143315.png?alt=media&token=aaeafeeb-80e4-492f-a283-746ce37db5dd"
                  alt=""
                />
              </div>
              <div className="">
                <h5 className="text-dark mb-0">Zeno</h5>
                <p>duongpc99@gmail.com</p>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
