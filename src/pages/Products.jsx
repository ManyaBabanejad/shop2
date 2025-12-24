import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Products({ cart, setCart, setIsCartOpen }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(setProducts);
  }, []);

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);

    if (exists) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    setIsCartOpen(true);
  };

  return (
    <div className="products-grid">
      {products.map(p => (
        <ProductCard
          key={p.id}
          product={p}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default Products;
