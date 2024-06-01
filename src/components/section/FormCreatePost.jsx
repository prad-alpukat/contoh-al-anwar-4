export default function FormCreatePost() {
  return (
    <section className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card my-5">
            <div className="card-body">
              <form>
                <h3>Membuat Postingan Blog</h3>
                {/* input image thumbnail */}
                <div className="mb-3">
                  <label htmlFor="featured_media" className="form-label">
                    Featured Media
                  </label>
                  <input className="form-control" type="file" id="featured_media" />
                </div>

                {/* judul */}
                <div className="mb-3">
                  <label htmlFor="judul" className="form-label">
                    Judul
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="judul"
                    placeholder="judul blog..."
                  />
                </div>

                {/* konten */}
                <div className="mb-3">
                  <label htmlFor="konten" className="form-label">
                    Konten
                  </label>
                  <textarea
                    className="form-control"
                    id="konten"
                    rows={3}
                    placeholder="konten blog..."
                  />
                </div>
                <button className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
