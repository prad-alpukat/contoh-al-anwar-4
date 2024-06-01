import NavbarAdmin from "../components/section/NavbarAdmin";
import FooterAdmin from "../components/section/FooterAdmin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function AdminLayout({ children }) {
  const navigate = useNavigate();

  function checkAuth() {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/admin/login");
    }
  }

  // check authentikasi ketika pertama kali halaman di load, useEffect mounting
  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <NavbarAdmin />

      <main>{children}</main>

      <FooterAdmin />
    </div>
  );
}
