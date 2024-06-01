import CardProgram from "../ui/CardProgram";

export default function SectionProgram() {
  return (
    <section>
      <div className="container">
        <div className="row bg-primary-subtle h-100">
          <div className="col-4 bg-danger">
            <div className="d-flex flex-column h-100">
              <h2>Program</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec turpis at massa.
              </p>
              <img
                className="w-100 img-program object-fit-cover"
                src="https://picsum.photos/300/300"
                alt="random image"
              />
            </div>
          </div>
          <div className="col-4">
            <div className="d-flex flex-column h-100">
              <CardProgram />
              <CardProgram />
              <CardProgram />
            </div>
          </div>
          <div className="col-4">
            <div className="d-flex flex-column h-100">
              <CardProgram />
              <CardProgram />
              <CardProgram />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
