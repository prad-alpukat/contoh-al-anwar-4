import { useNavigate } from "react-router-dom";

export default function FormLogin() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    //  fetch api login
    //   ...

    //   behasil login
    alert("berhasil login");

    // set token ke localstorage
    localStorage.setItem("token", "alkdsjfklajsdkf");
    navigate("/admin");
  }
  return (
    <section className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card my-5">
            <div className="card-body">
              <form>
                <h3>Al Anwar 4 - Admin Login</h3>
                {/* username */}
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="username..."
                  />
                </div>
                {/* password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="password..."
                  />
                </div>
                <button onClick={handleSubmit} className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
