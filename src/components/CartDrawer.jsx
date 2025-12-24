function CartDrawer({ cart, setCart, isCartOpen, setIsCartOpen }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const increaseQty = (id) => {
     setCart( cart.map(item => item.id === id 
        ?
        { ...item, quantity: item.quantity + 1 } : item ) ); };
  const decreaseQty = (id) => {
     setCart( cart.map(item => item.id === id 
        ?
        { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item ) ); };
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  if (!isCartOpen) return null;

  return (
    <div className="cart-drawer">
      <button onClick={() => setIsCartOpen(false)}>❌ بستن</button>
      <h3>سبد خرید</h3>

      {cart.length === 0 && <p>سبد خالی است</p>}


      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.title}</span>
          <div className="cart-controls">
            <button onClick={() => increaseQty(item.id)}>➕</button>
            <span>{item.quantity}</span>
            <button onClick={() => decreaseQty(item.id)}>➖</button>
          </div>
          <span>{item.price}$</span>
          <button onClick={() => removeItem(item.id)}>🗑</button>
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

export default CartDrawer;
