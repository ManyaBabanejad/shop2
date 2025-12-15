import React from "react";

function Header({ user, setUser }) {
  return (
    <header className="header">
      <h1>فروشگاه آنلاین</h1>
      <div>
        <span>{user} به فروشگاه خوش آمدی.</span>
        <button onClick={() => setUser(null)}>خروج</button>
      </div>
    </header>
  );
}

export default Header;
