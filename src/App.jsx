import React, { useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Products from "./Products.jsx";
import "./App.css"

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <>
          <Header user={user} setUser={setUser} />
          <Products />
        </>
      )}
    </div>
  );
}

export default App;
