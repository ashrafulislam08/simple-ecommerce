import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="nav-container">
      {/* Logo */}
      <div className="logo">
        <h2>Simple E-commerce</h2>
      </div>

      {/* Nav Items */}
      <div className="nav-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Cart 1</a>
          </li>
          <li>
            <a href="#">$500</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
