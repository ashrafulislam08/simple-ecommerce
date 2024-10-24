import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="nav-container">
      {/* Logo */}
      <div className="logo">
        <h2>Simple Ecommerce</h2>
      </div>

      {/* Nav Items */}
      <div className="nav-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
