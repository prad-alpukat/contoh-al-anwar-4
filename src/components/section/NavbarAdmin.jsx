export default function NavbarAdmin() {
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
              <a className="btn btn-danger btn-sm" aria-current="page" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
