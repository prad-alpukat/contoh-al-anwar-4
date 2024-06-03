import CardBlog from "../ui/CardBlog";

export default function SectionBlog() {
  const images = [
    "https://picsum.photos/500/200",
    "https://picsum.photos/200/100",
    "https://picsum.photos/400/200",
    "https://picsum.photos/200/400",
  ];

  return (
    <section>
      <div className="container py-5">
        <div className="row py-5">
          {images.map((image, index) => {
            return (
              <div className="col-4" key={index}>
                <CardBlog image={image} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
