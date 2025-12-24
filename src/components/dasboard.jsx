function Dashboard({ user }) {
  return (
    <div className="dashboard">
      <h2>داشبورد</h2>
      <p>خوش آمدی {user.name} 👋</p>

    </div>
  );
}

export default Dashboard;
