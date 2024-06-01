import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreatePost from "./pages/admin/CreatePost";
import Login from "./pages/admin/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public */}
        <Route path="/" element={<Home />} />

        {/* admin */}
        <Route path="/admin" element={<CreatePost />} />
        <Route path="/admin/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
