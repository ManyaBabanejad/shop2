import { useState } from "react";
import Header from "./components/Header";
import Products from "./Products";
import Sidebar from "./components/Sidebar";
import CartDrawer from "./components/CartDrawer";
import LoginPopup from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="app">
      <Header user={user} setUser={setUser} />

      <div className="layout">
        <Sidebar 
          setIsCartOpen={setIsCartOpen} 
          setIsLoginOpen={setIsLoginOpen} 
        />
        <Products cart={cart} setCart={setCart} setIsCartOpen={setIsCartOpen} />
      </div>

      <CartDrawer
        cart={cart}
        setCart={setCart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />

      {isLoginOpen && (
        <Login setUser={setUser} setIsLoginOpen={setIsLoginOpen} />
      )}

      {user && <Dashboard user={user} />}
    </div>
  );
}

export default App;
