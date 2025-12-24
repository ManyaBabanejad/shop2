import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>{product.price} $</p>

      <button onClick={() => addToCart(product)}>افزودن به سبد</button>
      <Link to={`/product/${product.id}`}>جزئیات</Link>
    </div>
  );
}

export default ProductCard;
