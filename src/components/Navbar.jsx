const Navbar = () => {
  const navbarList = ["Home", "About", "Product", "Help", "Login"];
  return (
    <ul className="navbar-list">
      {/* {navbarList.map((item) => {
        return <li key={item}>{item}</li>;
      })} */}
      {navbarList.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Navbar;
