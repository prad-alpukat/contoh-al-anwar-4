import { useNavigate } from "react-router-dom";

export default function NavbarAdmin() {
  const navigate = useNavigate();

  function handleLogout() {
    const konfirmasi = confirm("Apakah kamu yakin untuk logout?");
    if (konfirmasi) {
      //   remove token
      localStorage.removeItem("token");

      // redirect ke halaman login
      navigate("/admin/login");
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Logo Admin
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button onClick={handleLogout} className="btn btn-danger btn-sm">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
