export default function Card({ image, title, price, quantity, createdAt }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt={title} />
      </div>
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="card-price">{price}</div>
        <div className="card-quantity">{quantity}</div>
        <div className="card-createdAt">{createdAt}</div>
      </div>
    </div>
  );
}
