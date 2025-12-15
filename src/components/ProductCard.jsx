function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />

      <h4>{product.title}</h4>
      <p>{product.price} $</p>

      <button onClick={() => addToCart(product)}>
        اضافه به سبد
      </button>
    </div>
  );
}

export default ProductCard;

