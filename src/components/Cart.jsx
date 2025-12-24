function Cart({ cart, setCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="cart">
      <h3>سبد خرید</h3>

      {cart.length === 0 && <p>سبد خالی است</p>}

      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <span>{item.title}</span>
          <span>{item.price} $</span>
          <button onClick={() => removeItem(index)}>❌</button>
        </div>
      ))}

      {cart.length > 0 && (
        <div>
          <strong>جمع کل: {total} $</strong>
        </div>
      )}
    </div>
  );
}

export default Cart;
