import './App.css';

function App() {
  return (
    <div>
      <IndexHeader />
          <Link to="/news">Invoices</Link>
      <Footer />
      <Outlet />
    </div>
  );
}

export default App;
