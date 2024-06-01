import { useNavigate, useState } from "react-router-dom";

export default function FormLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    //  fetch api login
    fetch("https://web.abdulhaxor.my.id/wp-json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: new URLSearchParams({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("berhasil login");
        console.log(data);
        localStorage.setItem("token", data.token);
        navigate("/admin");
      });
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
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
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
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
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
