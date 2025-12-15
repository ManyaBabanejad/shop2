function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h3>سبد خرید</h3>

      {cart.length === 0 && <p>سبد خالی است</p>}

      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <span>{item.title}</span>
          <span>{item.price} $</span>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="cart-total">
          <span>جمع کل:</span>
          <span>{total} $</span>
        </div>
      )}
    </div>
  );
}

export default Cart;
