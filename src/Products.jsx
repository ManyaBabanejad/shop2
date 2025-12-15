import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import "./App.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="page">
      <div className="products">
        {products.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            addToCart={addToCart}
          />
        ))}
      </div>

      <Cart cart={cart} />
    </div>
  );
}

export default Products;
