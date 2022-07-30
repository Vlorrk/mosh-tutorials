const NavBar = ({ totalCounters }) => {
  return (
    <nav class="navbar navbar-light bg-light p-2">
      <a className="navbar-brand" href="#">
        Cart{" "}
        <span className="badge rounded-pill bg-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
