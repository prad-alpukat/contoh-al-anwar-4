import NavbarAdmin from "../components/section/NavbarAdmin";
import FooterAdmin from "../components/section/FooterAdmin";

export default function AdminLayout({ children }) {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <NavbarAdmin />

      <main>{children}</main>

      <FooterAdmin />
    </div>
  );
}
