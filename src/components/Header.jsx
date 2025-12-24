function Header({ user, setUser, cartCount }) {
  return (
    <header className="header">
      <h2>🛍 فروشگاه آنلاین</h2>

      <div>
       
        <span>{user} خوش آمدی</span>
        <button onClick={() => setUser(null)}>خروج</button>
      </div>
    </header>
  );
}

export default Header;
