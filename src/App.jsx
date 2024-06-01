import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreatePost from "./pages/admin/CreatePost";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}
