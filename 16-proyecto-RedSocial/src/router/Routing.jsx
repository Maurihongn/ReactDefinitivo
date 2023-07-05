import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Feed, Layout, LayoutPublic, Login, Register } from "../components";
import { AuthProvider } from "../context/AuthProvider";

export const Routing = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
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
      </AuthProvider>
    </BrowserRouter>
  );
};
