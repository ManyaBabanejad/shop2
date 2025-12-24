function Sidebar({ setIsCartOpen ,setIsDashboardOpen }) {
  return (
    <aside className="sidebar">
      <button onClick={() => setIsCartOpen(true)}>🛒 سبد خرید</button>
      <button onClick={() => setIsDashboardOpen(true)}>📊 داشبورد</button>
 
    </aside>
  );
}

export default Sidebar;
