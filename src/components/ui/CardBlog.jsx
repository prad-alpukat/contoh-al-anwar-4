export default function CardBlog({ image }) {
  return (
    <div className="card mb-3">
      <img src={image} className="card-img-top card-blog-img" alt="random" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card &apos;
          content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
