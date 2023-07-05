import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Feed, Layout, LayoutPublic, Login, Register } from "../components";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPublic />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/social" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="feed" element={<Feed />} />
        </Route>
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
