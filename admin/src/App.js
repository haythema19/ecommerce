import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  BlogCateList,
  BlogList,
  BrandList,
  ColorList,
  Customers,
  Dashboard,
  Enquiries,
  ForgotPassword,
  Login,
  Orders,
  ProductCateList,
  ProductList,
  ResetPassword,
} from "./pages";
import { MainLayout } from "./Components";

import "./App.css";
import AddBlog from "./pages/blog/AddBlog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="customer" element={<Customers />} />
          <Route path="product-list" element={<ProductList />} />
          <Route path="category-list" element={<ProductCateList />} />
          <Route path="brand-list" element={<BrandList />} />
          <Route path="color-list" element={<ColorList />} />
          <Route path="order" element={<Orders />} />

          <Route path="blog" element={<AddBlog />} />
          <Route path="blog-list" element={<BlogList />} />
          <Route path="blog-category-list" element={<BlogCateList />} />

          <Route path="enquiries" element={<Enquiries />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
